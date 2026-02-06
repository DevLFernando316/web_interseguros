<template>
  <div class="service-detail" v-if="service">
    <div class="page-header">
      <div class="container">
        <div class="d-flex align-items-center justify-content-center mb-3">
          <div class="header-icon">
            <i :class="service.icon"></i>
          </div>
        </div>
        <h1>{{ service.title }}</h1>
        <p>{{ service.description }}</p>
      </div>
    </div>

    <section class="section">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mb-4">
            <div class="content-card">
              <h2>Descripción del Servicio</h2>
              <p>{{ service.longDescription }}</p>

              <div class="container">
                <div class="row align-items-center">
                  <!-- Columna Izquierda: Video -->
                  <div v-if="service.videoUrl" class="col-lg-5 mb-4 mb-lg-0">
                    <div class="video-container" ref="videoContainer">
                      <video
                        ref="videoPlayer"
                        class="value-video"
                        loop
                        playsinline
                      >
                        <source :src="service.videoUrl" type="video/mp4" />
                        Tu navegador no soporta el elemento de video.
                      </video>

                      <!-- Overlay con controles -->
                      <div
                        class="video-overlay"
                        :class="{ playing: isPlaying }"
                      >
                        <button class="play-button" @click="togglePlay">
                          <i
                            :class="
                              isPlaying ? 'bi bi-pause-fill' : 'bi bi-play-fill'
                            "
                          ></i>
                        </button>
                      </div>

                      <!-- Texto sobre el video -->
                      <div class="video-text">
                        <h2 class="section-title">{{ service.title }}</h2>
                        <p class="section-subtitle">Conoce más</p>
                      </div>
                    </div>
                  </div>

                  <!-- Columna Derecha: Valores -->
                  <div :class="service.videoUrl ? 'col-lg-7' : 'col-lg-12'">
                    <div class="values-wrapper">
                      <h3 class="mt-4">Coberturas Principales</h3>
                      <ul class="coverage-list">
                        <li
                          v-for="(coverage, index) in service.coverages"
                          :key="index"
                        >
                          <i class="bi bi-shield-check"></i>
                          <div>
                            <strong>{{ coverage.title }}</strong>
                            <p>{{ coverage.description }}</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <h3 class="mt-4">Beneficios</h3>
              <div class="benefits-grid">
                <div
                  v-for="(benefit, index) in service.benefits"
                  :key="index"
                  class="benefit-item"
                >
                  <i class="bi bi-check-circle-fill"></i>
                  {{ benefit }}
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="sidebar-card sticky-top">
              <h3>Solicita una Cotización</h3>
              <p>Obtén la mejor protección para ti y los tuyos</p>
              <form @submit.prevent="submitQuote" class="quote-form">
                <input
                  v-model="quoteForm.name"
                  type="text"
                  class="form-control mb-3"
                  placeholder="Nombre completo"
                  required
                />
                <input
                  v-model="quoteForm.phone"
                  type="tel"
                  class="form-control mb-3"
                  placeholder="Teléfono"
                  required
                />
                <input
                  v-model="quoteForm.email"
                  type="email"
                  class="form-control mb-3"
                  placeholder="Email"
                  required
                />
                <textarea
                  v-model="quoteForm.message"
                  class="form-control mb-3"
                  rows="3"
                  placeholder="Cuéntanos tus necesidades"
                ></textarea>
                <button type="submit" class="btn btn-primary-custom w-100">
                  <i class="bi bi-send"></i> Solicitar Cotización
                </button>
              </form>

              <div class="contact-info mt-4">
                <h4>¿Prefieres llamar?</h4>
                <a href="tel:+573178918767" class="contact-link">
                  <i class="bi bi-telephone"></i> +57 317 891 8767
                </a>
                <a
                  href="https://wa.me/573178918767"
                  target="_blank"
                  class="contact-link"
                >
                  <i class="bi bi-whatsapp"></i> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div v-else class="text-center py-5">
    <h2>Servicio no encontrado</h2>
    <router-link to="/servicios" class="btn btn-primary-custom mt-3">
      Ver todos los servicios
    </router-link>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import PolizaVida from "@/assets/videos/Poliza_de_vida.mp4";
import PolizaSalud from "@/assets/videos/Poliza_de_salud.mp4";
import SeguroVida from "@/assets/videos/Seguro_de_vida.mp4";
import RiesgoParticular from "@/assets/videos/Todo_riesgo_particular.mp4";
import RiesgoPesado from "@/assets/videos/Todo_riesgo_pesado.mp4";

const route = useRoute();
const router = useRouter();

