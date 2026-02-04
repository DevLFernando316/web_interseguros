<template>
  <nav
    class="navbar navbar-expand-lg fixed-top"
    :class="{ scrolled: isScrolled }"
  >
    <div class="container">
      <router-link to="/" class="navbar-brand">
        <img
          src="@/assets/images/logo_interseguros.png"
          alt="Interseguros"
          class="navbar-logo"
        />
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto align-items-center">
          <li class="nav-item">
            <router-link
              to="/"
              class="nav-link"
              :class="{ active: isActive('/') }"
            >
              Inicio
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              to="/nosotros"
              class="nav-link"
              :class="{ active: isActive('/nosotros') }"
            >
              Nosotros
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              to="/servicios"
              class="nav-link"
              :class="{ active: isActive('/servicios') }"
            >
              Servicios
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              to="/blog"
              class="nav-link"
              :class="{ active: isActive('/blog') }"
            >
              <i class="bi bi-newspaper"></i> Blog
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              to="/contacto"
              class="nav-link"
              :class="{ active: isActive('/contacto') }"
            >
              Contacto
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contacto" class="btn btn-contact">
              <i class="bi bi-telephone"></i> Cotizar
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

const isActive = (path) => {
  if (path === "/blog") {
    return route.path.startsWith("/blog");
  }
  return route.path === path;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.navbar {
  background: var(--white);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 1rem 0;
  transition: all 0.3s ease;
}

.navbar.scrolled {
  padding: 0.5rem 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.navbar-brand {
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.3s ease;
}

.navbar-brand:hover {
  opacity: 0.8;
}

.navbar-logo {
  height: 55px;
  width: auto;
  transition: all 0.3s ease;
}

.navbar.scrolled .navbar-logo {
  height: 50px;
}

.nav-link {
  color: var(--text-dark);
  font-weight: 500;
  margin: 0 0.5rem;
  transition: color 0.3s ease;
  text-decoration: none;
  position: relative;
}

.nav-link::after {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background: var(--accent-color);
  transition: width 0.3s ease;
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 70%;
}

.nav-link:hover,
.nav-link.active {
  color: var(--accent-color);
}

.nav-link i {
  margin-right: 5px;
  font-size: 0.95rem;
}

.btn-contact {
  background: var(--accent-color);
  color: var(--text-dark);
  padding: 0.6rem 1.5rem;
  border-radius: 30px;
  font-weight: 600;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
  margin-left: 1rem;
}

.btn-contact:hover {
  background: var(--accent-light);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(15, 255, 168, 0.3);
  color: var(--text-dark);
}

.navbar-toggler {
  border: none;
}

.navbar-toggler:focus {
  box-shadow: none;
}

@media (max-width: 991px) {
  .navbar-logo {
    height: 40px;
  }

  .navbar.scrolled .navbar-logo {
    height: 35px;
  }

  .nav-link {
    margin: 0.5rem 0;
  }

  .btn-contact {
    margin: 1rem 0 0 0;
    width: 100%;
    text-align: center;
  }
}
</style>
