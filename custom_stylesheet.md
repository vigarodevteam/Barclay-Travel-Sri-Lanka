/* ==========================================================================
   Barclay Travel Sri Lanka — Custom Stylesheet
   ========================================================================== */

:root {
  --ceylon-primary: #2a4336;
  --ceylon-dark: #121e18;
  --cinnamon-accent: #ae633f;
  --sand-bg: #faf9f6;
}

/* Smooth focus & typography refinements */
body {
  font-feature-settings: "cv02", "cv03", "cv04", "cv11";
  overflow-x: hidden;
}

/* Desktop hover dropdown transitions */
.group .dropdown-panel {
  opacity: 0;
  visibility: hidden;
  transform: translateY(6px);
  transition: opacity 0.18s ease, transform 0.18s ease, visibility 0.18s ease;
}

.group:hover .dropdown-panel,
.group:focus-within .dropdown-panel {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

/* Modal entry animation */
@keyframes modalFadeIn {
  from {
    opacity: 0;
    transform: translateY(10px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.modal-card {
  animation: modalFadeIn 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

/* Custom subtle scrollbar */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: #f3f1eb;
}

::-webkit-scrollbar-thumb {
  background: #cadcd0;
  border-radius: 9999px;
}

::-webkit-scrollbar-thumb:hover {
  background: #769f86;
}