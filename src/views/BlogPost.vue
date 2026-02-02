<template>
  <div class="blog-post-page">
    <!-- Loading -->
    <div v-if="loading" class="container py-5">
      <div class="text-center">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Cargando...</span>
        </div>
        <p class="mt-3">Cargando artículo...</p>
      </div>
    </div>

    <!-- Error -->
    <div v-else-if="error" class="container py-5">
      <div class="alert alert-danger" role="alert">
        <i class="bi bi-exclamation-triangle"></i>
        {{ error }}
      </div>
      <router-link to="/blog" class="btn btn-primary">
        <i class="bi bi-arrow-left"></i>
        Volver al blog
      </router-link>
    </div>

    <!-- Post Content -->
    <article v-else-if="post" class="blog-post">
      <!-- Header del Post -->
      <header class="post-header">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-10 col-xl-8">
              <!-- Breadcrumb -->
              <nav aria-label="breadcrumb" class="post-breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <router-link to="/">
                      <i class="bi bi-house-door"></i>
                      Inicio
                    </router-link>
                  </li>
                  <li class="breadcrumb-item">
                    <router-link to="/blog">
                      <i class="bi bi-newspaper"></i>
                      Blog
                    </router-link>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Artículo
                  </li>
                </ol>
                <router-link to="/blog" class="btn-back-blog">
                  <i class="bi bi-arrow-left"></i>
                  Volver al blog
                </router-link>
              </nav>

              <!-- Categorías -->
              <div v-if="categories.length > 0" class="post-categories">
                <span
                  v-for="category in categories"
                  :key="category"
                  class="category-badge"
                >
                  {{ category }}
                </span>
              </div>

              <!-- Título -->
              <h1 class="post-title" v-html="title"></h1>

              <!-- Meta info -->
              <div class="post-meta">
                <span class="meta-item">
                  <i class="bi bi-person-circle"></i>
                  {{ author }}
                </span>
                <span class="meta-item">
                  <i class="bi bi-calendar3"></i>
                  {{ formattedDate }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <!-- Imagen destacada -->
      <div v-if="featuredImage" class="post-featured-image">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-10 col-xl-8">
              <img :src="featuredImage" :alt="title" />
            </div>
          </div>
        </div>
      </div>

      <!-- Contenido -->
      <div class="post-content-wrapper">
        <div class="container">
          <div class="row">
            <!-- Sidebar -->
            <aside class="col-lg-3 order-lg-1">
              <div class="sidebar-sticky">
                <!-- Widget de Volver al Blog -->
                <div class="widget widget-back">
                  <router-link
                    to="/blog"
                    class="btn btn-outline-primary btn-sm w-100"
                  >
                    <i class="bi bi-arrow-left"></i>
                    Ver todos los artículos
                  </router-link>
                </div>

                <!-- Widget de Contacto -->
                <div class="widget widget-contact">
                  <h4 class="widget-title">¿Necesitas ayuda?</h4>
                  <p>Contáctanos para una asesoría personalizada</p>
                  <router-link
                    to="/contacto"
                    class="btn btn-primary btn-sm w-100"
                  >
                    <i class="bi bi-envelope"></i>
                    Contactar
                  </router-link>
                  <a
                    href="https://wa.me/573178918767"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn btn-success btn-sm w-100 mt-2"
                  >
                    <i class="bi bi-whatsapp"></i>
                    WhatsApp
                  </a>
                </div>

                <!-- Widget de Servicios -->
                <div class="widget widget-services">
                  <h4 class="widget-title">Nuestros servicios</h4>
                  <ul class="service-list">
                    <li>
                      <router-link to="/servicios/poliza-vida">
                        <i class="bi bi-heart-pulse"></i>
                        Póliza de Vida
                      </router-link>
                    </li>
                    <li>
                      <router-link to="/servicios/vehicular">
                        <i class="bi bi-car-front"></i>
                        Seguro Vehicular
                      </router-link>
                    </li>
                    <li>
                      <router-link to="/servicios/salud">
                        <i class="bi bi-hospital"></i>
                        Póliza de Salud
                      </router-link>
                    </li>
                    <li>
                      <router-link to="/servicios/arl">
                        <i class="bi bi-shield-check"></i>
                        ARL
                      </router-link>
                    </li>
                  </ul>
                  <router-link
                    to="/servicios"
                    class="btn btn-outline-primary btn-sm w-100 mt-3"
                  >
                    Ver todos
                  </router-link>
                </div>
              </div>
            </aside>

            <!-- Contenido principal -->
            <div class="col-lg-9 order-lg-2">
              <div class="post-content" v-html="content"></div>

              <!-- CTA Inline -->
              <AdBlock type="whatsapp" inline />

              <!-- Tags (si existen) -->
              <div v-if="post.tags && post.tags.length > 0" class="post-tags">
                <h5>Etiquetas:</h5>
                <span v-for="tag in post.tags" :key="tag" class="tag-badge">
                  #{{ tag }}
                </span>
              </div>

              <!-- Compartir -->
              <div class="post-share">
                <h5>Compartir:</h5>
                <div class="share-buttons">
                  <a
                    :href="getShareUrl('facebook')"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="share-btn share-facebook"
                    aria-label="Compartir en Facebook"
                  >
                    <i class="bi bi-facebook"></i>
                  </a>
                  <a
                    :href="getShareUrl('twitter')"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="share-btn share-twitter"
                    aria-label="Compartir en Twitter"
                  >
                    <i class="bi bi-twitter-x"></i>
                  </a>
                  <a
                    :href="getShareUrl('linkedin')"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="share-btn share-linkedin"
                    aria-label="Compartir en LinkedIn"
                  >
                    <i class="bi bi-linkedin"></i>
                  </a>
                  <a
                    :href="getShareUrl('whatsapp')"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="share-btn share-whatsapp"
                    aria-label="Compartir en WhatsApp"
                  >
                    <i class="bi bi-whatsapp"></i>
                  </a>
                </div>
              </div>

              <!-- Posts Relacionados -->
              <div v-if="relatedPosts.length > 0" class="related-posts">
                <h3>Artículos relacionados</h3>
                <div class="row g-4">
                  <div
                    v-for="relatedPost in relatedPosts"
                    :key="relatedPost.id"
                    class="col-md-4"
                  >
                    <BlogCard :post="relatedPost" />
                  </div>
                </div>
              </div>

              <!-- CTA Final -->
              <AdBlock type="contact" />
            </div>
          </div>
        </div>
      </div>
    </article>
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
  post,
  loading,
  error,
  getPostBySlug,
  getRelatedPosts,
  getTitle,
  getContent,
  getFeaturedImage,
  getAuthor,
  getDate,
  getCategoryNames,
} = useWordPress();

