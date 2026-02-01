import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

// Bootstrap JS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Estilos globales
import './assets/css/main.css'

const app = createApp(App)

app.use(router)
app.mount('#app')