const quoteForm = ref({
  name: "",
  phone: "",
  email: "",
  message: "",
});

const servicesData = {
  "vida-deudor": {
    slug: "vida-deudor",
    icon: "bi-credit-card",
    title: "Seguro de Vida Deudor",
    description: "Protección financiera para tus obligaciones crediticias",
    videoUrl: SeguroVida,
    longDescription:
      "El Seguro de Vida Deudor es un instrumento financiero esencial que garantiza el cumplimiento de tus obligaciones crediticias ante situaciones adversas como fallecimiento o incapacidad total y permanente. Este seguro protege a tu familia de la carga financiera de las deudas, permitiéndoles mantener su patrimonio y calidad de vida.",

    coverages: [
      {
        title: "Fallecimiento",
        description: "Cobertura por muerte natural o accidental del asegurado",
      },
      {
        title: "Incapacidad Total y Permanente",
        description: "Protección ante invalidez que impida trabajar",
      },
      {
        title: "Enfermedades Graves",
        description: "Cobertura opcional para diagnósticos críticos",
      },
    ],
    benefits: [
      "Protección de tu patrimonio familiar",
      "Tranquilidad financiera",
      "Primas competitivas",
      "Proceso de contratación ágil",
    ],
  },
  "poliza-vida": {
    slug: "poliza-vida",
    icon: "bi-heart-pulse",
    title: "Póliza de Vida",
    description: "Seguridad y protección para tus seres queridos",
    longDescription:
      "La Póliza de Vida es un mecanismo integral de protección financiera que respalda a tus beneficiarios ante fallecimiento, invalidez o eventos críticos. Diseñada para asegurar la estabilidad económica de tu familia, esta póliza combina protección con posibilidades de ahorro e inversión.",
    videoUrl: PolizaVida,
    coverages: [
      {
        title: "Muerte Natural o Accidental",
        description: "Suma asegurada completa para beneficiarios",
      },
      {
        title: "Invalidez Total y Permanente",
        description: "Pago anticipado por invalidez certificada",
      },
      {
        title: "Enfermedades Graves",
        description: "Adelanto de suma asegurada por diagnósticos críticos",
      },
      {
        title: "Gastos Funerarios",
        description: "Cobertura adicional para gastos de sepelio",
      },
    ],
    benefits: [
      "Protección integral familiar",
      "Posibilidad de ahorro programado",
      "Beneficios fiscales",
      "Flexibilidad en el pago de primas",
    ],
  },
  vehicular: {
    slug: "vehicular",
    icon: "bi-car-front",
    title: "Todo Riesgo Particular Familiar",
    description: "Protección completa para tu vehículo",
    longDescription:
      "El seguro Todo Riesgo Particular ofrece cobertura integral para vehículos particulares, mitigando riesgos asociados a daños propios, pérdidas por robo, hurto o destrucción total, además de responsabilidad civil. Tu tranquilidad al volante es nuestra prioridad.",
    videoUrl: RiesgoParticular,
    coverages: [
      {
        title: "Daños Propios",
        description: "Reparación por colisión, vuelco o cualquier accidente",
      },
      {
        title: "Pérdida Total",
        description: "Indemnización por robo, hurto o destrucción total",
      },
      {
        title: "Responsabilidad Civil",
        description: "Daños a terceros y lesiones personales",
      },
      {
        title: "Asistencia Vial 24/7",
        description: "Grúa, mecánica en sitio y otros servicios",
      },
    ],
    benefits: [
      "Vehículo de reemplazo durante reparación",
      "Conductor elegido sin restricción de edad",
      "Cobertura en todo el territorio nacional",
      "Descuentos por buen historial",
    ],
  },
  pesados: {
    slug: "pesados",
    icon: "bi-truck",
    title: "Todo Riesgo Pesados",
    description: "Protección especializada para tu negocio",
    longDescription:
      "Seguro especializado para vehículos de carga, transporte público, maquinaria pesada y equipo móvil. Protege tu inversión, cubre responsabilidad civil y garantiza la continuidad de tu operación comercial con coberturas diseñadas específicamente para el sector.",
    videoUrl: RiesgoPesado,
    coverages: [
      {
        title: "Daños a la Unidad",
        description: "Reparación completa del vehículo o maquinaria",
      },
      {
        title: "Responsabilidad Civil Extracontractual",
        description: "Daños a terceros hasta el límite contratado",
      },
      {
        title: "Pérdida Total",
        description: "Valor comercial o asegurado del equipo",
      },
      {
        title: "Asistencia Especializada",
        description: "Soporte técnico y grúa de alto tonelaje",
      },
    ],
    benefits: [
      "Coberturas ajustadas a tu operación",
      "Protección de tu inversión comercial",
      "Asistencia especializada 24/7",
      "Asesoría en prevención de riesgos",
    ],
  },
  salud: {
    slug: "salud",
    icon: "bi-hospital",
    title: "Póliza de Salud",
    description: "Tu salud y bienestar son lo primero",
    longDescription:
      "La Póliza de Salud es un mecanismo de protección financiera que ampara los costos de atención médica por enfermedad o accidente. Permite el acceso a servicios de diagnóstico, tratamiento ambulatorio, hospitalización y cirugías de acuerdo con las condiciones y límites del plan contratado.",
    videoUrl: PolizaSalud,
    coverages: [
      {
        title: "Hospitalización y Cirugía",
        description: "Cubrimiento de gastos hospitalarios y procedimientos",
      },
      {
        title: "Atención Ambulatoria",
        description: "Consultas, exámenes y tratamientos ambulatorios",
      },
      {
        title: "Medicamentos",
        description: "Cobertura de medicamentos formulados",
      },
      {
        title: "Urgencias Médicas",
        description: "Atención inmediata sin autorización previa",
      },
    ],
    benefits: [
      "Amplia red de prestadores",
      "Planes flexibles y personalizables",
      "Atención prioritaria",
      "Cobertura internacional opcional",
    ],
  },
  arl: {
    slug: "arl",
    icon: "bi-shield-check",
    title: "ARL - Administradora de Riesgos Laborales",
    description: "Protección y prevención laboral",
    longDescription:
      "El sistema de Administración de Riesgos Laborales (ARL) es un mecanismo obligatorio que cubre accidentes de trabajo y enfermedades profesionales, asegurando el cumplimiento normativo y la protección integral del capital humano de tu empresa. Incluye prevención, atención médica y prestaciones económicas.",
    coverages: [
      {
        title: "Accidentes de Trabajo",
        description: "Atención médica completa y prestaciones económicas",
      },
      {
        title: "Enfermedades Laborales",
        description: "Diagnóstico, tratamiento y rehabilitación",
      },
      {
        title: "Incapacidades",
        description: "Pago de incapacidades temporales y permanentes",
      },
      {
        title: "Pensión de Invalidez",
        description: "Protección ante invalidez por causa laboral",
      },
    ],
    benefits: [
      "Cumplimiento legal obligatorio",
      "Programas de prevención y capacitación",
      "Asesoría en Sistema de Gestión SST",
      "Reducción del ausentismo laboral",
    ],
  },
};

