import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Home from "../views/Home.vue";
import Discover from "../views/Discover.vue";
import My from "../views/My.vue"

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Login",
        component: Login,
    },
    {
        path: "/home",
        name: "Home",
        component: Home,
        redirect: "/discover",
        children: [{
            path: "/discover",
            component: Discover
        }, {
            path: "/my",
            component: My
        }]
    },
];

const router = new VueRouter({
    routes,
});

export default router;