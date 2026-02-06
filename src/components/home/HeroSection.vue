<template>
  <section class="hero-section">
    <div class="hero-background">
      <img
        src="@/assets/images/Banner_principal.png"
        alt="Interseguros"
        class="hero-image"
      />
    </div>

    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="hero-content">
            <h1 class="hero-title">
              Soluciones Estratégicas en Gestión y Transferencia del Riesgo
            </h1>
            <p class="hero-subtitle">
              Protegemos tu patrimonio, tu familia y tu negocio con asesoría
              especializada y soluciones integrales de seguros.
            </p>
            <div class="hero-buttons">
              <router-link to="/servicios" class="btn btn-primary-custom">
                Conocer Servicios <i class="bi bi-arrow-right"></i>
              </router-link>
              <router-link to="/contacto" class="btn btn-outline-light-custom">
                Contactar Asesor
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(
    135deg,
    var(--primary-color) 10%,
    var(--secondary-color) 100%
  );
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  z-index: 1;
}

.hero-background::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to right,
    var(--primary-color) 0%,
    transparent 20%
  );
  z-index: 2;
}

.hero-image {
  margin-top: 10%;
  width: 100%;
  height: 100%;
  object-fit: fill;
}

.container {
  position: relative;
  z-index: 3;
}

.hero-content {
  color: white;
  padding: 2rem 0;
}

.hero-title {
  font-size: 2.8rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 1.15rem;
  margin-bottom: 2rem;
  opacity: 0.95;
  line-height: 1.6;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn {
  padding: 1rem 2rem;
  border-radius: 30px;
  font-weight: 600;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
}

.btn-primary-custom {
  background: var(--accent-color);
  color: var(--text-dark);
}

.btn-primary-custom:hover {
  background: var(--accent-light);
  transform: translateY(-3px);
}

.btn-outline-light-custom {
  background: transparent;
  border: 2px solid white;
  color: white;
}

.btn-outline-light-custom:hover {
  background: white;
  color: var(--primary-color);
}

@media (max-width: 991px) {
  .hero-background {
    width: 100%;
    opacity: 0.2;
  }

  .hero-title {
    font-size: 2.3rem;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .hero-buttons {
    flex-direction: column;
  }

  .btn {
    width: 100%;
    justify-content: center;
  }
}
</style>
