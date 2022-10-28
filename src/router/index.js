import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/destination/:id/:slug",
    name: "destination.show",
    component: () => import("../views/DestinationShowView.vue"),
    props: route => ({ id: parseInt(route.params.id) }),
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'vue-school-active-link'
});

export default router;
