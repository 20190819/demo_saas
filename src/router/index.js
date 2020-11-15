import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/views/login";
import Layout from "@/views/layout";
import Home from "@/views/home";
import Article from "@/views/article";

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
        path: "/article",
        name: "Article",
        component: Article
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

// 导航守卫
const user = JSON.parse(window.localStorage.getItem("user"));

// router.beforeEach((to, from, next) => {
//   // 未登录
//   if (to.name !== "Login" && !user) {
//     next({ name: "Login" });
//   } else {
//     next();
//   }
// });

export default router;
