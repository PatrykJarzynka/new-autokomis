import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Oferta from "@/views/Oferta.vue";
import CarOffer from "@/components/CarOffer/CarOffer.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/oferta',
      children: [
        {
          path: '',
          component: Oferta
        },
        {
          path: ':id',
          component: CarOffer
        }
      ]
    }
  ]
})

export default router
