-- Barclay Travel Sri Lanka Database Schema
CREATE DATABASE IF NOT EXISTS barclay_travel CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE barclay_travel;

CREATE TABLE IF NOT EXISTS enquiries (
    id INT AUTO_INCREMENT PRIMARY KEY,
    reference_code VARCHAR(20) NOT NULL UNIQUE,
    enquiry_type VARCHAR(60) NOT NULL,
    full_name VARCHAR(150) NOT NULL,
    email_or_contact VARCHAR(150) NOT NULL,
    payload_json JSON NOT NULL,
    status ENUM(
        'Enquiry received',
        'Awaiting supplier confirmation',
        'Awaiting payment',
        'Payment received',
        'Payment pending',
        'Payment unsuccessful',
        'Booking confirmed',
        'Balance reminder',
        'Booking cancelled',
        'Ride interest received'
    ) NOT NULL DEFAULT 'Enquiry received',
    status_message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB;

CREATE INDEX idx_reference_code ON enquiries(reference_code);
CREATE INDEX idx_enquiry_type ON enquiries(enquiry_type);