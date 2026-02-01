<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
          <h5><i class="bi bi-shield-check"></i> Interseguros</h5>
          <p class="text-white-50">
            Soluciones estratégicas en gestión y transferencia del riesgo. 
            Protegemos tu patrimonio, tu familia y tu negocio.
          </p>
          <div class="social-links">
            <a href="#" aria-label="Facebook" title="Facebook">
              <i class="bi bi-facebook"></i>
            </a>
            <a href="https://instagram.com/interseguros.colombia" target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram">
              <i class="bi bi-instagram"></i>
            </a>
            <a href="#" aria-label="LinkedIn" title="LinkedIn">
              <i class="bi bi-linkedin"></i>
            </a>
            <a href="https://wa.me/573178918767" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" title="WhatsApp">
              <i class="bi bi-whatsapp"></i>
            </a>
          </div>
        </div>

        <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
          <h5>Navegación</h5>
          <ul class="footer-links">
            <li><router-link to="/">Inicio</router-link></li>
            <li><router-link to="/nosotros">Nosotros</router-link></li>
            <li><router-link to="/servicios">Servicios</router-link></li>
            <li><router-link to="/contacto">Contacto</router-link></li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
          <h5>Servicios</h5>
          <ul class="footer-links">
            <li><router-link to="/servicios/vida">Seguro de Vida</router-link></li>
            <li><router-link to="/servicios/vehicular">Seguros Vehiculares</router-link></li>
            <li><router-link to="/servicios/salud">Póliza de Salud</router-link></li>
            <li><router-link to="/servicios/arl">ARL</router-link></li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-6">
          <h5>Contacto</h5>
          <ul class="footer-links">
            <li>
              <i class="bi bi-telephone me-2"></i>
              <a href="tel:+573178918767">+57 317 891 8767</a>
            </li>
            <li>
              <i class="bi bi-instagram me-2"></i>
              <a href="https://instagram.com/interseguros.colombia" target="_blank" rel="noopener noreferrer">
                @interseguros.colombia
              </a>
            </li>
            <li>
              <i class="bi bi-geo-alt me-2"></i>
              Bucaramanga, Colombia
            </li>
            <li>
              <i class="bi bi-envelope me-2"></i>
              <a href="mailto:info@interseguros.com.co">info@interseguros.com.co</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>
          &copy; {{ currentYear }} Interseguros. Todos los derechos reservados. | 
          Diseñado con <i class="bi bi-heart-fill text-danger"></i> para proteger lo que más importa
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
.footer {
  background: var(--primary-color);
  color: var(--white);
  padding: 3rem 0 1rem;
  margin-top: auto;
}

.footer h5 {
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: var(--accent-color);
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 0.8rem;
}

.footer-links a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-block;
}

.footer-links a:hover {
  color: var(--accent-color);
  padding-left: 5px;
}

.social-links {
  display: flex;
  gap: 0.5rem;
  margin-top: 1.5rem;
}

.social-links a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: var(--white);
  transition: all 0.3s ease;
  text-decoration: none;
}

.social-links a:hover {
  background: var(--accent-color);
  transform: translateY(-3px);
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 2rem;
  padding-top: 1.5rem;
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
}

.footer-bottom p {
  margin: 0;
}

@media (max-width: 768px) {
  .footer {
    padding: 2rem 0 1rem;
  }

  .social-links {
    justify-content: center;
  }
}
</style>
