import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    requireAuth: true, // 判断是否需要登录
    children: [
      {
        path: "page1",
        name: "page1",
        component: () => import("../views/page1/page1.vue")
      },
      {
        path: "page2",
        name: "page2",
        component: () => import("../views/page2/index")
      },

      {
        path: "/index",
        name: "index",
        component: () => import("../views/index/index.vue")
      }
    ]
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login.vue")
  }
];

const router = new VueRouter({
  mode: "history", //去掉url中的#
  routes
});
router.beforeEach(function(to, from, next) {
  if (!localStorage.getItem("name")) {
    if (to.path !== "/login") {
      return next("/login");
    }
  }
  next();
});
export default router;
