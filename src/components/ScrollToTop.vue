<template>
  <transition name="fade">
    <button
      v-if="showButton"
      @click="scrollToTop"
      class="scroll-to-top"
      aria-label="Volver arriba"
    >
      <i class="bi bi-arrow-up"></i>
    </button>
  </transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const showButton = ref(false);

const handleScroll = () => {
  // Mostrar botón después de hacer scroll de 300px
  showButton.value = window.scrollY > 300;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.scroll-to-top {
  position: fixed;
  bottom: 2rem;
  right: 6rem; /* A la izquierda del botón de WhatsApp */
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--accent-color);
  color: var(--primary-color);
  border: none;
  box-shadow: 0 4px 20px rgba(15, 255, 168, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 999;
  transition: all 0.3s ease;
  font-size: 1.5rem;
}

.scroll-to-top:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 30px rgba(15, 255, 168, 0.6);
  background: var(--accent-light);
}

.scroll-to-top:active {
  transform: translateY(-2px);
}

/* Animaciones de entrada/salida */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(20px) scale(0.8);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.8);
}

/* Responsive */
@media (max-width: 768px) {
  .scroll-to-top {
    bottom: 1.5rem;
    right: 5.5rem;
    width: 45px;
    height: 45px;
    font-size: 1.3rem;
  }
}

@media (max-width: 576px) {
  .scroll-to-top {
    bottom: 1rem;
    right: 5rem;
    width: 45px;
    height: 45px;
    font-size: 1.2rem;
  }
}
</style>
