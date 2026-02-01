<template>
  <a
    href="https://wa.me/573178918767"
    target="_blank"
    rel="noopener noreferrer"
    class="whatsapp-button"
    aria-label="Contactar por WhatsApp"
  >
    <svg
      class="whatsapp-icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
    >
      <circle cx="50" cy="50" r="48" fill="#25D366"></circle>
      <path
        fill="white"
        d="M50 15c-19.3 0-35 15.7-35 35 0 6.1 1.6 11.8 4.4 16.8L15 80l13.5-4.2c4.8 2.6 10.3 4.2 16.5 4.2 19.3 0 35-15.7 35-35S69.3 15 50 15zm20.1 49.8c-.8 2.3-4.7 4.4-6.5 4.7-1.7.2-3.3.8-11.1-2.3-9.5-3.8-15.6-13.4-16.1-14-.5-.6-4-5.3-4-10.1s2.5-7.2 3.4-8.2c.9-1 2-1.2 2.7-1.2.6 0 1.3 0 1.8.1.6 0 1.4-.2 2.2 1.7.8 1.9 2.8 6.8 3 7.3.3.5.5 1 .1 1.6-.3.6-.5.9-.9 1.4-.5.5-1 1.1-1.4 1.5-.5.4-.9.9-.4 1.8.5.9 2.2 3.6 4.7 5.8 3.2 2.9 5.9 3.8 6.7 4.2.8.4 1.3.3 1.8-.2.5-.5 2.1-2.5 2.7-3.3.6-.9 1.1-.7 1.9-.4.8.3 4.9 2.3 5.7 2.7.8.4 1.4.6 1.6 1 .2.3.2 2-.6 4.3z"
      ></path>
    </svg>
    <span class="whatsapp-tooltip">¿Necesitas ayuda?</span>
  </a>
</template>

<script setup></script>

<style scoped>
.whatsapp-button {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #25d366;
  box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  cursor: pointer;
  transition: all 0.3s ease;
  animation: pulse 2s infinite;
  text-decoration: none;
}

.whatsapp-button:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 30px rgba(37, 211, 102, 0.6);
  animation: none;
}

.whatsapp-button:hover .whatsapp-tooltip {
  opacity: 1;
  visibility: visible;
  transform: translateX(-10px);
}

.whatsapp-icon {
  width: 60px;
  height: 60px;
}

.whatsapp-tooltip {
  position: absolute;
  right: 70px;
  background: var(--primary-color);
  color: white;
  padding: 0.6rem 1rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.whatsapp-tooltip::after {
  content: "";
  position: absolute;
  right: -8px;
  top: 50%;
  transform: translateY(-50%);
  border: 8px solid transparent;
  border-left-color: var(--primary-color);
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
    box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 6px 30px rgba(37, 211, 102, 0.6);
  }
}

@media (max-width: 768px) {
  .whatsapp-button {
    bottom: 1.5rem;
    right: 1.5rem;
    width: 55px;
    height: 55px;
  }

  .whatsapp-icon {
    width: 55px;
    height: 55px;
  }

  .whatsapp-tooltip {
    display: none;
  }
}

@media (max-width: 576px) {
  .whatsapp-button {
    bottom: 1rem;
    right: 1rem;
    width: 50px;
    height: 50px;
  }

  .whatsapp-icon {
    width: 50px;
    height: 50px;
  }
}
</style>
