# Interseguros - Sitio Web Corporativo

Aplicación web moderna y profesional desarrollada con **Vue 3**, **Vite** y **Bootstrap 5** para Interseguros, empresa especializada en soluciones de seguros en Colombia.

## 🚀 Características

- ✅ **Vue 3** con Composition API
- ✅ **Vite** para desarrollo ultrarrápido
- ✅ **Vue Router** para navegación SPA
- ✅ **Bootstrap 5** para diseño responsive
- ✅ **Bootstrap Icons** para iconografía
- ✅ **Diseño moderno y profesional** inspirado en líderes del sector
- ✅ **Totalmente responsive** (móvil, tablet, desktop)
- ✅ **Componentes reutilizables**
- ✅ **Rutas con lazy loading**
- ✅ **SEO friendly**

## 📁 Estructura del Proyecto

```
interseguros-web/
├── public/                      # Archivos estáticos
├── src/
│   ├── assets/
│   │   ├── css/
│   │   │   └── main.css        # Estilos globales
│   │   └── images/             # Imágenes del proyecto
│   ├── components/
│   │   ├── home/               # Componentes de la página Home
│   │   │   ├── HeroSection.vue
│   │   │   ├── AboutSection.vue
│   │   │   ├── ServicesSection.vue
│   │   │   ├── ValueProposition.vue
│   │   │   ├── StatsSection.vue
│   │   │   └── CTASection.vue
│   │   ├── Navbar.vue          # Navegación principal
│   │   └── Footer.vue          # Pie de página
│   ├── views/                  # Vistas principales
│   │   ├── Home.vue            # Página de inicio
│   │   ├── About.vue           # Página Nosotros
│   │   ├── Services.vue        # Lista de servicios
│   │   ├── ServiceDetail.vue   # Detalle de cada servicio
│   │   ├── Contact.vue         # Página de contacto
│   │   └── NotFound.vue        # Página 404
│   ├── router/
│   │   └── index.js            # Configuración de rutas
│   ├── App.vue                 # Componente raíz
│   └── main.js                 # Punto de entrada
├── index.html                  # HTML principal
├── vite.config.js             # Configuración de Vite
├── package.json               # Dependencias
└── README.md                  # Este archivo
```

## 🎨 Paleta de Colores

```css
--primary-color: #1a3a5c     /* Azul oscuro corporativo */
--secondary-color: #2c5f8d   /* Azul medio */
--accent-color: #e67e22      /* Naranja/dorado para acentos */
--accent-light: #f39c12      /* Naranja claro */
--text-dark: #2c3e50         /* Texto principal */
--text-light: #7f8c8d        /* Texto secundario */
--bg-light: #f8f9fa          /* Fondo claro */
```

## 📦 Instalación

### Prerrequisitos

- Node.js 16+ 
- npm o yarn

### Pasos

```bash
# 1. Clonar o descargar el proyecto
cd interseguros-web

# 2. Instalar dependencias
npm install

# 3. Ejecutar en modo desarrollo
npm run dev

# 4. Abrir navegador en http://localhost:5173
```

## 🛠️ Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo

