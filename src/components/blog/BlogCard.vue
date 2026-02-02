<template>
  <div class="blog-card">
    <router-link :to="`/blog/${post.slug}`" class="blog-card-link">
      <!-- Imagen destacada -->
      <div class="blog-card-image">
        <img
          v-if="featuredImage"
          :src="featuredImage"
          :alt="title"
          loading="lazy"
        />
        <div v-else class="placeholder-image">
          <i class="bi bi-newspaper"></i>
          <span>Interseguros</span>
        </div>

        <!-- Categorías -->
        <div v-if="categories.length > 0" class="blog-card-categories">
          <span
            v-for="category in categories.slice(0, 2)"
            :key="category"
            class="category-badge"
          >
            {{ category }}
          </span>
        </div>
      </div>

      <!-- Contenido -->
      <div class="blog-card-content">
        <!-- Meta información -->
        <div class="blog-card-meta">
          <span class="meta-item">
            <i class="bi bi-calendar3"></i>
            {{ formattedDate }}
          </span>
          <span class="meta-item">
            <i class="bi bi-person"></i>
            {{ author }}
          </span>
        </div>

        <!-- Título -->
        <h3 class="blog-card-title" v-html="title"></h3>

        <!-- Excerpt -->
        <div class="blog-card-excerpt" v-html="excerpt"></div>

        <!-- Leer más -->
        <div class="blog-card-footer">
          <span class="read-more">
            Leer más
            <i class="bi bi-arrow-right"></i>
          </span>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useWordPress } from "@/composables/useWordPress";

const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
});

const {
  getTitle,
  getExcerpt,
  getFeaturedImage,
  getAuthor,
  getDate,
  getCategoryNames,
} = useWordPress();

const title = computed(() => getTitle(props.post));
const excerpt = computed(() => getExcerpt(props.post));
const featuredImage = computed(() => getFeaturedImage(props.post));
const author = computed(() => getAuthor(props.post));
const formattedDate = computed(() => getDate(props.post, "short"));
const categories = computed(() => getCategoryNames(props.post));
</script>

<style scoped>
.blog-card {
  height: 100%;
  border-radius: 12px;
  overflow: hidden;
  background: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.blog-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.blog-card-link {
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  height: 100%;
}

/* Imagen */
.blog-card-image {
  position: relative;
  width: 100%;
  height: 250px;
  overflow: hidden;
  background: var(--bg-light);
}

.blog-card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: white;
}

.placeholder-image i {
  font-size: 3rem;
  opacity: 0.8;
}

.placeholder-image span {
  font-size: 1.25rem;
  font-weight: 700;
  opacity: 0.9;
}

.blog-card:hover .blog-card-image img {
  transform: scale(1.05);
}

.blog-card-categories {
  position: absolute;
  top: 15px;
  left: 15px;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  z-index: 10;
}

.category-badge {
  background: rgba(26, 58, 92, 0.9);
  color: white;
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 500;
  backdrop-filter: blur(5px);
}

/* Contenido */
.blog-card-content {
  padding: 25px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.blog-card-meta {
  display: flex;
  gap: 15px;
  margin-bottom: 12px;
  flex-wrap: wrap;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 0.875rem;
  color: var(--text-light);
}

.meta-item i {
  font-size: 0.875rem;
}

.blog-card-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 12px;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.blog-card-excerpt {
  color: var(--text-light);
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 20px;
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Removemos estilos de párrafos del excerpt */
.blog-card-excerpt :deep(p) {
  margin: 0;
}

.blog-card-footer {
  margin-top: auto;
}

.read-more {
  color: var(--primary-color);
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  transition: gap 0.3s ease;
}

.blog-card:hover .read-more {
  gap: 10px;
}

.read-more i {
  font-size: 0.875rem;
}

/* Responsive */
@media (max-width: 768px) {
  .blog-card-image {
    height: 200px;
  }

  .blog-card-content {
    padding: 20px;
  }

  .blog-card-title {
    font-size: 1.1rem;
  }
}
</style>
