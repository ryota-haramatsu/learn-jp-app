import Vue from "vue";
import VueRouter from "vue-router";

// ページコンポーネント
import TopPage from "./pages/TopPage.vue";
import Register from './pages/Register.vue'
import Login from "./pages/Login.vue";
import FogotPassword from './pages/FogotPassword.vue';
import QuizList from './pages/QuizList.vue';
import SystemError from './pages/errors/System.vue';
 
// これによって<RouterView />コンポーネントなどを使うことができる
Vue.use(VueRouter);
 
 
const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "top",
            component: TopPage
        },
        {
            path: "/register",
            name: "register",
            component: Register
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
        },
        {
            path: '/quiz_list',
            name: 'quiz_list',
            component: QuizList
        },
        {
            path: '/500',
            component: SystemError
        }
    ]
});
 
export default router;