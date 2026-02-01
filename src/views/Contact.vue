<template>
  <div class="contact-page">
    <div class="page-header">
      <div class="container">
        <h1>Contáctanos</h1>
        <p>Estamos aquí para ayudarte</p>
      </div>
    </div>

    <section class="section">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 mb-4 mb-lg-0">
            <div class="contact-info-card">
              <h3>Información de Contacto</h3>
              <p class="text-muted mb-4">
                Ponte en contacto con nosotros y recibe asesoría personalizada
              </p>

              <div class="contact-item">
                <div class="contact-icon">
                  <i class="bi bi-geo-alt"></i>
                </div>
                <div>
                  <h5>Ubicación</h5>
                  <p>Bucaramanga, Colombia</p>
                </div>
              </div>

              <div class="contact-item">
                <div class="contact-icon">
                  <i class="bi bi-telephone"></i>
                </div>
                <div>
                  <h5>Teléfono</h5>
                  <p><a href="tel:+573178918767">+57 317 891 8767</a></p>
                </div>
              </div>

              <div class="contact-item">
                <div class="contact-icon">
                  <i class="bi bi-instagram"></i>
                </div>
                <div>
                  <h5>Instagram</h5>
                  <p>
                    <a href="https://instagram.com/interseguros.colombia" target="_blank" rel="noopener noreferrer">
                      @interseguros.colombia
                    </a>
                  </p>
                </div>
              </div>

              <div class="contact-item">
                <div class="contact-icon">
                  <i class="bi bi-envelope"></i>
                </div>
                <div>
                  <h5>Email</h5>
                  <p><a href="mailto:info@interseguros.com.co">info@interseguros.com.co</a></p>
                </div>
              </div>

              <div class="contact-item">
                <div class="contact-icon">
                  <i class="bi bi-whatsapp"></i>
                </div>
                <div>
                  <h5>WhatsApp</h5>
                  <p>
                    <a href="https://wa.me/573178918767" target="_blank" rel="noopener noreferrer">
                      Enviar mensaje
                    </a>
                  </p>
                </div>
              </div>

              <div class="social-links mt-4">
                <a href="#" aria-label="Facebook"><i class="bi bi-facebook"></i></a>
                <a href="https://instagram.com/interseguros.colombia" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <i class="bi bi-instagram"></i>
                </a>
                <a href="#" aria-label="LinkedIn"><i class="bi bi-linkedin"></i></a>
                <a href="https://wa.me/573178918767" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  <i class="bi bi-whatsapp"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="col-lg-8">
            <div class="contact-form-card">
              <h3>Envíanos un Mensaje</h3>
              <p class="text-muted mb-4">
                Completa el formulario y nos pondremos en contacto contigo lo antes posible
              </p>

              <form @submit.prevent="submitForm">
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label class="form-label">Nombre completo *</label>
                    <input 
                      v-model="form.name" 
                      type="text" 
                      class="form-control" 
                      placeholder="Tu nombre"
                      required
                    >
                  </div>
                  <div class="col-md-6 mb-3">
                    <label class="form-label">Correo electrónico *</label>
                    <input 
                      v-model="form.email" 
                      type="email" 
                      class="form-control" 
                      placeholder="tu@email.com"
                      required
                    >
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label class="form-label">Teléfono *</label>
                    <input 
                      v-model="form.phone" 
                      type="tel" 
                      class="form-control" 
                      placeholder="300 123 4567"
                      required
                    >
                  </div>
                  <div class="col-md-6 mb-3">
                    <label class="form-label">Servicio de interés</label>
                    <select v-model="form.service" class="form-control">
                      <option value="">Selecciona un servicio</option>
                      <option value="vida-deudor">Seguro de Vida Deudor</option>
                      <option value="vida">Póliza de Vida</option>
                      <option value="vehicular">Todo Riesgo Vehículo</option>
                      <option value="pesados">Todo Riesgo Pesados</option>
                      <option value="salud">Póliza de Salud</option>
                      <option value="arl">ARL</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                </div>

                <div class="mb-3">
                  <label class="form-label">Mensaje *</label>
                  <textarea 
                    v-model="form.message" 
                    class="form-control" 
                    rows="5" 
                    placeholder="Cuéntanos cómo podemos ayudarte..."
                    required
                  ></textarea>
                </div>

                <div class="form-check mb-3">
                  <input 
                    v-model="form.acceptTerms" 
                    class="form-check-input" 
                    type="checkbox" 
                    id="acceptTerms"
                    required
                  >
                  <label class="form-check-label" for="acceptTerms">
                    Acepto el tratamiento de mis datos personales según la política de privacidad
                  </label>
                </div>

                <button type="submit" class="btn btn-primary-custom w-100">
                  <i class="bi bi-send"></i> Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
  acceptTerms: false
})

const submitForm = () => {
  alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.')
  form.value = {
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    acceptTerms: false
  }
}
</script>

<style scoped>
.contact-page {
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

.contact-info-card {
  background: var(--white);
  border-radius: 15px;
  padding: 2rem;
  height: 100%;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
}

.contact-info-card h3 {
  color: var(--primary-color);
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding: 1rem;
  border-radius: 10px;
  transition: all 0.3s ease;
}

.contact-item:hover {
  background: var(--bg-light);
}

.contact-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: var(--white);
  flex-shrink: 0;
}

.contact-item h5 {
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: 0.3rem;
  font-size: 1rem;
}

.contact-item p {
  margin: 0;
  color: var(--text-light);
}

.contact-item a {
  color: var(--text-light);
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-item a:hover {
  color: var(--accent-color);
}

.social-links {
  display: flex;
  gap: 1rem;
  justify-content: center;
  padding-top: 1.5rem;
  border-top: 1px solid #e0e0e0;
}

.social-links a {
  width: 45px;
  height: 45px;
  background: var(--bg-light);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-color);
  font-size: 1.3rem;
  transition: all 0.3s ease;
}

.social-links a:hover {
  background: var(--accent-color);
  color: var(--white);
  transform: translateY(-3px);
}

.contact-form-card {
  background: var(--white);
  border-radius: 15px;
  padding: 2.5rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
}

.contact-form-card h3 {
  color: var(--primary-color);
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.form-label {
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 0.5rem;
}

.form-control {
  padding: 0.8rem 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  transition: all 0.3s ease;
}

.form-control:focus {
  border-color: var(--accent-color);
  box-shadow: 0 0 0 0.2rem rgba(230, 126, 34, 0.25);
}

.form-check-input:checked {
  background-color: var(--accent-color);
  border-color: var(--accent-color);
}

.form-check-label {
  font-size: 0.9rem;
  color: var(--text-light);
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2rem;
  }

  .contact-form-card {
    padding: 1.5rem;
  }
}
</style>
