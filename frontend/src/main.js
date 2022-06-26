import { createApp } from 'vue'
import App from './App.vue'
import './index.css';


// Initiate vue application
const app = createApp(App)

// Mount the Vue app in <div id="app"> in /src/index.html
app.mount('#app')
