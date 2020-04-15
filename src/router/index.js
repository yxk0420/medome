import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    requireAuth: true // 判断是否需要登录
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login.vue")
  },
  {
    path:"/page",
    name:"page",
    component:() =>import ("../components/page")
  },

];

const router = new VueRouter({
  routes
});
router.beforeEach(function(to, from, next) {
  if (!localStorage.getItem("name")) {
    console.log("name");
    if (to.path !== "/login") {
      return next("/login");
    }
  } else {
    console.log("no");
  }
  next();
});
export default router;
