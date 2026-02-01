<template>
  <section class="services-section section">
    <div class="container">
      <div class="text-center mb-5">
        <h2 class="section-title">Portafolio de Soluciones</h2>
        <p class="section-subtitle">Soluciones integrales adaptadas a tus necesidades</p>
      </div>
      <div class="row g-4">
        <div 
          v-for="(service, index) in services" 
          :key="index" 
          class="col-lg-4 col-md-6"
        >
          <div class="service-card" @click="goToService(service.slug)">
            <div class="service-icon">
              <i :class="service.icon"></i>
            </div>
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
            <router-link :to="`/servicios/${service.slug}`" class="service-link">
              Más información <i class="bi bi-arrow-right"></i>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const services = [
  {
    slug: 'vida-deudor',
    icon: 'bi-credit-card',
    title: 'Seguro de Vida Deudor',
    description: 'Instrumento financiero que garantiza el cumplimiento de obligaciones crediticias ante el fallecimiento o incapacidad del titular, mitigando riesgos patrimoniales.'
  },
  {
    slug: 'poliza-vida',
    icon: 'bi-heart-pulse',
    title: 'Póliza de Vida',
    description: 'Mecanismo de protección financiera que respalda a los beneficiarios ante fallecimiento, invalidez o eventos críticos, asegurando estabilidad económica.'
  },
  {
    slug: 'vehicular',
    icon: 'bi-car-front',
    title: 'Todo Riesgo Particular Familiar',
    description: 'Cobertura integral para vehículos particulares que mitiga riesgos asociados a daños, pérdidas y responsabilidad civil.'
  },
  {
    slug: 'pesados',
    icon: 'bi-truck',
    title: 'Todo Riesgo Pesados',
    description: 'Seguro especializado para vehículos y maquinaria pesada que protege la inversión, cubre responsabilidad civil y garantiza la continuidad del negocio.'
  },
  {
    slug: 'salud',
    icon: 'bi-hospital',
    title: 'Póliza de Salud',
    description: 'Mecanismo de protección financiera que ampara los costos de atención médica por enfermedad o accidente, permitiendo el acceso a servicios de diagnóstico, tratamiento y hospitalización.'
  },
  {
    slug: 'arl',
    icon: 'bi-shield-check',
    title: 'ARL',
    description: 'Sistema obligatorio de administración del riesgo laboral que cubre accidentes de trabajo y enfermedades profesionales, asegurando cumplimiento normativo y protección del capital humano.'
  }
]

const goToService = (slug) => {
  router.push(`/servicios/${slug}`)
}
</script>

<style scoped>
.services-section {
  background: var(--bg-light);
}

.service-card {
  background: var(--white);
  border-radius: 15px;
  padding: 2rem;
  height: 100%;
  transition: all 0.3s ease;
  border: 1px solid #e0e0e0;
  cursor: pointer;
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
  transition: transform 0.3s ease;
}

.service-card:hover .service-icon {
  transform: scale(1.1);
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
  flex-grow: 1;
  margin-bottom: 1rem;
}

.service-link {
  color: var(--accent-color);
  font-weight: 600;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: gap 0.3s ease;
}

.service-link:hover {
  gap: 0.8rem;
}

@media (max-width: 768px) {
  .service-card {
    padding: 1.5rem;
  }
}
</style>
