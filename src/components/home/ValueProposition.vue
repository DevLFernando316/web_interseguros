<template>
  <section class="value-section section">
    <div class="container">
      <div class="row align-items-center">
        <!-- Columna Izquierda: Video -->
        <div class="col-lg-5 mb-4 mb-lg-0">
          <div class="video-container" ref="videoContainer">
            <video
              ref="videoPlayer"
              class="value-video"
              loop
              playsinline
              @click="togglePlay"
            >
              <source
                src="@/assets/videos/presentacion_interseguros.mp4"
                type="video/mp4"
              />
              Tu navegador no soporta el elemento de video.
            </video>

            <!-- Overlay con controles -->
            <div class="video-overlay" :class="{ playing: isPlaying }">
              <button class="play-button" @click="togglePlay">
                <i
                  :class="isPlaying ? 'bi bi-pause-fill' : 'bi bi-play-fill'"
                ></i>
              </button>
            </div>

            <!-- Texto sobre el video -->
            <div class="video-text">
              <h2 class="section-title">Propuesta de Valor</h2>
              <p class="section-subtitle">¿Por qué elegirnos?</p>
            </div>
          </div>
        </div>

        <!-- Columna Derecha: Valores -->
        <div class="col-lg-7">
          <div class="values-wrapper">
            <div
              v-for="(value, index) in values"
              :key="index"
              class="value-item"
              :style="{ animationDelay: `${index * 0.1}s` }"
              ref="valueItems"
            >
              <div class="value-icon">
                <i :class="value.icon"></i>
              </div>
              <div class="value-content">
                <h4>{{ value.title }}</h4>
                <p>{{ value.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const values = [
  {
    icon: "bi-diagram-3",
    title: "Asesoría estratégica y personalizada",
    description:
      "Acompañamiento profesional adaptado a tus objetivos y necesidades específicas.",
  },
  {
    icon: "bi-graph-up-arrow",
    title: "Análisis de riesgos y soluciones a la medida",
    description:
      "Evaluación detallada para identificar y mitigar los riesgos de tu patrimonio o negocio.",
  },
  {
    icon: "bi-headset",
    title: "Acompañamiento permanente en la gestión del seguro",
    description:
      "Soporte continuo en cada etapa del proceso, desde la cotización hasta la gestión de siniestros.",
  },
  {
    icon: "bi-award",
    title: "Respaldo de aseguradoras líderes del mercado",
    description:
      "Trabajamos con las compañías más reconocidas y sólidas del sector asegurador.",
  },
];

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
          if (entry.target === videoContainer.value && videoPlayer.value) {
            videoPlayer.value.play();
            isPlaying.value = true;
          }
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
.value-section {
  background: var(--white);
  padding: 80px 0;
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

.section-title {
  font-size: 2rem;
  font-weight: 800;
  color: white;
  margin-bottom: 10px;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
}

.section-subtitle {
  font-size: 1.1rem;
  color: var(--accent-color);
  font-weight: 600;
  margin: 0;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
}

/* Values Wrapper */
.values-wrapper {
  padding-left: 20px;
}

/* Value Items con hover mejorado */
.value-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 2rem;
  padding: 1.5rem;
  border-radius: 15px;
  background: white;
  border: 2px solid transparent;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  transform: translateX(30px);
  position: relative;
  overflow: hidden;
}

.value-item.animate-in {
  opacity: 1;
  transform: translateX(0);
}

/* Efecto de brillo sutil al hover */
.value-item::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(15, 255, 168, 0.1),
    transparent
  );
  transition: left 0.5s ease;
}

.value-item:hover::before {
  left: 100%;
}

.value-item:hover {
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  border-color: var(--accent-color);
  transform: translateX(10px) translateY(-5px);
  box-shadow: 0 10px 30px rgba(15, 255, 168, 0.2);
}

/* Icono mejorado */
.value-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(
    135deg,
    var(--accent-color) 0%,
    var(--accent-light) 100%
  );
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1.5rem;
  font-size: 1.8rem;
  color: var(--text-dark);
  flex-shrink: 0;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 15px rgba(15, 255, 168, 0.3);
}

.value-item:hover .value-icon {
  transform: scale(1.1) rotate(5deg);
  box-shadow: 0 8px 25px rgba(15, 255, 168, 0.4);
}

/* Contenido */
.value-content {
  flex: 1;
}

.value-content h4 {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;
}

.value-item:hover .value-content h4 {
  color: var(--accent-dark);
}

.value-content p {
  color: var(--text-light);
  margin: 0;
  line-height: 1.7;
  font-size: 0.95rem;
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
