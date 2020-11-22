import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/views/login";
import Layout from "@/views/layout";
import Home from "@/views/home";
import Cars from "@/views/cars";
import Colleges from "@/views/colleges";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "",
        name: "Home",
        component: Home
      },
      {
        path: "/cars",
        name: "Cars",
        component: Cars
      },
      {
        path: "/colleges",
        name: "Colleges",
        component: Colleges
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

// 导航守卫
const token = window.localStorage.getItem("token");

router.beforeEach((to, from, next) => {
  // 未登录
  console.log("to",to,token);
  if (to.name !== "Login" && !token) {
    next({ name: "Login" });
  } else {
    next();
  }
});

export default router;
