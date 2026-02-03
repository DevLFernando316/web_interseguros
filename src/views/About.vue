<template>
  <div class="about-page">
    <div class="page-header">
      <div class="container">
        <h1>Nosotros</h1>
        <p>Conoce más sobre Interseguros</p>
      </div>
    </div>

    <section class="section">
      <div class="container">
        <div class="row mb-5 align-items-center">
          <div class="col-lg-6 mb-4 mb-lg-0">
            <div class="content-wrapper" ref="contentWrapper">
              <h2 class="section-title">¿Quiénes Somos?</h2>
              <p>
                En <strong>Interseguros</strong> brindamos asesoría
                especializada en seguros, orientada a la protección del
                patrimonio, la continuidad operativa y la gestión eficiente del
                riesgo para personas, familias y empresas.
              </p>
              <p>
                Trabajamos con aseguradoras de primer nivel y desarrollamos
                soluciones alineadas con las necesidades financieras y
                operativas de cada cliente.
              </p>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="image-container-wrapper" ref="imageContainer">
              <div class="image-container">
                <img
                  src="@/assets/images/presentacion_seguros.webp"
                  alt="Presentación Interseguros"
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

              <!-- Badge de años de experiencia -->
              <div class="about-badge">
                <div class="badge-content">
                  <div class="badge-number">+10</div>
                  <div class="badge-text">Años de<br />experiencia</div>
                </div>
                <div class="badge-glow"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="row" ref="cardsContainer">
          <div class="col-lg-6 mb-4">
            <div class="info-card">
              <i class="bi bi-bullseye"></i>
              <h3>Misión</h3>
              <p>
                Brindar soluciones integrales en seguros que protejan el
                patrimonio y garanticen la continuidad operativa de nuestros
                clientes, a través de asesoría especializada y un servicio de
                excelencia.
              </p>
            </div>
          </div>
          <div class="col-lg-6 mb-4">
            <div class="info-card">
              <i class="bi bi-eye"></i>
              <h3>Visión</h3>
              <p>
                Ser la firma de asesoría en seguros más confiable y reconocida
                en Colombia, destacándonos por nuestra calidad de servicio,
                innovación y compromiso con la protección integral de nuestros
                clientes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const contentWrapper = ref(null);
const imageContainer = ref(null);
const cardsContainer = ref(null);
let observers = [];

onMounted(() => {
  const observerOptions = {
    threshold: 0.2,
    rootMargin: "0px",
  };

  const observer1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in");
      }
    });
  }, observerOptions);

  const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in");
      }
    });
  }, observerOptions);

  const observer3 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in");
      }
    });
  }, observerOptions);

  if (contentWrapper.value) {
    observer1.observe(contentWrapper.value);
    observers.push(observer1);
  }

  if (imageContainer.value) {
    observer2.observe(imageContainer.value);
    observers.push(observer2);
  }

  if (cardsContainer.value) {
    observer3.observe(cardsContainer.value);
    observers.push(observer3);
  }
});

onUnmounted(() => {
  observers.forEach((observer) => observer.disconnect());
});
</script>

<style scoped>
.about-page {
  padding-top: 70px;
}

.page-header {
  background: linear-gradient(
    135deg,
    var(--primary-color) 0%,
    var(--secondary-color) 100%
  );
  color: var(--white);
  padding: 100px 0 60px;
  text-align: center;
}

.page-header h1 {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.page-header p {
  font-size: 1.2rem;
  opacity: 0.9;
}

.section {
  padding: 80px 0;
}

.row {
  --bs-gutter-x: 4rem;
}

/* Animaciones de entrada para el contenido */
.content-wrapper {
  opacity: 0;
  transform: translateX(-30px);
  transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
}

.content-wrapper.animate-in {
  opacity: 1;
  transform: translateX(0);
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

.content-wrapper p {
  font-size: 1.05rem;
  line-height: 1.8;
  color: var(--text-light);
  margin-bottom: 20px;
}

.content-wrapper strong {
  color: var(--primary-color);
  font-weight: 700;
}

/* Contenedor de imagen con animación */
.image-container-wrapper {
  position: relative;
  opacity: 0;
  transform: translateX(30px);
  transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
}

.image-container-wrapper.animate-in {
  opacity: 1;
  transform: translateX(0);
}

.image-container-wrapper.animate-in .floating-card {
  opacity: 1;
  transform: translateY(0);
}

.image-container-wrapper.animate-in .about-badge {
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
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
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

/* Posicionamiento de tarjetas */
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

/* Badge de años de experiencia */
.about-badge {
  position: absolute;
  bottom: 20px;
  right: -30px;
  z-index: 10;
  opacity: 0;
  transform: scale(0.8);
  transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1);
  transition-delay: 1.1s;
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

/* Info Cards con animación */
.row.animate-in .info-card:nth-child(1) {
  animation: slideInUp 0.8s ease forwards;
  animation-delay: 0.2s;
}

.row.animate-in .info-card:nth-child(2) {
  animation: slideInUp 0.8s ease forwards;
  animation-delay: 0.4s;
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.info-card {
  background: var(--white);
  border: 1px solid #e0e0e0;
  border-radius: 15px;
  padding: 2.5rem;
  height: 100%;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  opacity: 0;
}

.info-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, var(--accent-color), var(--accent-light));
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.info-card:hover::before {
  transform: scaleX(1);
}

.info-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
  border-color: var(--accent-color);
}

.info-card i {
  font-size: 3.5rem;
  color: var(--accent-color);
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease;
}

.info-card:hover i {
  transform: scale(1.1);
}

.info-card h3 {
  font-size: 1.75rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
  font-weight: 700;
}

.info-card p {
  color: var(--text-light);
  line-height: 1.8;
  font-size: 1rem;
}

/* Responsive */
@media (max-width: 992px) {
  .section {
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
  .page-header {
    padding: 80px 0 40px;
  }

  .page-header h1 {
    font-size: 2rem;
  }

  .page-header p {
    font-size: 1rem;
  }

  .section {
    padding: 50px 0;
  }

  .row {
    --bs-gutter-x: 1.5rem;
  }

  .image-container {
    height: 350px;
    margin-top: 30px;
  }

  .main-image {
    border-radius: 15px;
  }

  .section-title {
    font-size: 1.75rem;
  }

  .info-card {
    padding: 2rem;
  }

  .info-card i {
    font-size: 2.5rem;
  }

  .info-card h3 {
    font-size: 1.5rem;
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

  /* Simplificar animaciones en móvil */
  .content-wrapper,
  .image-container-wrapper {
    animation: none;
    opacity: 1;
    transform: none;
  }
}

@media (max-width: 576px) {
  .page-header h1 {
    font-size: 1.75rem;
  }

  .section-title {
    font-size: 1.5rem;
  }

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
