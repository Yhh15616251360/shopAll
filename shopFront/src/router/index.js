import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login";
import Home from "../views/Home";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  //   路径重定向
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "/home",
    name: "Home",
    component: Home
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
