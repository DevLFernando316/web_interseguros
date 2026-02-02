import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Blog from "@/views/Blog.vue";
import BlogPost from "@/views/BlogPost.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      title: "Inicio - Interseguros",
    },
  },
  {
    path: "/nosotros",
    name: "about",
    component: () => import("@/views/About.vue"),
    meta: {
      title: "Nosotros - Interseguros",
    },
  },
  {
    path: "/servicios",
    name: "services",
    component: () => import("@/views/Services.vue"),
    meta: {
      title: "Servicios - Interseguros",
    },
  },
  {
    path: "/servicios/:slug",
    name: "service-detail",
    component: () => import("@/views/ServiceDetail.vue"),
    meta: {
      title: "Detalle del Servicio - Interseguros",
    },
  },
  {
    path: "/contacto",
    name: "contact",
    component: () => import("@/views/Contact.vue"),
    meta: {
      title: "Contacto - Interseguros",
    },
  },

  {
    path: "/blog",
    name: "Blog",
    component: Blog,
    meta: {
      title: "Blog - Interseguros",
      description:
        "Consejos, noticias y todo lo que necesitas saber sobre seguros",
    },
  },
  {
    path: "/blog/:slug",
    name: "BlogPost",
    component: BlogPost,
    meta: {
      title: "Artículo - Blog Interseguros",
      description: "Lee nuestro artículo sobre seguros",
    },
  },

  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("@/views/NotFound.vue"),
    meta: {
      title: "404 - Página no encontrada",
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    } else {
      return { top: 0, behavior: "smooth" };
    }
  },
});

// Cambiar título de la página
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || "Interseguros";
  next();
});

export default router;
