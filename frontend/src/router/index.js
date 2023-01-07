import { createRouter, createWebHistory } from 'vue-router';
import podView from '../views/podView.vue';

const routes = [
  {
    path: '/',
    name: 'homeView',
    props: true,
    component: podView
  },
  {
    path: '/:urlDate',
    name: 'searchView',
    props: true, // Accept any route pararmeters as props
    component: podView
  },
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router;
