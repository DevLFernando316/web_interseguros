# 🚀 Guía Rápida de Inicio - Interseguros

## Instalación y Ejecución (5 minutos)

### Paso 1: Abrir el proyecto
```bash
cd interseguros-web
```

### Paso 2: Instalar dependencias
```bash
npm install
```
⏱️ Esto tomará 1-2 minutos

### Paso 3: Ejecutar en desarrollo
```bash
npm run dev
```

### Paso 4: Abrir en navegador
Abre: **http://localhost:5173**

¡Listo! Ya tienes el sitio corriendo.

---

## 📋 Checklist Post-Instalación

- [ ] El sitio carga correctamente en localhost:5173
- [ ] La navegación funciona (Inicio, Nosotros, Servicios, Contacto)
- [ ] Los servicios se pueden ver en detalle
- [ ] El formulario de contacto aparece
- [ ] El diseño se ve responsive en móvil

---

## 🎨 Personalización Rápida

### Cambiar información de contacto

**Archivos a editar:**
1. `src/components/Footer.vue` - líneas 42-58
2. `src/views/Contact.vue` - líneas 14-65

### Agregar/Modificar servicios

**Archivo:** `src/components/home/ServicesSection.vue`

**Líneas 51-94:** Array de servicios

**Ejemplo:**
```javascript
{
  slug: 'mi-servicio',
  icon: 'bi-star',
  title: 'Mi Nuevo Servicio',
  description: 'Descripción del servicio...'
}
```

### Cambiar colores corporativos

**Archivo:** `src/assets/css/main.css`

**Líneas 3-11:** Variables de colores

```css
--primary-color: #TU_COLOR_AZUL;
--accent-color: #TU_COLOR_NARANJA;
```

---

## 🏗️ Compilar para Producción

```bash
npm run build
```

Esto creará la carpeta `dist/` lista para subir a tu servidor.

---

## 📁 Estructura de Archivos Importantes

```
src/
├── views/              # Páginas principales
│   ├── Home.vue       ← Página de inicio
│   ├── About.vue      ← Página "Nosotros"
│   ├── Services.vue   ← Lista de servicios
│   └── Contact.vue    ← Página de contacto
├── components/
│   ├── Navbar.vue     ← Menú de navegación
│   ├── Footer.vue     ← Pie de página
│   └── home/          ← Secciones del Home
└── router/
    └── index.js       ← Configuración de rutas
```

---

## 🆘 Solución de Problemas Comunes

### Error: "Cannot find module"
**Solución:**
```bash
rm -rf node_modules package-lock.json
npm install
```

### El puerto 5173 está ocupado
**Solución:**
```bash
npm run dev -- --port 3000
```

### Los estilos no se ven
**Solución:**
1. Verifica que Bootstrap esté instalado: `npm list bootstrap`
2. Si falta: `npm install bootstrap bootstrap-icons`

---

## 📞 Soporte

Si tienes dudas, revisa el `README.md` completo.

**Características del proyecto:**
- ✅ Vue 3 + Vite
- ✅ Bootstrap 5
- ✅ Vue Router
- ✅ 100% Responsive
- ✅ 6 Servicios configurados
- ✅ Formularios de contacto

---

**¡Éxito con tu proyecto!** 🎉
