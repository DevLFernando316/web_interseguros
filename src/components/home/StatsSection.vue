<template>
  <section class="stats-section section" ref="statsSection">
    <div class="container">
      <div class="row">
        <div
          v-for="(stat, index) in stats"
          :key="index"
          class="col-lg-3 col-md-6 mb-4 mb-lg-0"
        >
          <div class="stat-item">
            <div class="stat-number">
              {{ displayedNumbers[index] }}{{ stat.suffix }}
            </div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const stats = [
  { number: 1500, suffix: "+", label: "Clientes Satisfechos" },
  { number: 25, suffix: "+", label: "Aseguradoras Aliadas" },
  { number: 99, suffix: "%", label: "Tasa de Satisfacción" },
  { number: 24, suffix: "/7", label: "Atención Disponible" },
];

const displayedNumbers = ref([0, 0, 0, 0]);
const statsSection = ref(null);
let observer = null;
let hasAnimated = false;

// Función para animar un número desde 0 hasta el valor final
const animateNumber = (index, targetNumber, duration = 2000) => {
  const startTime = Date.now();
  const startNumber = 0;

  const updateNumber = () => {
    const currentTime = Date.now();
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // Easing function (ease-out)
    const easeOut = 1 - Math.pow(1 - progress, 3);

    const currentNumber = Math.floor(
      startNumber + (targetNumber - startNumber) * easeOut,
    );
    displayedNumbers.value[index] = currentNumber;

    if (progress < 1) {
      requestAnimationFrame(updateNumber);
    } else {
      displayedNumbers.value[index] = targetNumber;
    }
  };

  requestAnimationFrame(updateNumber);
};

// Función para iniciar todas las animaciones
const startCounters = () => {
  if (hasAnimated) return;
  hasAnimated = true;

  stats.forEach((stat, index) => {
    // Delay escalonado para cada contador
    setTimeout(() => {
      animateNumber(index, stat.number, 2000);
    }, index * 100);
  });
};

onMounted(() => {
  // Intersection Observer para detectar cuando la sección es visible
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startCounters();
        }
      });
    },
    {
      threshold: 0.3, // Se activa cuando el 30% de la sección es visible
    },
  );

  if (statsSection.value) {
    observer.observe(statsSection.value);
  }
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

<style scoped>
.stats-section {
  background: linear-gradient(
    135deg,
    var(--primary-color) 0%,
    var(--secondary-color) 100%
  );
  color: var(--white);
  position: relative;
  overflow: hidden;
}

.stats-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgba(255,255,255,0.05)" d="M0,160L48,149.3C96,139,192,117,288,122.7C384,128,480,160,576,165.3C672,171,768,149,864,128C960,107,1056,85,1152,90.7C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>');
  background-size: cover;
  opacity: 0.1;
}

.stat-item {
  text-align: center;
  padding: 2rem 1rem;
  position: relative;
  z-index: 1;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.6s ease forwards;
}

.stat-item:nth-child(1) {
  animation-delay: 0.1s;
}

.stat-item:nth-child(2) {
  animation-delay: 0.2s;
}

.stat-item:nth-child(3) {
  animation-delay: 0.3s;
}

.stat-item:nth-child(4) {
  animation-delay: 0.4s;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.stat-number {
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--accent-color);
  margin-bottom: 0.5rem;
  line-height: 1;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  font-variant-numeric: tabular-nums;
  min-height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.stat-label {
  font-size: 1.1rem;
  font-weight: 500;
  opacity: 0.9;
}

@media (max-width: 991px) {
  .stat-number {
    font-size: 3rem;
    min-height: 3.5rem;
  }

  .stat-label {
    font-size: 1rem;
  }
}

@media (max-width: 576px) {
  .stat-number {
    font-size: 2.5rem;
    min-height: 3rem;
  }
}
</style>