const service = computed(() => {
  return servicesData[route.params.slug];
});

const submitQuote = () => {
  alert("¡Gracias por tu interés! Nos pondremos en contacto contigo pronto.");
  quoteForm.value = {
    name: "",
    phone: "",
    email: "",
    message: "",
  };
};

const videoPlayer = ref(null);
const videoContainer = ref(null);
const valueItems = ref([]);
const isPlaying = ref(false);
let observer = null;

// Reproducir/Pausar video
const togglePlay = () => {
  if (!videoPlayer.value) return;

  if (isPlaying.value) {
    videoPlayer.value.pause();
    isPlaying.value = false;
  } else {
    videoPlayer.value.play();
    isPlaying.value = true;
  }
};

onMounted(() => {
  // Intersection Observer para animaciones
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");

          // Auto-play video cuando sea visible
          // if (entry.target === videoContainer.value && videoPlayer.value) {
          //   videoPlayer.value.play();
          //   isPlaying.value = true;
          // }
        }
      });
    },
    { threshold: 0.3 },
  );

  // Observar video container
  if (videoContainer.value) {
    observer.observe(videoContainer.value);
  }

  // Observar value items
  valueItems.value.forEach((item) => {
    if (item) observer.observe(item);
  });
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

<style scoped>
.service-detail {
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

.header-icon {
  width: 100px;
  height: 100px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
}

.page-header h1 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.page-header p {
  font-size: 1.2rem;
  opacity: 0.9;
  max-width: 700px;
  margin: 0 auto;
}

.content-card {
  background: var(--white);
  border-radius: 15px;
  padding: 2.5rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
}

.content-card h2 {
  color: var(--primary-color);
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

.content-card h3 {
  color: var(--primary-color);
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.coverage-list {
  list-style: none;
  padding: 0;
}

.coverage-list li {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding: 1.5rem;
  background: var(--bg-light);
  border-radius: 10px;
  transition: all 0.3s ease;
}

.coverage-list li:hover {
  background: #e8f4fd;
  transform: translateX(5px);
}

.coverage-list i {
  font-size: 2rem;
  color: var(--accent-color);
  flex-shrink: 0;
}

.coverage-list strong {
  display: block;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.coverage-list p {
  margin: 0;
  color: var(--text-light);
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.benefit-item {
  padding: 1rem;
  background: var(--bg-light);
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  transition: all 0.3s ease;
}

.benefit-item:hover {
  background: var(--accent-color);
  color: var(--white);
  transform: translateY(-3px);
}

.benefit-item i {
  color: var(--success);
  font-size: 1.3rem;
}

.benefit-item:hover i {
  color: var(--white);
}

.sidebar-card {
  background: var(--white);
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  top: 100px;
}

.sidebar-card h3 {
  color: var(--primary-color);
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.quote-form .form-control {
  border-radius: 10px;
  border: 1px solid #e0e0e0;
  padding: 0.8rem;
}

.quote-form .form-control:focus {
  border-color: var(--accent-color);
  box-shadow: 0 0 0 0.2rem rgba(230, 126, 34, 0.25);
}

.contact-info {
  border-top: 1px solid #e0e0e0;
  padding-top: 1.5rem;
}

.contact-info h4 {
  font-size: 1.1rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.contact-link {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.8rem 1rem;
  background: var(--bg-light);
  border-radius: 10px;
  color: var(--text-dark);
  text-decoration: none;
  margin-bottom: 0.8rem;
  transition: all 0.3s ease;
}

.contact-link:hover {
  background: var(--accent-color);
  color: var(--white);
  transform: translateX(5px);
}

/* Video Container */
.video-container {
  position: relative;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
  opacity: 0;
  transform: translateX(-30px);
  transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
}

.video-container.animate-in {
  opacity: 1;
  transform: translateX(0);
}

.value-video {
  width: 100%;
  height: 600px;
  object-fit: cover;
  display: block;
  cursor: pointer;
}

/* Video Overlay */
.video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
  transition: opacity 0.3s ease;
}

.video-overlay.playing {
  opacity: 0;
}

.video-overlay:hover {
  opacity: 1 !important;
}

.play-button {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.play-button:hover {
  background: white;
  transform: scale(1.1);
}

.play-button i {
  font-size: 2rem;
  color: var(--primary-color);
}

/* Texto sobre el video */
.video-text {
  position: absolute;
  top: 30px;
  left: 30px;
  right: 30px;
  z-index: 5;
}

@media (max-width: 991px) {
  .sidebar-card {
    position: static !important;
  }
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2rem;
  }

  .content-card {
    padding: 1.5rem;
  }

  .benefits-grid {
    grid-template-columns: 1fr;
  }
}

/* Responsive */
@media (max-width: 991px) {
  .value-section {
    padding: 60px 0;
  }

  .video-container {
    max-width: 350px;
    margin-bottom: 40px;
  }

  .value-video {
    height: 500px;
  }

  .video-text {
    top: 20px;
    left: 20px;
    right: 20px;
  }

  .section-title {
    font-size: 1.75rem;
  }

  .section-subtitle {
    font-size: 1rem;
  }

  .values-wrapper {
    padding-left: 0;
  }
}

@media (max-width: 768px) {
  .value-section {
    padding: 50px 0;
  }

  .video-container {
    max-width: 100%;
    border-radius: 15px;
  }

  .value-video {
    height: 450px;
  }

  .video-text {
    top: 15px;
    left: 15px;
    right: 15px;
  }

  .section-title {
    font-size: 1.5rem;
  }

  .play-button {
    width: 60px;
    height: 60px;
  }

  .play-button i {
    font-size: 1.5rem;
  }

  .value-item {
    padding: 1.2rem;
    margin-bottom: 1.5rem;
  }

  .value-item:hover {
    transform: translateX(5px) translateY(-3px);
  }

  .value-icon {
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
    margin-right: 1rem;
    border-radius: 12px;
  }

  .value-content h4 {
    font-size: 1.1rem;
  }

  .value-content p {
    font-size: 0.9rem;
  }
}

@media (max-width: 576px) {
  .video-container {
    max-width: 280px;
  }

  .value-video {
    height: 400px;
  }

  .section-title {
    font-size: 1.3rem;
  }

  .section-subtitle {
    font-size: 0.9rem;
  }

  .value-item {
    padding: 1rem;
  }

  .value-icon {
    width: 45px;
    height: 45px;
    font-size: 1.3rem;
  }
}
</style>
