<template>
  <section class="value-section section">
    <div class="container">
      <div class="row">
        <div class="col-lg-5 mb-4 mb-lg-0">
          <h2 class="section-title">Propuesta de Valor</h2>
          <p class="section-subtitle">¿Por qué elegirnos?</p>
          <p class="text-muted">
            En Interseguros nos diferenciamos por nuestro enfoque personalizado y el compromiso 
            con la excelencia en cada asesoría. Trabajamos para ser tu socio estratégico en la 
            gestión del riesgo.
          </p>
        </div>
        <div class="col-lg-7">
          <div 
            v-for="(value, index) in values" 
            :key="index" 
            class="value-item"
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
  </section>
</template>

<script setup>
const values = [
  {
    icon: 'bi-diagram-3',
    title: 'Asesoría estratégica y personalizada',
    description: 'Acompañamiento profesional adaptado a tus objetivos y necesidades específicas.'
  },
  {
    icon: 'bi-graph-up-arrow',
    title: 'Análisis de riesgos y soluciones a la medida',
    description: 'Evaluación detallada para identificar y mitigar los riesgos de tu patrimonio o negocio.'
  },
  {
    icon: 'bi-headset',
    title: 'Acompañamiento permanente en la gestión del seguro',
    description: 'Soporte continuo en cada etapa del proceso, desde la cotización hasta la gestión de siniestros.'
  },
  {
    icon: 'bi-award',
    title: 'Respaldo de aseguradoras líderes del mercado',
    description: 'Trabajamos con las compañías más reconocidas y sólidas del sector asegurador.'
  }
]
</script>

<style scoped>
.value-section {
  background: var(--white);
}

.value-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 2rem;
  padding: 1.5rem;
  border-radius: 10px;
  transition: all 0.3s ease;
}

.value-item:hover {
  background: var(--bg-light);
  transform: translateX(10px);
}

.value-icon {
  width: 60px;
  height: 60px;
  background: var(--accent-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1.5rem;
  font-size: 1.8rem;
  color: var(--white);
  flex-shrink: 0;
  transition: transform 0.3s ease;
}

.value-item:hover .value-icon {
  transform: rotate(360deg);
}

.value-content {
  flex: 1;
}

.value-content h4 {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.value-content p {
  color: var(--text-light);
  margin: 0;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .value-item {
    padding: 1rem;
  }

  .value-icon {
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
    margin-right: 1rem;
  }

  .value-content h4 {
    font-size: 1.1rem;
  }
}
</style>
