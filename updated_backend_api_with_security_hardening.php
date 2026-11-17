<?php
/**
 * Barclay Travel Sri Lanka — Backend API (Secured)
 */

require_once __DIR__ . '/security.php';

SecurityManager::applySecureHeaders();
header('Content-Type: application/json; charset=utf-8');

// Enforce rate limiting against attackers and bot spam
if (!SecurityManager::checkRateLimit('api_requests')) {
    http_response_code(429);
    echo json_encode(['ok' => false, 'message' => 'Too many requests. Please wait a few minutes before submitting another enquiry.']);
    exit;
}

$dbHost = '127.0.0.1';
$dbName = 'barclay_travel';
$dbUser = 'root';
$dbPass = '';

function getDbConnection(string $host, string $name, string $user, string $pass): ?PDO {
    try {
        $dsn = "mysql:host={$host};dbname={$name};charset=utf8mb4";
        return new PDO($dsn, $user, $pass, [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        ]);
    } catch (PDOException $e) {
        return null;
    }
}

$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';
$pdo = getDbConnection($dbHost, $dbName, $dbUser, $dbPass);

if ($method === 'GET') {
    $ref = strtoupper(trim($_GET['ref'] ?? ''));
    $cleanRef = preg_replace('/[^A-Z0-9\-]/', '', $ref);

    if ($cleanRef === '') {
        http_response_code(400);
        echo json_encode(['ok' => false, 'message' => 'Please enter a valid enquiry or booking reference.']);
        exit;
    }

    if ($pdo) {
        $stmt = $pdo->prepare('SELECT reference_code, enquiry_type, status, status_message, created_at FROM enquiries WHERE reference_code = :ref LIMIT 1');
        $stmt->execute([':ref' => $cleanRef]);
        $row = $stmt->fetch();

        if ($row) {
            echo json_encode([
                'ok' => true,
                'reference' => $row['reference_code'],
                'type' => $row['enquiry_type'],
                'status' => $row['status'],
                'message' => $row['status_message'],
                'created_at' => $row['created_at']
            ]);
            exit;
        }
    }

    echo json_encode([
        'ok' => false,
        'reference' => $cleanRef,
        'message' => "Reference {$cleanRef} was not found in our active records."
    ]);
    exit;
}

if ($method === 'POST') {
    $rawBody = file_get_contents('php://input');
    $data = json_decode($rawBody, true);

    if (!is_array($data)) {
        http_response_code(400);
        echo json_encode(['ok' => false, 'message' => 'Invalid request payload.']);
        exit;
    }

    $formType = SecurityManager::sanitizeInput($data['formType'] ?? 'Trip Enquiry');
    $fields = SecurityManager::sanitizeInput($data['fields'] ?? []);
    $fullName = trim($fields['fullName'] ?? $fields['name'] ?? $fields['contact'] ?? 'Guest');
    $contactInfo = trim($fields['email'] ?? $fields['contact'] ?? '');

    $reference = 'BT-SL-' . random_int(100000, 999999);
    $isGrandRide = ($formType === 'The Ceylon Grand Ride Interest');

    $status = $isGrandRide ? 'Ride interest received' : 'Enquiry received';
    $statusMessage = $isGrandRide
        ? 'Thank you for registering interest in The Ceylon Grand Ride. We will send entry information when arrangements are confirmed.'
        : "Thank you. We have received your enquiry {$reference}. We will check your request and contact you with the next steps.";

    if ($pdo) {
        try {
            $stmt = $pdo->prepare('
                INSERT INTO enquiries (reference_code, enquiry_type, full_name, email_or_contact, payload_json, status, status_message)
                VALUES (:ref, :type, :name, :contact, :payload, :status, :msg)
            ');
            $stmt->execute([
                ':ref' => $reference,
                ':type' => $formType,
                ':name' => $fullName,
                ':contact' => $contactInfo,
                ':payload' => json_encode($fields, JSON_UNESCAPED_UNICODE),
                ':status' => $status,
                ':msg' => $statusMessage
            ]);
        } catch (PDOException $e) {
            // Graceful fallback
        }
    }

    echo json_encode([
        'ok' => true,
        'reference' => $reference,
        'type' => $formType,
        'status' => $status,
        'message' => $statusMessage
    ]);
    exit;
}

http_response_code(405);
echo json_encode(['ok' => false, 'message' => 'Method not allowed.']);