import { createRouter, createWebHistory } from "vue-router";
import UserDashboard from "../views/UserDashboard.vue";
import UserLogin from "../views/UserLogin.vue";
import UserRegister from "../views/UserRegister.vue";

const routes = [
  { path: "/", component: UserDashboard },
  { path: "/login", component: UserLogin },
  { path: "/register", component: UserRegister }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
