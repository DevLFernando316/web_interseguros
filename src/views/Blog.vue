<template>
  <div class="blog-page">
    <!-- Hero Section -->
    <section class="blog-hero">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-8">
            <h1 class="hero-title">Blog Interseguros</h1>
            <p class="hero-subtitle">
              Consejos, noticias y todo lo que necesitas saber sobre seguros
            </p>
          </div>
          <div class="col-lg-4">
            <!-- Buscador -->
            <div class="search-box">
              <input
                v-model="searchQuery"
                type="text"
                class="form-control"
                placeholder="Buscar artículos..."
                @keyup.enter="handleSearch"
              />
              <button @click="handleSearch" class="btn-search">
                <i class="bi bi-search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Categorías -->
    <section class="blog-categories" v-if="categories.length > 0">
      <div class="container">
        <div class="categories-wrapper">
          <button
            @click="filterByCategory(null)"
            :class="['category-btn', { active: selectedCategory === null }]"
          >
            Todos
          </button>
          <button
            v-for="category in categories"
            :key="category.id"
            @click="filterByCategory(category.id)"
            :class="[
              'category-btn',
              { active: selectedCategory === category.id },
            ]"
          >
            {{ category.name }}
          </button>
        </div>
      </div>
    </section>

    <!-- Banner publicitario superior -->
    <div class="container">
      <AdBlock type="quote" />
    </div>

    <!-- Grid de Posts -->
    <section class="blog-posts">
      <div class="container">
        <!-- Loading -->
        <div v-if="loading" class="text-center py-5">
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Cargando...</span>
          </div>
          <p class="mt-3">Cargando artículos...</p>
        </div>

        <!-- Error -->
        <div v-else-if="error" class="alert alert-danger" role="alert">
          <i class="bi bi-exclamation-triangle"></i>
          {{ error }}
        </div>

        <!-- Sin resultados -->
        <div v-else-if="isEmpty" class="text-center py-5">
          <i
            class="bi bi-inbox"
            style="font-size: 3rem; color: var(--text-light)"
          ></i>
          <p class="mt-3 text-muted">No se encontraron artículos</p>
          <button @click="resetFilters" class="btn btn-primary">
            Ver todos los artículos
          </button>
        </div>

        <!-- Posts Grid -->
        <div v-else class="row g-4">
          <template v-for="(post, index) in posts" :key="post.id">
            <div class="col-lg-4 col-md-6">
              <BlogCard :post="post" />
            </div>

            <!-- Publicidad cada 6 posts -->
            <div v-if="shouldShowAd(index)" class="col-12">
              <AdBlock :type="getAdType(index)" v-bind="getAdProps(index)" />
            </div>
          </template>
        </div>

        <!-- Paginación -->
        <div v-if="totalPages > 1" class="pagination-wrapper">
          <nav aria-label="Blog pagination">
            <ul class="pagination justify-content-center">
              <li class="page-item" :class="{ disabled: currentPage === 1 }">
                <button
                  class="page-link"
                  @click="changePage(currentPage - 1)"
                  :disabled="currentPage === 1"
                >
                  <i class="bi bi-chevron-left"></i>
                </button>
              </li>

              <li
                v-for="page in paginationRange"
                :key="page"
                class="page-item"
                :class="{ active: page === currentPage }"
              >
                <button class="page-link" @click="changePage(page)">
                  {{ page }}
                </button>
              </li>

              <li
                class="page-item"
                :class="{ disabled: currentPage === totalPages }"
              >
                <button
                  class="page-link"
                  @click="changePage(currentPage + 1)"
                  :disabled="currentPage === totalPages"
                >
                  <i class="bi bi-chevron-right"></i>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>

    <!-- CTA Final -->
    <section class="blog-cta">
      <div class="container">
        <AdBlock type="contact" />
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useWordPress } from "@/composables/useWordPress";
import BlogCard from "@/components/blog/BlogCard.vue";
import AdBlock from "@/components/blog/AdBlock.vue";

const route = useRoute();
const router = useRouter();

const {
  posts,
  categories,
  loading,
  error,
  totalPages,
  isEmpty,
  getPosts,
  getCategories,
} = useWordPress();

const currentPage = ref(1);
const selectedCategory = ref(null);
const searchQuery = ref("");
const postsPerPage = 9;

// Cargar categorías al montar
onMounted(async () => {
  await getCategories();
  await loadPosts();
});

