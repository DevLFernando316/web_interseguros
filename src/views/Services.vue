<template>
  <div class="services-page">
    <div class="page-header">
      <div class="container">
        <h1>Nuestros Servicios</h1>
        <p>Soluciones integrales para cada necesidad</p>
      </div>
    </div>

    <section class="section">
      <div class="container">
        <div class="row g-4">
          <div 
            v-for="(service, index) in services" 
            :key="index" 
            class="col-lg-4 col-md-6"
          >
            <div class="service-card">
              <div class="service-icon">
                <i :class="service.icon"></i>
              </div>
              <h3>{{ service.title }}</h3>
              <p>{{ service.description }}</p>
              <ul class="service-features">
                <li v-for="(feature, idx) in service.features" :key="idx">
                  <i class="bi bi-check-circle-fill"></i> {{ feature }}
                </li>
              </ul>
              <router-link :to="`/servicios/${service.slug}`" class="btn btn-outline-custom w-100 mt-3">
                Ver detalles <i class="bi bi-arrow-right"></i>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const services = [
  {
    slug: 'vida-deudor',
    icon: 'bi-credit-card',
    title: 'Seguro de Vida Deudor',
    description: 'Instrumento financiero que garantiza el cumplimiento de obligaciones crediticias ante el fallecimiento o incapacidad del titular.',
    features: ['Protección de créditos', 'Paz familiar', 'Coberturas flexibles']
  },
  {
    slug: 'poliza-vida',
    icon: 'bi-heart-pulse',
    title: 'Póliza de Vida',
    description: 'Mecanismo de protección financiera que respalda a los beneficiarios ante fallecimiento, invalidez o eventos críticos.',
    features: ['Protección familiar', 'Ahorro programado', 'Beneficios fiscales']
  },
  {
    slug: 'vehicular',
    icon: 'bi-car-front',
    title: 'Todo Riesgo Particular',
    description: 'Cobertura integral para vehículos particulares que mitiga riesgos asociados a daños, pérdidas y responsabilidad civil.',
    features: ['Todo riesgo', 'Asistencia 24/7', 'Vehículo de reemplazo']
  },
  {
    slug: 'pesados',
    icon: 'bi-truck',
    title: 'Todo Riesgo Pesados',
    description: 'Seguro especializado para vehículos y maquinaria pesada que protege la inversión y garantiza la continuidad del negocio.',
    features: ['Cobertura especializada', 'Responsabilidad civil', 'Protección de inversión']
  },
  {
    slug: 'salud',
    icon: 'bi-hospital',
    title: 'Póliza de Salud',
    description: 'Mecanismo de protección financiera que ampara los costos de atención médica por enfermedad o accidente.',
    features: ['Amplia red médica', 'Coberturas flexibles', 'Atención prioritaria']
  },
  {
    slug: 'arl',
    icon: 'bi-shield-check',
    title: 'ARL',
    description: 'Sistema obligatorio de administración del riesgo laboral que cubre accidentes de trabajo y enfermedades profesionales.',
    features: ['Cumplimiento legal', 'Protección laboral', 'Asesoría en SST']
  }
]
</script>

<style scoped>
.services-page {
  padding-top: 70px;
}

.page-header {
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
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

.service-card {
  background: var(--white);
  border-radius: 15px;
  padding: 2rem;
  height: 100%;
  transition: all 0.3s ease;
  border: 1px solid #e0e0e0;
  display: flex;
  flex-direction: column;
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  border-color: var(--accent-color);
}

.service-icon {
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, var(--accent-color), var(--accent-light));
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  font-size: 2rem;
  color: var(--white);
}

.service-card h3 {
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.service-card p {
  color: var(--text-light);
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
}

.service-features {
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem;
  flex-grow: 1;
}

.service-features li {
  color: var(--text-dark);
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.service-features i {
  color: var(--success);
  font-size: 1.1rem;
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2rem;
  }
}
</style>
