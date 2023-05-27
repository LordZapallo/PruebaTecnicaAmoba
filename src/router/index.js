import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../views/Dashboard.vue"),
      name: "Dashboard",
    },
    {
      path: "/transactions",
      component: () => import("../views/Transactions.vue"),
      name: "Transactions",
    },
    {
      path: "/schedules",
      component: () => import("../views/Schedules.vue"),
      name: "Schedules",
    },
    {
      path: "/users",
      component: () => import("../views/Users.vue"),
      name: "Users",
    },
    {
      path: "/settings",
      component: () => import("../views/Settings.vue"),
      name: "Settings",
    },
  ],
});

export default router;
