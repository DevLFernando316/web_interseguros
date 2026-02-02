<template>
  <section class="blog-preview">
    <div class="container">
      <!-- Header de la sección -->
      <div class="section-header">
        <div class="badge-wrapper">
          <span class="section-badge">
            <i class="bi bi-newspaper"></i>
            Blog
          </span>
        </div>
        <h2 class="section-title">Últimas Noticias y Consejos</h2>
        <p class="section-subtitle">
          Mantente informado con nuestros artículos sobre seguros, protección y
          bienestar
        </p>
      </div>

      <!-- Loading -->
      <div v-if="loading" class="text-center py-4">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Cargando...</span>
        </div>
      </div>

      <!-- Error -->
      <div v-else-if="error" class="alert alert-warning text-center">
        No se pudieron cargar los artículos del blog en este momento.
      </div>

      <!-- Posts Grid -->
      <div v-else-if="posts.length > 0" class="blog-grid">
        <article
          v-for="(post, index) in posts.slice(0, 3)"
          :key="post.id"
          class="blog-preview-card"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <router-link :to="`/blog/${post.slug}`" class="card-link">
            <!-- Imagen -->
            <div class="card-image">
              <img
                v-if="getFeaturedImage(post)"
                :src="getFeaturedImage(post)"
                :alt="getTitle(post)"
                loading="lazy"
              />
              <div v-else class="placeholder-image">
                <i class="bi bi-newspaper"></i>
              </div>

              <!-- Overlay con gradiente -->
              <div class="card-overlay"></div>

              <!-- Categoría badge -->
              <div
                v-if="getCategoryNames(post).length > 0"
                class="card-category"
              >
                {{ getCategoryNames(post)[0] }}
              </div>
            </div>

            <!-- Contenido -->
            <div class="card-content">
              <!-- Meta info -->
              <div class="card-meta">
                <span class="meta-date">
                  <i class="bi bi-calendar3"></i>
                  {{ getDate(post, "short") }}
                </span>
                <span class="meta-read">
                  <i class="bi bi-clock"></i>
                  3 min
                </span>
              </div>

              <!-- Título -->
              <h3 class="card-title" v-html="getTitle(post)"></h3>

              <!-- Excerpt -->
              <p class="card-excerpt">
                {{ getExcerptText(post) }}
              </p>

              <!-- Leer más -->
              <span class="card-link-text">
                Leer artículo
                <i class="bi bi-arrow-right"></i>
              </span>
            </div>
          </router-link>
        </article>
      </div>

      <!-- Botón Ver Todos -->
      <div class="text-center mt-5" v-if="posts.length > 0">
        <router-link to="/blog" class="btn-view-all">
          <span>Ver todos los artículos</span>
          <i class="bi bi-arrow-right"></i>
        </router-link>
      </div>

      <!-- Estado vacío -->
      <div v-else class="empty-state">
        <i class="bi bi-inbox"></i>
        <p>Pronto publicaremos nuestros primeros artículos</p>
        <router-link to="/blog" class="btn btn-primary">
          Ir al blog
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";
import { useWordPress } from "@/composables/useWordPress";

const {
  posts,
  loading,
  error,
  getPosts,
  getTitle,
  getFeaturedImage,
  getDate,
  getCategoryNames,
  getExcerpt,
} = useWordPress();

// Obtener últimos 3 posts al montar
onMounted(async () => {
  await getPosts({
    perPage: 3,
    page: 1,
    orderBy: "date",
    order: "desc",
  });
});

// Función para extraer texto plano del excerpt
const getExcerptText = (post) => {
  const excerpt = getExcerpt(post);
  // Remover tags HTML
  const text = excerpt.replace(/<[^>]*>/g, "");
  // Limitar a 120 caracteres
  return text.length > 120 ? text.substring(0, 120) + "..." : text;
};
</script>

<style scoped>
.blog-preview {
  padding: 80px 0;
  background: linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%);
  position: relative;
  overflow: hidden;
}

/* Decoración de fondo */
.blog-preview::before {
  content: "";
  position: absolute;
  top: 0;
  right: -100px;
  width: 500px;
  height: 500px;
  background: radial-gradient(
    circle,
    rgba(15, 255, 168, 0.05) 0%,
    transparent 70%
  );
  border-radius: 50%;
}

