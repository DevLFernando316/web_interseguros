<template>
  <section class="about-section section">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 mb-4 mb-lg-0">
          <div class="about-image" ref="imageContainer">
            <div class="image-container">
              <img
                src="@/assets/images/presentacion_seguros.webp"
                alt="Interseguros - Asesoría en Seguros"
                class="main-image"
              />

              <!-- Tarjetas flotantes con glassmorphism -->
              <div class="floating-card card-1">
                <div class="glass-card">
                  <i class="bi bi-shield-check"></i>
                  <span>Seguro Todo Riesgo</span>
                </div>
              </div>

              <div class="floating-card card-2">
                <div class="glass-card">
                  <i class="bi bi-people"></i>
                  <span>Protección Familiar</span>
                </div>
              </div>

              <div class="floating-card card-3">
                <div class="glass-card">
                  <i class="bi bi-currency-dollar"></i>
                  <span>Gestión Financiera</span>
                </div>
              </div>
            </div>

            <!-- Badge de años de experiencia - SIN PULSE -->
            <div class="about-badge">
              <div class="badge-content">
                <div class="badge-number">+10</div>
                <div class="badge-text">Años de<br />experiencia</div>
              </div>
              <div class="badge-glow"></div>
            </div>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="mb-4">
            <h2 class="section-title">¿Quiénes Somos?</h2>
          </div>
          <div class="about-content">
            <p>
              En <strong>Interseguros</strong> brindamos asesoría especializada
              en seguros, orientada a la protección del patrimonio, la
              continuidad operativa y la gestión eficiente del riesgo para
              personas, familias y empresas.
            </p>
            <p>
              Trabajamos con aseguradoras de primer nivel y desarrollamos
              soluciones alineadas con las necesidades financieras y operativas
              de cada cliente.
            </p>
            <p class="text-muted">
              Nuestro compromiso es brindar tranquilidad y seguridad a través de
              productos personalizados que se adaptan a cada etapa de tu vida o
              negocio.
            </p>
            <router-link to="/nosotros" class="btn btn-outline-custom mt-3">
              Conocer más <i class="bi bi-arrow-right"></i>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const imageContainer = ref(null);
let observer = null;

onMounted(() => {
  // Intersection Observer para animaciones al hacer scroll
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    },
    {
      threshold: 0.2, // Se activa cuando el 20% es visible
    },
  );

  if (imageContainer.value) {
    observer.observe(imageContainer.value);
  }
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

<style scoped>
.about-section {
  background: var(--white);
  padding: 80px 0;
}

.row {
  --bs-gutter-x: 4rem; /* Aumentar separación entre columnas */
}

.about-content {
  font-size: 1.05rem;
  line-height: 1.8;
  color: var(--text-dark);
}

.about-content p {
  margin-bottom: 1.2rem;
}

.about-content strong {
  color: var(--primary-color);
  font-weight: 700;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--primary-color);
  margin-bottom: 25px;
  position: relative;
  padding-bottom: 15px;
}

.section-title::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 80px;
  height: 4px;
  background: var(--accent-color);
  border-radius: 2px;
}

.btn-outline-custom {
  background: transparent;
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
  padding: 12px 30px;
  border-radius: 30px;
  font-weight: 600;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
}

.btn-outline-custom:hover {
  background: var(--primary-color);
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(26, 58, 92, 0.3);
}

/* Contenedor de imagen */
.about-image {
  position: relative;
  opacity: 0;
  transform: translateX(-30px);
  transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Animación cuando entra en viewport */
.about-image.animate-in {
  opacity: 1;
  transform: translateX(0);
}

.about-image.animate-in .floating-card {
  opacity: 1;
  transform: translateY(0);
}

.about-image.animate-in .about-badge {
  opacity: 1;
  transform: scale(1);
}

.image-container {
  position: relative;
  border-radius: 20px;
  overflow: visible;
  height: 450px;
}

.main-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

/* Tarjetas flotantes con glassmorphism */
.floating-card {
  position: absolute;
  animation: float 3s ease-in-out infinite;
  z-index: 5;
  opacity: 0;
  transform: translateY(15px);
  transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
}

.glass-card {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  padding: 12px 18px;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  white-space: nowrap;
}

.glass-card:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: translateY(-5px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.glass-card i {
  font-size: 1.3rem;
  color: var(--accent-color);
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
}

.glass-card span {
  font-weight: 600;
  color: white;
  font-size: 0.85rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

/* Posicionamiento de tarjetas - sin tapar la cara */
.card-1 {
  top: 8%;
  left: -35px;
  animation-delay: 0s;
  transition-delay: 0.5s;
}

.card-2 {
  top: 48%;
  right: -40px;
  animation-delay: 1s;
  transition-delay: 0.7s;
}

.card-3 {
  bottom: 22%;
  left: -25px;
  animation-delay: 2s;
  transition-delay: 0.9s;
}

/* Animación de flotación */
@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-12px);
  }
}

/* Badge de años de experiencia - MÁS PEQUEÑO Y SUAVE */
.about-badge {
  position: absolute;
  bottom: 20px;
  right: -30px;
  z-index: 10;
  opacity: 0;
  transform: scale(0.8);
  transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1);
  transition-delay: 0.5s;
}

.badge-content {
  position: relative;
  background: linear-gradient(
    135deg,
    var(--accent-color) 0%,
    var(--accent-light) 100%
  );
  padding: 18px 28px;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 12px 35px rgba(15, 255, 168, 0.35);
  border: 2px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  z-index: 1;
}

.badge-number {
  font-size: 2.5rem;
  font-weight: 900;
  color: var(--text-dark);
  line-height: 1;
  margin-bottom: 4px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.badge-text {
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--text-dark);
  line-height: 1.3;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.badge-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120%;
  height: 120%;
  background: radial-gradient(
    circle,
    rgba(15, 255, 168, 0.3) 0%,
    transparent 70%
  );
  border-radius: 50%;
  z-index: 0;
  animation: glow 2s ease-in-out infinite;
}

@keyframes glow {
  0%,
  100% {
    opacity: 0.5;
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    opacity: 0.8;
    transform: translate(-50%, -50%) scale(1.1);
  }
}

/* Responsive */
@media (max-width: 991px) {
  .about-section {
    padding: 60px 0;
  }

  .section-title {
    font-size: 2rem;
  }

  .image-container {
    height: 400px;
  }

  .about-badge {
    bottom: 15px;
    right: 15px;
  }

  .badge-content {
    padding: 16px 24px;
  }

  .badge-number {
    font-size: 2.2rem;
  }

  .badge-text {
    font-size: 0.75rem;
  }

  /* Ocultar tarjetas flotantes en tablet */
  .floating-card {
    display: none;
  }
}

@media (max-width: 768px) {
  .about-section {
    padding: 50px 0;
  }

  .section-title {
    font-size: 1.75rem;
  }

  .image-container {
    height: 350px;
    margin-bottom: 30px;
  }

  .main-image {
    border-radius: 15px;
  }

  .about-badge {
    bottom: 10px;
    right: 10px;
  }

  .badge-content {
    padding: 14px 22px;
  }

  .badge-number {
    font-size: 2rem;
  }

  .badge-text {
    font-size: 0.7rem;
  }

  .about-content {
    font-size: 1rem;
  }

  .btn-outline-custom {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 576px) {
  .image-container {
    height: 300px;
  }

  .about-badge {
    right: 5px;
    bottom: 5px;
  }

  .badge-content {
    padding: 12px 18px;
  }

  .badge-number {
    font-size: 1.75rem;
  }

  .badge-text {
    font-size: 0.65rem;
  }
}
</style>
