import Vue from 'vue';
import Vuetify from 'vuetify';
import "vuetify/dist/vuetify.min.css"; 
import router from './router';
import App from './App.vue';

Vue.use(Vuetify);
// Vue.component('top-component', require('./components/Top.vue').default);

new Vue({
    el: '#app',
    router: router,
    components: { App },
    template: '<App />',
    vuetify: new Vuetify({}),
});