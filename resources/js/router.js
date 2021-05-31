import { createRouter, createWebHashHistory } from "vue-router";
import Dashboard from "@/pages/Dashboard.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: () => import("@/pages/Dashboard.vue")
      // path: "/",
      // redirect: "/dashboard",
      // component: () => import("@/view/layout/Layout"),
      // children: [
      //   {
      //     path: "/dashboard",
      //     name: "dashboard",
      //     component: () => import("@/pages/Dashboard.vue")
      //   },
      // ],
    }
  ]
});

export default router;
