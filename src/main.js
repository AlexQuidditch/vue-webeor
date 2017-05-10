import Vue from 'vue';
import router from './router';
import store from './store';

import App from './App';

import VueResource from 'vue-resource';
import VueScrollTo from 'vue-scrollto';

Vue.use(VueResource);

Vue.use(VueScrollTo);

import data from './data.json';

Vue.http.options.root = data.root

new Vue({
	router , store,
	render: h => h(App)
}).$mount('#wrapper');