const relatedPosts = ref([]);

// Computed properties
const title = computed(() => getTitle(post.value));
const content = computed(() => getContent(post.value));
const featuredImage = computed(() => getFeaturedImage(post.value));
const author = computed(() => getAuthor(post.value));
const formattedDate = computed(() => getDate(post.value, "long"));
const categories = computed(() => getCategoryNames(post.value));

// Cargar post
const loadPost = async () => {
  const slug = route.params.slug;
  const postData = await getPostBySlug(slug);

  if (postData && postData._embedded?.["wp:term"]?.[0]?.[0]?.id) {
    // Cargar posts relacionados
    const categoryId = postData._embedded["wp:term"][0][0].id;
    relatedPosts.value = await getRelatedPosts(postData.id, categoryId, 3);
  }

  // Scroll al inicio
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Watch para cambios en la ruta
watch(
  () => route.params.slug,
  () => {
    if (route.name === "BlogPost") {
      loadPost();
    }
  },
);

onMounted(() => {
  loadPost();
});

// Compartir en redes sociales
const getShareUrl = (platform) => {
  const url = window.location.href;
  const text = title.value;

  const urls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(text + " " + url)}`,
  };

  return urls[platform] || url;
};
</script>

<style scoped>
/* Header del Post */
.post-header {
  padding: 120px 0 40px;
  background: var(--bg-light);
}

.post-breadcrumb {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 20px;
}

.breadcrumb {
  font-size: 0.875rem;
  margin-bottom: 0;
  background: transparent;
  padding: 0;
}

.breadcrumb-item a {
  color: var(--text-light);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 5px;
}

.breadcrumb-item a:hover {
  color: var(--primary-color);
}

.breadcrumb-item i {
  font-size: 0.875rem;
}

.btn-back-blog {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 20px;
  background: var(--primary-color);
  color: white;
  border-radius: 25px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-back-blog:hover {
  background: var(--secondary-color);
  transform: translateX(-3px);
  color: white;
}

.btn-back-blog i {
  font-size: 1rem;
}

.post-categories {
  margin-bottom: 20px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.category-badge {
  background: var(--primary-color);
  color: white;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
}

.post-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--text-dark);
  margin-bottom: 25px;
  line-height: 1.2;
}

.post-meta {
  display: flex;
  gap: 25px;
  flex-wrap: wrap;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--text-light);
  font-size: 0.95rem;
}

.meta-item i {
  font-size: 1.1rem;
}

/* Imagen destacada */
.post-featured-image {
  padding: 40px 0;
  background: var(--bg-light);
}

.post-featured-image img {
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

/* Contenido */
.post-content-wrapper {
  padding: 60px 0;
}

.sidebar-sticky {
  position: sticky;
  top: 100px;
}

/* Widgets */
.widget {
  background: white;
  border-radius: 12px;
  padding: 25px;
  margin-bottom: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.widget-back {
  background: linear-gradient(
    135deg,
    var(--primary-color) 0%,
    var(--secondary-color) 100%
  );
  padding: 20px;
}

.widget-back .btn {
  background: white;
  color: var(--primary-color);
  border: none;
  font-weight: 600;
}

.widget-back .btn:hover {
  background: rgba(255, 255, 255, 0.9);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.widget-title {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 15px;
  color: var(--text-dark);
}

.widget-contact p {
  font-size: 0.9rem;
  color: var(--text-light);
  margin-bottom: 15px;
}

.service-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.service-list li {
  margin-bottom: 12px;
}

.service-list a {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--text-dark);
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.3s;
}

.service-list a:hover {
  color: var(--primary-color);
}

.service-list i {
  color: var(--primary-color);
  font-size: 1.1rem;
}

/* Contenido del post */
.post-content {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-dark);
}

.post-content :deep(h2),
.post-content :deep(h3),
.post-content :deep(h4) {
  margin-top: 40px;
  margin-bottom: 20px;
  font-weight: 700;
  color: var(--text-dark);
}

.post-content :deep(h2) {
  font-size: 2rem;
}

.post-content :deep(h3) {
  font-size: 1.5rem;
}

.post-content :deep(p) {
  margin-bottom: 20px;
}

.post-content :deep(img) {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin: 30px 0;
}

.post-content :deep(a) {
  color: var(--primary-color);
  text-decoration: underline;
}

.post-content :deep(ul),
.post-content :deep(ol) {
  margin-bottom: 20px;
  padding-left: 25px;
}

.post-content :deep(li) {
  margin-bottom: 10px;
}

.post-content :deep(blockquote) {
  border-left: 4px solid var(--primary-color);
  padding-left: 20px;
  margin: 30px 0;
  font-style: italic;
  color: var(--text-light);
}

.post-content :deep(code) {
  background: var(--bg-light);
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.9em;
}

.post-content :deep(pre) {
  background: var(--bg-light);
  padding: 20px;
  border-radius: 8px;
  overflow-x: auto;
  margin: 20px 0;
}

/* Tags */
.post-tags {
  margin-top: 40px;
  padding-top: 30px;
  border-top: 1px solid #e0e0e0;
}

.post-tags h5 {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 15px;
}

.tag-badge {
  display: inline-block;
  background: var(--bg-light);
  color: var(--text-dark);
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.875rem;
  margin-right: 10px;
  margin-bottom: 10px;
}

/* Compartir */
.post-share {
  margin-top: 30px;
  padding-top: 30px;
  border-top: 1px solid #e0e0e0;
}

.post-share h5 {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 15px;
}

.share-buttons {
  display: flex;
  gap: 10px;
}

.share-btn {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  transition: transform 0.3s;
  text-decoration: none;
}

.share-btn:hover {
  transform: scale(1.1);
}

.share-facebook {
  background: #1877f2;
}

.share-twitter {
  background: #000000;
}

.share-linkedin {
  background: #0077b5;
}

.share-whatsapp {
  background: #25d366;
}

/* Posts relacionados */
.related-posts {
  margin-top: 60px;
  padding-top: 40px;
  border-top: 2px solid #e0e0e0;
}

.related-posts h3 {
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 30px;
}

/* Responsive */
@media (max-width: 992px) {
  .sidebar-sticky {
    position: static;
    margin-top: 40px;
  }

  .post-title {
    font-size: 2rem;
  }

  .post-breadcrumb {
    flex-direction: column;
    align-items: flex-start;
  }

  .btn-back-blog {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .post-header {
    padding: 100px 0 30px;
  }

  .post-title {
    font-size: 1.75rem;
  }

  .post-content {
    font-size: 1rem;
  }

  .share-buttons {
    justify-content: center;
  }

  .breadcrumb {
    font-size: 0.8rem;
  }
}
</style>