// Cargar posts
const loadPosts = async () => {
  await getPosts({
    perPage: postsPerPage,
    page: currentPage.value,
    category: selectedCategory.value,
    search: searchQuery.value,
  });

  // Scroll al inicio
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Filtrar por categoría
const filterByCategory = (categoryId) => {
  selectedCategory.value = categoryId;
  currentPage.value = 1;
  loadPosts();
};

// Buscar
const handleSearch = () => {
  currentPage.value = 1;
  selectedCategory.value = null;
  loadPosts();
};

// Resetear filtros
const resetFilters = () => {
  searchQuery.value = "";
  selectedCategory.value = null;
  currentPage.value = 1;
  loadPosts();
};

// Cambiar página
const changePage = (page) => {
  if (page < 1 || page > totalPages.value) return;
  currentPage.value = page;
  loadPosts();
};

// Rango de paginación
const paginationRange = computed(() => {
  const range = [];
  const delta = 2;
  const left = Math.max(2, currentPage.value - delta);
  const right = Math.min(totalPages.value - 1, currentPage.value + delta);

  range.push(1);

  if (left > 2) {
    range.push("...");
  }

  for (let i = left; i <= right; i++) {
    range.push(i);
  }

  if (right < totalPages.value - 1) {
    range.push("...");
  }

  if (totalPages.value > 1) {
    range.push(totalPages.value);
  }

  return range;
});

// Lógica de publicidad
const shouldShowAd = (index) => {
  return (index + 1) % 6 === 0;
};

const getAdType = (index) => {
  const types = ["service", "newsletter", "promo"];
  const adIndex = Math.floor((index + 1) / 6) - 1;
  return types[adIndex % types.length];
};

const getAdProps = (index) => {
  const adIndex = Math.floor((index + 1) / 6) - 1;

  const serviceAds = [
    {
      serviceIcon: "bi-heart-pulse",
      serviceTitle: "Póliza de Vida",
      serviceDescription: "Protege el futuro de tu familia",
      serviceLink: "/servicios/poliza-vida",
    },
    {
      serviceIcon: "bi-car-front",
      serviceTitle: "Seguro Vehicular",
      serviceDescription: "Protección integral para tu vehículo",
      serviceLink: "/servicios/vehicular",
    },
    {
      serviceIcon: "bi-shield-check",
      serviceTitle: "ARL",
      serviceDescription: "Cumplimiento y protección laboral",
      serviceLink: "/servicios/arl",
    },
  ];

  const promoAds = [
    {
      promoTitle: "¡Descuento especial en seguros de vida!",
      promoDescription: "Aprovecha hasta 20% de descuento este mes",
    },
    {
      promoTitle: "¡Promoción Todo Riesgo!",
      promoDescription: "Asegura tu vehículo con condiciones especiales",
    },
  ];

  const type = getAdType(index);

  if (type === "service") {
    return serviceAds[adIndex % serviceAds.length];
  } else if (type === "promo") {
    return promoAds[adIndex % promoAds.length];
  }

  return {};
};
</script>

<style scoped>
/* Hero Section */
.blog-hero {
  background: linear-gradient(
    135deg,
    var(--primary-color) 0%,
    var(--secondary-color) 100%
  );
  color: white;
  padding: 120px 0 60px;
  margin-bottom: 40px;
}

.hero-title {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 15px;
}

.hero-subtitle {
  font-size: 1.25rem;
  opacity: 0.95;
  margin: 0;
}

.search-box {
  position: relative;
  margin-top: 20px;
}

.search-box input {
  padding-right: 50px;
  border: none;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.btn-search {
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
  background: var(--primary-color);
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s;
}

.btn-search:hover {
  background: var(--secondary-color);
}

/* Categorías */
.blog-categories {
  margin-bottom: 40px;
}

.categories-wrapper {
  display: flex;
  gap: 10px;
  overflow-x: auto;
  padding: 10px 0;
  -webkit-overflow-scrolling: touch;
}

.categories-wrapper::-webkit-scrollbar {
  height: 6px;
}

.categories-wrapper::-webkit-scrollbar-thumb {
  background: var(--primary-color);
  border-radius: 3px;
}

.category-btn {
  background: white;
  border: 2px solid #e0e0e0;
  padding: 10px 25px;
  border-radius: 25px;
  font-weight: 600;
  white-space: nowrap;
  transition: all 0.3s;
  cursor: pointer;
}

.category-btn:hover {
  border-color: var(--primary-color);
  color: var(--primary-color);
}

.category-btn.active {
  background: var(--primary-color);
  color: white;
  border-color: var(--primary-color);
}

/* Posts Section */
.blog-posts {
  padding: 40px 0;
}

/* Paginación */
.pagination-wrapper {
  margin-top: 60px;
}

.pagination .page-link {
  color: var(--primary-color);
  border: 2px solid #e0e0e0;
  margin: 0 3px;
  border-radius: 8px;
}

.pagination .page-link:hover {
  background: var(--primary-color);
  color: white;
  border-color: var(--primary-color);
}

.pagination .page-item.active .page-link {
  background: var(--primary-color);
  border-color: var(--primary-color);
}

.pagination .page-item.disabled .page-link {
  opacity: 0.5;
  cursor: not-allowed;
}

/* CTA Final */
.blog-cta {
  padding: 40px 0 80px;
}

/* Responsive */
@media (max-width: 992px) {
  .hero-title {
    font-size: 2.5rem;
  }
}

@media (max-width: 768px) {
  .blog-hero {
    padding: 100px 0 40px;
  }

  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .search-box {
    margin-top: 25px;
  }
}
</style>
