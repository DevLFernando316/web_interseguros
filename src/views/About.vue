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
        <div class="row mb-5">
          <div class="col-lg-6 mb-4 mb-lg-0">
            <h2 class="section-title">¿Quiénes Somos?</h2>
            <p>
              En <strong>Interseguros</strong> brindamos asesoría especializada en seguros, 
              orientada a la protección del patrimonio, la continuidad operativa y la gestión 
              eficiente del riesgo para personas, familias y empresas.
            </p>
            <p>
              Trabajamos con aseguradoras de primer nivel y desarrollamos soluciones alineadas 
              con las necesidades financieras y operativas de cada cliente.
            </p>
          </div>
          <div class="col-lg-6">
            <div class="image-placeholder">
              <i class="bi bi-building"></i>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-6 mb-4">
            <div class="info-card">
              <i class="bi bi-bullseye"></i>
              <h3>Misión</h3>
              <p>
                Brindar soluciones integrales en seguros que protejan el patrimonio y garanticen 
                la continuidad operativa de nuestros clientes, a través de asesoría especializada 
                y un servicio de excelencia.
              </p>
            </div>
          </div>
          <div class="col-lg-6 mb-4">
            <div class="info-card">
              <i class="bi bi-eye"></i>
              <h3>Visión</h3>
              <p>
                Ser la firma de asesoría en seguros más confiable y reconocida en Colombia, 
                destacándonos por nuestra calidad de servicio, innovación y compromiso con 
                la protección integral de nuestros clientes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>

<style scoped>
.about-page {
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

.image-placeholder {
  background: var(--bg-light);
  border-radius: 15px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 8rem;
  color: var(--primary-color);
  opacity: 0.2;
}

.info-card {
  background: var(--white);
  border: 1px solid #e0e0e0;
  border-radius: 15px;
  padding: 2rem;
  height: 100%;
  transition: all 0.3s ease;
}

.info-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border-color: var(--accent-color);
}

.info-card i {
  font-size: 3rem;
  color: var(--accent-color);
  margin-bottom: 1rem;
}

.info-card h3 {
  font-size: 1.5rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.info-card p {
  color: var(--text-light);
  line-height: 1.6;
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2rem;
  }

  .image-placeholder {
    height: 250px;
    font-size: 5rem;
  }
}
</style>
