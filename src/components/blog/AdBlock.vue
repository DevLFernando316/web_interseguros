<template>
  <div :class="['ad-block', `ad-${type}`, { 'ad-inline': inline }]">
    <div class="ad-content">
      <!-- Banner de Contacto -->
      <div v-if="type === 'contact'" class="ad-contact">
        <div class="ad-icon">
          <i class="bi bi-headset"></i>
        </div>
        <div class="ad-text">
          <h4>¿Necesitas asesoría personalizada?</h4>
          <p>Nuestros expertos están listos para ayudarte</p>
        </div>
        <router-link to="/contacto" class="btn btn-primary">
          Contáctanos
        </router-link>
      </div>

      <!-- Banner de Cotización -->
      <div v-else-if="type === 'quote'" class="ad-quote">
        <div class="ad-icon">
          <i class="bi bi-calculator"></i>
        </div>
        <div class="ad-text">
          <h4>Cotiza tu seguro en minutos</h4>
          <p>Obtén la mejor protección al mejor precio</p>
        </div>
        <a 
          href="https://wa.me/573178918767?text=Hola,%20me%20gustaría%20cotizar%20un%20seguro" 
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-success"
        >
          <i class="bi bi-whatsapp"></i>
          Cotizar ahora
        </a>
      </div>

      <!-- Banner de Servicio Específico -->
      <div v-else-if="type === 'service'" class="ad-service">
        <div class="ad-icon">
          <i :class="`bi ${serviceIcon}`"></i>
        </div>
        <div class="ad-text">
          <h4>{{ serviceTitle }}</h4>
          <p>{{ serviceDescription }}</p>
        </div>
        <router-link :to="serviceLink" class="btn btn-outline-primary">
          Conocer más
        </router-link>
      </div>

      <!-- Banner de Newsletter -->
      <div v-else-if="type === 'newsletter'" class="ad-newsletter">
        <div class="ad-icon">
          <i class="bi bi-envelope-heart"></i>
        </div>
        <div class="ad-text">
          <h4>Mantente informado</h4>
          <p>Recibe tips y novedades sobre seguros</p>
        </div>
        <form @submit.prevent="handleNewsletter" class="newsletter-form">
          <input 
            v-model="email"
            type="email" 
            class="form-control" 
            placeholder="Tu email"
            required
          >
          <button type="submit" class="btn btn-primary">
            Suscribirse
          </button>
        </form>
      </div>

      <!-- Banner de Promoción -->
      <div v-else-if="type === 'promo'" class="ad-promo">
        <div class="ad-badge">¡Promoción!</div>
        <div class="ad-text">
          <h4>{{ promoTitle }}</h4>
          <p>{{ promoDescription }}</p>
        </div>
        <router-link to="/contacto" class="btn btn-warning">
          Aprovechar oferta
        </router-link>
      </div>

      <!-- WhatsApp flotante (inline) -->
      <div v-else-if="type === 'whatsapp'" class="ad-whatsapp">
        <i class="bi bi-whatsapp"></i>
        <span>¿Tienes dudas? Escríbenos por WhatsApp</span>
        <a 
          href="https://wa.me/573178918767" 
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-sm btn-success"
        >
          Chatear
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: 'contact',
    validator: (value) => ['contact', 'quote', 'service', 'newsletter', 'promo', 'whatsapp'].includes(value)
  },
  inline: {
    type: Boolean,
    default: false
  },
  // Props para servicio específico
  serviceIcon: {
    type: String,
    default: 'bi-shield-check'
  },
  serviceTitle: {
    type: String,
    default: 'Protege tu patrimonio'
  },
  serviceDescription: {
    type: String,
    default: 'Conoce nuestras soluciones en seguros'
  },
  serviceLink: {
    type: String,
    default: '/servicios'
  },
  // Props para promoción
  promoTitle: {
    type: String,
    default: '¡Descuento especial!'
  },
  promoDescription: {
    type: String,
    default: 'Aprovecha nuestras ofertas del mes'
  }
})

