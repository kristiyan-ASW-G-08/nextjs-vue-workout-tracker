import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";
import Shows from "@/views/Shows";
import ShowPage from "@/views/ShowPage";
import SignUp from "@/views/SignUp";
import Login from "@/views/Login";
import ReviewForm from "@/views/ReviewForm";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    { path: "/shows/:currentPage", component: Shows },
    { path: "/show/:showId", component: ShowPage },
    { path: "/sign-up", component: SignUp },
    { path: "/login", component: Login },
    { path: "/reviews/:showId", component: ReviewForm }
  ]
});
