import {createRouter, createWebHistory} from 'vue-router';
import ClientsIndex from './pages/Clients/Index';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/clientes', component: ClientsIndex}
  ]
});

export default router;
