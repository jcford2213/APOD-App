import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

createApp(App).use(router).mount('#app');

// // Initiate vue application
// const app = createApp(App)

// // Use Vue-Router in the Application
// app.use(router)

// // Mount the Vue app in <div id="app"> in /src/index.html
// app.mount('#app')
