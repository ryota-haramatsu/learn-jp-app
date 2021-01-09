import Vue from 'vue';
import Vuetify from 'vuetify';
import "vuetify/dist/vuetify.min.css"; 
import router from './router';

Vue.use(Vuetify);
// Vue.component('top-component', require('./components/Top.vue').default);

const app = new Vue({
    el: '#app',
    vuetify: new Vuetify({}),
    router: router
});