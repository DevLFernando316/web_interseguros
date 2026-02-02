import { ref, computed } from "vue";

/**
 * Composable para interactuar con la API REST de WordPress
 * @param {string} baseURL - URL base de WordPress (ej: https://blog.interseguros.com)
 */
export function useWordPress(baseURL = "http://localhost/interseguros_blog/") {
  const posts = ref([]);
  const post = ref(null);
  const categories = ref([]);
  const loading = ref(false);
  const error = ref(null);
  const totalPages = ref(0);
  const totalPosts = ref(0);

  const API_URL = `${baseURL}/wp-json/wp/v2`;

  /**
   * Obtener lista de posts
   * @param {Object} options - Opciones de filtrado
   */
  const getPosts = async (options = {}) => {
    const {
      perPage = 9,
      page = 1,
      category = null,
      search = null,
      orderBy = "date",
      order = "desc",
    } = options;

    loading.value = true;
    error.value = null;

    try {
      let url = `${API_URL}/posts?per_page=${perPage}&page=${page}&orderby=${orderBy}&order=${order}&_embed`;

      if (category) url += `&categories=${category}`;
      if (search) url += `&search=${encodeURIComponent(search)}`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      // WordPress devuelve el total de páginas y posts en headers
      totalPages.value = parseInt(response.headers.get("X-WP-TotalPages") || 0);
      totalPosts.value = parseInt(response.headers.get("X-WP-Total") || 0);

      posts.value = await response.json();
      return posts.value;
    } catch (err) {
      error.value = err.message;
      console.error("Error fetching posts:", err);
      return [];
    } finally {
      loading.value = false;
    }
  };

  /**
   * Obtener un post específico por slug
   * @param {string} slug - Slug del post
   */
  const getPostBySlug = async (slug) => {
    loading.value = true;
    error.value = null;

    try {
      const response = await fetch(`${API_URL}/posts?slug=${slug}&_embed`);

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();

      if (data.length === 0) {
        throw new Error("Post no encontrado");
      }

      post.value = data[0];
      return post.value;
    } catch (err) {
      error.value = err.message;
      console.error("Error fetching post:", err);
      return null;
    } finally {
      loading.value = false;
    }
  };

  /**
   * Obtener un post específico por ID
   * @param {number} id - ID del post
   */
  const getPostById = async (id) => {
    loading.value = true;
    error.value = null;

    try {
      const response = await fetch(`${API_URL}/posts/${id}?_embed`);

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      post.value = await response.json();
      return post.value;
    } catch (err) {
      error.value = err.message;
      console.error("Error fetching post:", err);
      return null;
    } finally {
      loading.value = false;
    }
  };

  /**
   * Obtener categorías
   */
  const getCategories = async () => {
    loading.value = true;
    error.value = null;

    try {
      const response = await fetch(`${API_URL}/categories?per_page=100`);

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      categories.value = await response.json();
      return categories.value;
    } catch (err) {
      error.value = err.message;
      console.error("Error fetching categories:", err);
      return [];
    } finally {
      loading.value = false;
    }
  };

  /**
   * Obtener posts relacionados
   * @param {number} postId - ID del post actual
   * @param {number} categoryId - ID de la categoría
   * @param {number} limit - Cantidad de posts a traer
   */
  const getRelatedPosts = async (postId, categoryId, limit = 3) => {
    loading.value = true;
    error.value = null;

    try {
      const response = await fetch(
        `${API_URL}/posts?categories=${categoryId}&exclude=${postId}&per_page=${limit}&_embed`,
      );

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      const relatedPosts = await response.json();
      return relatedPosts;
    } catch (err) {
      error.value = err.message;
      console.error("Error fetching related posts:", err);
      return [];
    } finally {
      loading.value = false;
    }
  };

  /**
   * Helpers computados
   */
  const hasMore = computed(() => {
    return posts.value.length < totalPosts.value;
  });

  const isEmpty = computed(() => {
    return !loading.value && posts.value.length === 0;
  });

  /**
   * Utilidades para extraer datos de posts
   */
  const getExcerpt = (postData) => {
    return postData?.excerpt?.rendered || "";
  };

  const getTitle = (postData) => {
    return postData?.title?.rendered || "";
  };

  const getContent = (postData) => {
    return postData?.content?.rendered || "";
  };

  const getFeaturedImage = (postData) => {
    return postData?._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;
  };

  const getAuthor = (postData) => {
    return postData?._embedded?.author?.[0]?.name || "Interseguros";
  };

  const getDate = (postData, format = "short") => {
    if (!postData?.date) return "";

    const date = new Date(postData.date);

    if (format === "short") {
      return date.toLocaleDateString("es-CO", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    } else if (format === "long") {
      return date.toLocaleDateString("es-CO", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    }

    return date.toISOString();
  };

  const getCategoryNames = (postData) => {
    return postData?._embedded?.["wp:term"]?.[0]?.map((cat) => cat.name) || [];
  };

  return {
    // State
    posts,
    post,
    categories,
    loading,
    error,
    totalPages,
    totalPosts,

    // Computed
    hasMore,
    isEmpty,

    // Methods
    getPosts,
    getPostBySlug,
    getPostById,
    getCategories,
    getRelatedPosts,

    // Helpers
    getExcerpt,
    getTitle,
    getContent,
    getFeaturedImage,
    getAuthor,
    getDate,
    getCategoryNames,
  };
}
