import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/top",
    name: "Top",
    component: () => import("../components/Top.vue"),
    children: [
      {
        path: "home",
        name: "Home",
        component: () => import("../components/Home.vue"),
      },
      {
        path: "about",
        name: "About",
        component: () => import("../components/About.vue"),
      },
      {
        path: "article",
        name: "Article",
        component: () => import("../components/Article.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../components/Login.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
