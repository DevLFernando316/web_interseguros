<template>
  <div class="not-found">
    <div class="container text-center">
      <div class="error-icon">
        <i class="bi bi-exclamation-triangle"></i>
      </div>
      <h1>404</h1>
      <h2>Página No Encontrada</h2>
      <p>Lo sentimos, la página que buscas no existe o ha sido movida.</p>
      <div class="actions">
        <router-link to="/" class="btn btn-primary-custom">
          <i class="bi bi-house"></i> Volver al Inicio
        </router-link>
        <router-link to="/servicios" class="btn btn-outline-custom">
          Ver Servicios
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.not-found {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.error-icon {
  font-size: 8rem;
  color: var(--accent-color);
  margin-bottom: 2rem;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

h1 {
  font-size: 8rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 1rem;
  line-height: 1;
}

h2 {
  font-size: 2rem;
  color: var(--text-dark);
  margin-bottom: 1rem;
}

p {
  font-size: 1.2rem;
  color: var(--text-light);
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  h1 {
    font-size: 5rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  .error-icon {
    font-size: 5rem;
  }

  .actions {
    flex-direction: column;
    width: 100%;
  }

  .actions .btn {
    width: 100%;
  }
}
</style>
