import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/template/homepage.vue";
import SignUp from "../views/template/signup.vue";
import Login from "../views/template/login.vue";

import HomeView from "../views/vue_template/HomeView.vue";
import AboutView from "../views/vue_template/AboutView.vue";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/signup",
    component: SignUp,
  },
  {
    path: "/login",
    component: Login,
  },

  {
    path: "/vue/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/vue/about",
    name: "about",
    component: AboutView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
