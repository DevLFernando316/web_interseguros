<template>
  <section class="stats-section section">
    <div class="container">
      <div class="row">
        <div 
          v-for="(stat, index) in stats" 
          :key="index" 
          class="col-lg-3 col-md-6 mb-4 mb-lg-0"
        >
          <div class="stat-item">
            <div class="stat-number">{{ stat.number }}</div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const stats = [
  { number: '1500+', label: 'Clientes Satisfechos' },
  { number: '25+', label: 'Aseguradoras Aliadas' },
  { number: '99%', label: 'Tasa de Satisfacción' },
  { number: '24/7', label: 'Atención Disponible' }
]
</script>

<style scoped>
.stats-section {
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  color: var(--white);
  position: relative;
  overflow: hidden;
}

.stats-section::before {
  content: '';
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
}

.stat-number {
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--accent-color);
  margin-bottom: 0.5rem;
  line-height: 1;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.stat-label {
  font-size: 1.1rem;
  font-weight: 500;
  opacity: 0.9;
}

@media (max-width: 991px) {
  .stat-number {
    font-size: 3rem;
  }

  .stat-label {
    font-size: 1rem;
  }
}

@media (max-width: 576px) {
  .stat-number {
    font-size: 2.5rem;
  }
}
</style>
