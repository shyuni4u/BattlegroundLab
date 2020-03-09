import Vue from "vue";
import VueRouter from "vue-router";
//import NProgress from 'vue-nprogress'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => 
      import("../views/Home.vue")
  },
  {
    path: "/notice",
    name: "notice",
    component: () =>
      import("../views/Notice.vue")
  },
  {
    path: "/creator",
    name: "creator",
    component: () =>
      import("../views/Creator.vue")
  },
  {
    path: "/uploader",
    name: "uploader",
    component: () =>
      import("../views/Uploader.vue")
  },
  {
    path: "/upload",
    name: "upload",
    component: () =>
      import("../views/Upload.vue")
  }
  /*
  {
    path: "/study",
    name: "study",
    component: () =>
      import("../views/Study.vue")
  },
  {
    path: "/etc",
    name: "etc",
    component: () =>
      import("../views/Etc.vue")
  },
  {
    path: "/github",
    name: "github",
    component: () =>
      import("../views/Github.vue")
  }
  */
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes
});
/*
router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  if (to.name) {
      // Start the route progress bar.
      NProgress.start()
  }
  next()
})

router.afterEach((to, from) => {
  // Complete the animation of the route progress bar.
  NProgress.done()
})
*/

export default router;