/* Header de la sección */
.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.badge-wrapper {
  margin-bottom: 20px;
}

.section-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--accent-color);
  color: var(--text-dark);
  padding: 8px 20px;
  border-radius: 30px;
  font-weight: 600;
  font-size: 0.9rem;
  box-shadow: 0 4px 15px rgba(15, 255, 168, 0.3);
}

.section-badge i {
  font-size: 1rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--text-dark);
  margin-bottom: 15px;
  position: relative;
}

.section-subtitle {
  font-size: 1.1rem;
  color: var(--text-light);
  max-width: 600px;
  margin: 0 auto;
}

/* Grid de Posts */
.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
  margin-bottom: 20px;
}

/* Card de Post */
.blog-preview-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  animation: fadeInUp 0.6s ease forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.blog-preview-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.card-link {
  text-decoration: none;
  color: inherit;
  display: block;
}

/* Imagen del card */
.card-image {
  position: relative;
  width: 100%;
  height: 240px;
  overflow: hidden;
  background: var(--bg-light);
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.blog-preview-card:hover .card-image img {
  transform: scale(1.1);
}

.placeholder-image {
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    var(--primary-color) 0%,
    var(--secondary-color) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.placeholder-image i {
  font-size: 4rem;
  opacity: 0.3;
}

/* Overlay */
.card-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.4), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.blog-preview-card:hover .card-overlay {
  opacity: 1;
}

/* Categoría badge */
.card-category {
  position: absolute;
  top: 15px;
  left: 15px;
  background: rgba(15, 255, 168, 0.95);
  color: var(--text-dark);
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  backdrop-filter: blur(10px);
  z-index: 2;
}

/* Contenido del card */
.card-content {
  padding: 25px;
}

.card-meta {
  display: flex;
  gap: 15px;
  margin-bottom: 12px;
  font-size: 0.85rem;
  color: var(--text-light);
}

.card-meta span {
  display: flex;
  align-items: center;
  gap: 5px;
}

.card-meta i {
  font-size: 0.85rem;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 12px;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  transition: color 0.3s ease;
}

.blog-preview-card:hover .card-title {
  color: var(--primary-color);
}

.card-excerpt {
  font-size: 0.95rem;
  color: var(--text-light);
  line-height: 1.6;
  margin-bottom: 15px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-link-text {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--primary-color);
  font-weight: 600;
  font-size: 0.95rem;
  transition: gap 0.3s ease;
}

.blog-preview-card:hover .card-link-text {
  gap: 12px;
  color: var(--accent-color);
}

.card-link-text i {
  font-size: 0.9rem;
}

/* Botón Ver Todos */
.btn-view-all {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: var(--primary-color);
  color: white;
  padding: 15px 40px;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(26, 58, 92, 0.3);
}

.btn-view-all:hover {
  background: var(--secondary-color);
  transform: translateY(-3px);
  box-shadow: 0 8px 30px rgba(26, 58, 92, 0.4);
  color: white;
}

.btn-view-all i {
  transition: transform 0.3s ease;
}

.btn-view-all:hover i {
  transform: translateX(5px);
}

/* Estado vacío */
.empty-state {
  text-align: center;
  padding: 60px 20px;
}

.empty-state i {
  font-size: 4rem;
  color: var(--text-light);
  margin-bottom: 20px;
  opacity: 0.5;
}

.empty-state p {
  font-size: 1.1rem;
  color: var(--text-light);
  margin-bottom: 25px;
}

/* Responsive */
@media (max-width: 992px) {
  .blog-preview {
    padding: 60px 0;
  }

  .section-title {
    font-size: 2rem;
  }

  .blog-grid {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 25px;
  }
}

@media (max-width: 768px) {
  .section-header {
    margin-bottom: 40px;
  }

  .section-title {
    font-size: 1.75rem;
  }

  .section-subtitle {
    font-size: 1rem;
  }

  .blog-grid {
    grid-template-columns: 1fr;
  }

  .card-image {
    height: 200px;
  }

  .btn-view-all {
    width: 100%;
    justify-content: center;
  }
}
</style>
