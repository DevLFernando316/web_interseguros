<template>
  <section class="hero-section">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 hero-content fade-in">
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
        <div class="col-lg-6 hero-image slide-in-right">
          <div class="hero-illustration">
            <i class="bi bi-shield-check"></i>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.hero-section {
  background: linear-gradient(
    135deg,
    var(--primary-color) 0%,
    var(--secondary-color) 100%
  );
  color: var(--white);
  height: calc(100vh - var(--navbar-height));
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 2rem 0;
  margin-top: var(--navbar-height);
}

/* Para pantallas con poca altura */
@media (max-height: 800px) {
  .hero-section {
    min-height: auto;
    padding: calc(var(--navbar-height) + 1rem) 0 2rem 0;
  }

  .hero-title {
    font-size: 2.3rem;
    margin-bottom: 1rem;
    line-height: 1.1;
  }

  .hero-subtitle {
    font-size: 1rem;
    margin-bottom: 1.2rem;
  }

  .hero-illustration {
    font-size: 10rem;
  }

  .hero-buttons .btn {
    padding: 0.8rem 1.5rem;
  }
}

/* Desktop con poca altura - ocultar escudo para más espacio */
@media (min-width: 992px) and (max-height: 750px) {
  .hero-illustration {
    display: none;
  }
}

/* Para pantallas MUY pequeñas en altura */
@media (max-height: 700px) {
  .hero-section {
    padding: calc(var(--navbar-height) + 0.5rem) 0 1.5rem 0;
  }

  .hero-title {
    font-size: 2rem;
    margin-bottom: 0.8rem;
  }

  .hero-subtitle {
    font-size: 0.95rem;
    margin-bottom: 1rem;
  }

  .hero-illustration {
    display: none;
  }
}

.hero-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgba(255,255,255,0.05)" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,101.3C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>');
  background-size: cover;
  opacity: 0.1;
}

.hero-content {
  position: relative;
  z-index: 1;
}

.hero-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.1;
}

.hero-subtitle {
  font-size: 1.1rem;
  font-weight: 300;
  margin-bottom: 1.5rem;
  opacity: 0.95;
  line-height: 1.5;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.hero-buttons .btn {
  padding: 0.8rem 1.5rem;
  border-radius: 30px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-outline-light-custom {
  background: transparent;
  border: 2px solid var(--white);
  color: var(--white);
  text-decoration: none;
  display: inline-block;
}

.btn-outline-light-custom:hover {
  background: var(--white);
  color: var(--primary-color);
  transform: translateY(-3px);
}

.hero-illustration {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15rem;
  color: rgba(255, 255, 255, 0.1);
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

@media (max-width: 991px) {
  .hero-section {
    padding: 2rem 0;
    padding-top: 10rem;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .hero-illustration {
    font-size: 10rem;
    margin-top: 3rem;
  }
}

@media (max-width: 576px) {
  .hero-section {
    padding: 2rem 0;
    padding-top: 10rem;
  }

  .hero-title {
    font-size: 1.75rem;
    margin-bottom: 1rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .hero-buttons {
    flex-direction: column;
  }

  .hero-buttons .btn {
    width: 100%;
    text-align: center;
  }

  .hero-illustration {
    font-size: 8rem;
    margin-top: 2rem;
  }
}
</style>
