import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import sourceData from "@/data.json"

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
    props: route => ({...route.params, id: parseInt(route.params.id) }),
    beforeEnter(to, from){
      const exists =  sourceData.destinations.find(
        destination => destination.id === parseInt(to.params.id)
      )
      if (!exists) return { 
        name: 'NotFound',
        params: { pathMatch: to.path.split('/').slice(1)},
        query: to.query,
        hash: to.hash,
      }
    },
    children: [
      {
        path: ":experienceSlug",
        name: "experience.show",
        component: () => import("../views/ExperienceShowView.vue"),
        props: route => ({...route.params, id: parseInt(route.params.id)}),
      },
    ]
  }, 
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: ()=> import('@/views/NotFoundView.vue'),
  } 
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'vue-school-active-link'
});

export default router;