# Producción
npm run build        # Compila para producción
npm run preview      # Preview de build de producción
```

## 🌐 Rutas de la Aplicación

| Ruta | Componente | Descripción |
|------|-----------|-------------|
| `/` | Home | Página principal con todas las secciones |
| `/nosotros` | About | Información sobre la empresa |
| `/servicios` | Services | Lista de servicios disponibles |
| `/servicios/:slug` | ServiceDetail | Detalle de cada servicio |
| `/contacto` | Contact | Formulario de contacto |
| `/*` | NotFound | Página 404 |

## 📄 Servicios Disponibles

1. **Seguro de Vida Deudor** (`/servicios/vida-deudor`)
2. **Póliza de Vida** (`/servicios/poliza-vida`)
3. **Todo Riesgo Particular** (`/servicios/vehicular`)
4. **Todo Riesgo Pesados** (`/servicios/pesados`)
5. **Póliza de Salud** (`/servicios/salud`)
6. **ARL** (`/servicios/arl`)

## 🧩 Componentes Principales

### Navbar
- Navegación responsive
- Efecto de scroll
- Links activos con indicador visual
- Botón de cotización destacado

### Footer
- Links de navegación
- Información de contacto
- Redes sociales
- Copyright dinámico

### Home Components

#### HeroSection
- Banner principal con llamado a acción
- Diseño con gradiente
- Animaciones suaves

#### AboutSection
- Presentación de la empresa
- Badge de experiencia
- Imagen placeholder

#### ServicesSection
- Grid de servicios con cards
- Iconos personalizados
- Links a detalle de servicios

#### ValueProposition
- 4 valores principales
- Iconos animados
- Hover effects

#### StatsSection
- Estadísticas corporativas
- Fondo con gradiente
- Números destacados

#### CTASection
- Call to action intermedio
- Animación de pulso
- Botón destacado

## 🎯 Personalización

### Cambiar Colores

Edita las variables CSS en `/src/assets/css/main.css`:

```css
:root {
  --primary-color: #1a3a5c;
  --accent-color: #e67e22;
  /* ... más variables */
}
```

### Agregar Nuevo Servicio

1. Edita `/src/components/home/ServicesSection.vue`
2. Agrega al array `services`:

```javascript
{
  slug: 'nuevo-servicio',
  icon: 'bi-icon-name',
  title: 'Nombre del Servicio',
  description: 'Descripción breve'
}
```

3. Edita `/src/views/ServiceDetail.vue`
4. Agrega la data completa en `servicesData`

### Modificar Información de Contacto

Actualiza en múltiples archivos:
- `/src/components/Footer.vue`
- `/src/views/Contact.vue`
- `/src/views/ServiceDetail.vue`

## 🚀 Despliegue

### Build de Producción

```bash
npm run build
```

Esto generará la carpeta `dist/` lista para desplegar.

### Opciones de Hosting

- **Netlify**: Drag & drop de la carpeta `dist`
- **Vercel**: Conectar repositorio Git
- **GitHub Pages**: Usar GitHub Actions
- **Firebase Hosting**: `firebase deploy`
- **Servidor propio**: Subir carpeta `dist` vía FTP/SSH

### Configuración para Servidor

Si despliegas en subdirectorio, modifica `vite.config.js`:

```javascript
export default defineConfig({
  base: '/subdirectorio/',
  // ...
})
```

## 📱 Responsive Design

- **Mobile**: < 576px
- **Tablet**: 576px - 991px
- **Desktop**: > 992px

Todos los componentes están optimizados para estos breakpoints.

## ⚡ Optimizaciones

- **Lazy Loading**: Las vistas se cargan bajo demanda
- **Code Splitting**: Vite divide el código automáticamente
- **Tree Shaking**: Elimina código no utilizado
- **Minificación**: CSS y JS optimizados en producción
- **Compresión**: Vite comprime automáticamente

## 🔧 Próximos Pasos Sugeridos

### Funcionalidad

- [ ] Integrar backend para formularios de contacto
- [ ] Conectar con API de cotizaciones
- [ ] Sistema de gestión de contenidos (CMS)
- [ ] Panel de administración
- [ ] Chat en vivo
- [ ] Sistema de tickets

### SEO y Marketing

- [ ] Meta tags dinámicos
- [ ] Sitemap.xml
- [ ] Robots.txt
- [ ] Google Analytics
- [ ] Google Tag Manager
- [ ] Schema.org markup
- [ ] Open Graph tags

### Performance

- [ ] Lazy loading de imágenes
- [ ] PWA (Progressive Web App)
- [ ] Service Workers
- [ ] Caché estratégica

### Contenido

- [ ] Reemplazar placeholders con imágenes reales
- [ ] Blog de noticias y artículos
- [ ] Testimonios de clientes
- [ ] Casos de éxito
- [ ] Centro de ayuda/FAQ

## 📞 Información de Contacto

- **Teléfono**: +57 317 891 8767
- **Instagram**: @interseguros.colombia
- **Email**: info@interseguros.com.co
- **Ubicación**: Bucaramanga, Colombia

## 🤝 Desarrollo

Este proyecto fue desarrollado con las mejores prácticas de Vue 3 y está listo para escalar.

### Tecnologías Utilizadas

- **Vue 3.4+**: Framework progresivo de JavaScript
- **Vite 5+**: Build tool de nueva generación
- **Vue Router 4**: Routing oficial para Vue
- **Bootstrap 5.3**: Framework CSS
- **Bootstrap Icons 1.11**: Librería de iconos

## 📝 Licencia

© 2026 Interseguros. Todos los derechos reservados.

---

**Desarrollado con ❤️ para proteger lo que más importa**
