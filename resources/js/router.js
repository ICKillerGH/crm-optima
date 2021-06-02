import { createRouter, createWebHashHistory } from "vue-router";
import Clients from "@/pages/Clients.vue"
import ClientDetails from "@/pages/ClientDetails.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/clientes',
    },
    {
      path: '/clientes',
      component: Clients,
    },
    {
      path: '/clientes/:id',
      component: ClientDetails,
    },
  ]
});

export default router;
