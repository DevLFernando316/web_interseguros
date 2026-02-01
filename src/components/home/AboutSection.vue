<template>
  <section class="about-section section">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 mb-4 mb-lg-0">
          <div class="about-image">
            <div class="image-placeholder">
              <i class="bi bi-people"></i>
            </div>
            <div class="about-badge">
              <h3>+10</h3>
              <p>Años de experiencia</p>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="mb-4">
            <h2 class="section-title">¿Quiénes Somos?</h2>
          </div>
          <div class="about-content">
            <p>
              En <strong>Interseguros</strong> brindamos asesoría especializada en seguros, 
              orientada a la protección del patrimonio, la continuidad operativa y la gestión 
              eficiente del riesgo para personas, familias y empresas.
            </p>
            <p>
              Trabajamos con aseguradoras de primer nivel y desarrollamos soluciones alineadas 
              con las necesidades financieras y operativas de cada cliente.
            </p>
            <p class="text-muted">
              Nuestro compromiso es brindar tranquilidad y seguridad a través de productos 
              personalizados que se adaptan a cada etapa de tu vida o negocio.
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
</script>

<style scoped>
.about-section {
  background: var(--white);
}

.about-content {
  font-size: 1.05rem;
  line-height: 1.8;
  color: var(--text-dark);
}

.about-content p {
  margin-bottom: 1.2rem;
}

.about-image {
  position: relative;
}

.image-placeholder {
  background: linear-gradient(135deg, var(--bg-light) 0%, #e8eef3 100%);
  border-radius: 20px;
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10rem;
  color: var(--primary-color);
  opacity: 0.3;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
}

.about-badge {
  position: absolute;
  bottom: 30px;
  right: 30px;
  background: var(--accent-color);
  color: var(--white);
  padding: 1.5rem 2rem;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(230, 126, 34, 0.3);
  text-align: center;
}

.about-badge h3 {
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0;
  line-height: 1;
}

.about-badge p {
  margin: 0.5rem 0 0;
  font-size: 0.9rem;
  opacity: 0.95;
}

@media (max-width: 991px) {
  .image-placeholder {
    height: 350px;
    font-size: 7rem;
  }

  .about-badge {
    bottom: 20px;
    right: 20px;
  }
}
</style>
