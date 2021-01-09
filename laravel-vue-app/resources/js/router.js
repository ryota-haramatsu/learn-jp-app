import Vue from "vue";
import VueRouter from "vue-router";
 
Vue.use(VueRouter);
 
import Top from "./components/Top.vue";
import Login from "./components/Login.vue";
import FogotPassword from './components/FogotPassword.vue';
 
const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "top",
            component: Top
        },
        {
            path: "/login",
            name: "login",
            component: Login
        },
        {
            path: '/password_reset',
            name: 'forgot_password',
            component: FogotPassword,
        }
    ]
});
 
export default router;