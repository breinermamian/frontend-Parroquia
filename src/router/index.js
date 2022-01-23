import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
export default new Router({
  mode: "history",
base: process.env.BASE_URL,
  routes:[
    {
      path: "/parroquia",
      name: "parroquia",
      component: () => import("@/components/Servicios/principal.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/Usuario/Login.vue"),
    },
    {
      path: "/",
      name: "login",
      component: () => import("@/views/Usuario/Login.vue"),
    },
    {
      path: "/registrar",
      name: "registrar",
      component: () => import("@/views/Usuario/Registrar.vue"),
    },
    
  ]
})
