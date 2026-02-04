<template>
  <section class="cta-section">
    <div class="container text-center">
      <div class="cta-content">
        <h2>
          En Interseguros convertimos el seguro en una herramienta de
          estabilidad, control y crecimiento
        </h2>
        <p>Protege lo que más valoras con soluciones integrales de seguros</p>
        <router-link to="/contacto" class="btn btn-cta">
          <i class="bi bi-chat-dots"></i> Solicitar Cotización
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.cta-section {
  background: var(--accent-color);
  color: var(--white);
  padding: 80px 0;
  position: relative;
  overflow: hidden;
}

.cta-section::before {
  content: "";
  position: absolute;
  top: -50%;
  left: -10%;
  width: 120%;
  height: 200%;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.1) 0%,
    transparent 70%
  );
  animation: pulse 4s ease-in-out infinite;
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.8;
  }
}

.cta-content {
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
}

.cta-content h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.3;
}

.cta-content p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.95;
}

.btn-cta {
  background: var(--white);
  color: var(--accent-color);
  padding: 1rem 2.5rem;
  border-radius: 30px;
  font-weight: 600;
  border: none;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
  font-size: 1.1rem;
}

.btn-cta:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

@media (max-width: 768px) {
  .cta-content h2 {
    font-size: 2rem;
  }

  .cta-content p {
    font-size: 1rem;
  }

  .btn-cta {
    padding: 0.9rem 2rem;
    font-size: 1rem;
  }
}
</style>
