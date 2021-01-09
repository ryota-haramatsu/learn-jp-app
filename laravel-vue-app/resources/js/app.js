import Vue from 'vue';
import Vuetify from 'vuetify';
import "vuetify/dist/vuetify.min.css"; 
import router from './router';
import Top from './components/Top.vue';

Vue.use(Vuetify);
// Vue.component('top-component', require('./components/Top.vue').default);

new Vue({
    el: '#app',
    vuetify: new Vuetify({}),
    router: router,
    components: { Top },
    template: '<Top />'
});