const email = ref('')

const handleNewsletter = () => {
  // Aquí puedes integrar con tu servicio de email marketing
  console.log('Newsletter signup:', email.value)
  alert('¡Gracias por suscribirte!')
  email.value = ''
}
</script>

<style scoped>
.ad-block {
  margin: 30px 0;
  border-radius: 12px;
  overflow: hidden;
}

.ad-inline {
  margin: 20px 0;
}

.ad-content {
  padding: 30px;
}

/* Estilos comunes */
.ad-contact,
.ad-quote,
.ad-service,
.ad-newsletter,
.ad-promo,
.ad-whatsapp {
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
}

.ad-icon {
  flex-shrink: 0;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
}

.ad-text {
  flex: 1;
  min-width: 200px;
}

.ad-text h4 {
  margin: 0 0 5px 0;
  font-size: 1.25rem;
  font-weight: 700;
}

.ad-text p {
  margin: 0;
  color: var(--text-light);
}

/* Contacto */
.ad-contact {
  background: linear-gradient(135deg, #1a3a5c 0%, #2c5f8d 100%);
  color: white;
}

.ad-contact .ad-icon {
  background: rgba(255, 255, 255, 0.2);
  color: white;
}

.ad-contact .ad-text p {
  color: rgba(255, 255, 255, 0.9);
}

/* Cotización */
.ad-quote {
  background: linear-gradient(135deg, #e67e22 0%, #f39c12 100%);
  color: white;
}

.ad-quote .ad-icon {
  background: rgba(255, 255, 255, 0.2);
  color: white;
}

.ad-quote .ad-text p {
  color: rgba(255, 255, 255, 0.9);
}

/* Servicio */
.ad-service {
  background: var(--bg-light);
  border: 2px solid #e0e0e0;
}

.ad-service .ad-icon {
  background: var(--primary-color);
  color: white;
}

/* Newsletter */
.ad-newsletter {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  flex-wrap: nowrap;
}

.ad-newsletter .ad-icon {
  background: rgba(255, 255, 255, 0.2);
  color: white;
}

.ad-newsletter .ad-text {
  flex: 0 1 auto;
}

.ad-newsletter .ad-text p {
  color: rgba(255, 255, 255, 0.9);
}

.newsletter-form {
  display: flex;
  gap: 10px;
  flex: 1;
  max-width: 400px;
}

.newsletter-form input {
  flex: 1;
}

/* Promoción */
.ad-promo {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
  position: relative;
}

.ad-promo .ad-icon {
  background: rgba(255, 255, 255, 0.2);
  color: white;
}

.ad-promo .ad-text p {
  color: rgba(255, 255, 255, 0.9);
}

.ad-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #ffc107;
  color: #000;
  padding: 5px 15px;
  border-radius: 20px;
  font-weight: 700;
  font-size: 0.875rem;
}

/* WhatsApp */
.ad-whatsapp {
  background: #25D366;
  color: white;
  padding: 15px 20px;
  border-radius: 8px;
  justify-content: center;
  text-align: center;
}

.ad-whatsapp i {
  font-size: 1.5rem;
}

.ad-whatsapp span {
  font-weight: 600;
}

/* Responsive */
@media (max-width: 768px) {
  .ad-content {
    padding: 20px;
  }

  .ad-contact,
  .ad-quote,
  .ad-service,
  .ad-newsletter,
  .ad-promo {
    text-align: center;
    justify-content: center;
  }

  .ad-icon {
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
  }

  .ad-text h4 {
    font-size: 1.1rem;
  }

  .newsletter-form {
    max-width: 100%;
    flex-direction: column;
  }

  .ad-newsletter {
    flex-wrap: wrap;
  }

  .ad-whatsapp {
    flex-direction: column;
    gap: 10px;
  }
}

@media (max-width: 576px) {
  .ad-text {
    min-width: 100%;
  }

  .btn {
    width: 100%;
  }
}
</style>
