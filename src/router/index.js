import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from"../views/About.vue";
import Services from "../views/Services.vue";
import FrequentlyQuestions from"../views/FrequentlyQuestions.vue";
import DropDown from"../views/DropDown.vue";
import ContactUs from"../views/ContactUs.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path:"/About",
    name:"About",
    component:About
  },
  {
    path:"/Services",
    name:"Services",
    component:Services
  },
  {
    path:"/FrequentlyQuestions",
    name:"FrequentlyQuestions",
    component:FrequentlyQuestions
  },
  {
    path:"/DropDown",
    name:"DropDown",
    component:DropDown
  },
  {
    path:"/ContactUs",
    name:"ContactUs",
    component:ContactUs
  },


];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
