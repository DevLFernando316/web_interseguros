<template>
  <a
    href="https://wa.me/573178918767?text=Hola%20Interseguros,%20me%20gustaría%20obtener%20información%20sobre%20sus%20servicios%20de%20seguros.%20¿Podrían%20ayudarme?"
    target="_blank"
    rel="noopener noreferrer"
    class="whatsapp-button"
    aria-label="Contactar por WhatsApp"
  >
    <img
      src="@/assets/images/Avatar_chat.png"
      alt="Chat WhatsApp"
      class="whatsapp-icon"
    />
    <span class="whatsapp-tooltip">¿Necesitas ayuda?</span>
  </a>
</template>

<script setup></script>

<style scoped>
.whatsapp-button {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 75px;
  height: 75px;
  border-radius: 50%;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  cursor: pointer;
  transition: all 0.3s ease;
  animation: pulse 3s infinite;
  text-decoration: none;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.whatsapp-button:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 30px rgba(0, 0, 0, 0.25);
  animation: none;
}

.whatsapp-button:hover .whatsapp-tooltip {
  opacity: 1;
  visibility: visible;
  transform: translateX(-10px);
}

.whatsapp-icon {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 50%;
}

.whatsapp-tooltip {
  position: absolute;
  right: 85px;
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
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  }
  50% {
    transform: scale(1.02);
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
  }
}

/* Tablet */
@media (max-width: 991px) {
  .whatsapp-button {
    width: 70px;
    height: 70px;
    bottom: 1.8rem;
    right: 1.8rem;
  }

  .whatsapp-tooltip {
    right: 80px;
    font-size: 0.85rem;
    padding: 0.5rem 0.9rem;
  }
}

/* Mobile */
@media (max-width: 768px) {
  .whatsapp-button {
    bottom: 1.5rem;
    right: 1.5rem;
    width: 65px;
    height: 65px;
  }

  .whatsapp-tooltip {
    display: none;
  }
}

/* Mobile pequeño */
@media (max-width: 576px) {
  .whatsapp-button {
    bottom: 1rem;
    right: 1rem;
    width: 60px;
    height: 60px;
  }
}

/* Mobile muy pequeño */
@media (max-width: 375px) {
  .whatsapp-button {
    bottom: 0.8rem;
    right: 0.8rem;
    width: 55px;
    height: 55px;
  }
}
</style>
