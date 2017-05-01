import Vue from 'vue';
import router from './router';
import store from './store';

import App from './App';

import VueResource from 'vue-resource';
import VueQuillEditor from 'vue-quill-editor';
import VueScrollTo from 'vue-scrollto';
import VueLazyload from 'vue-lazyload'


Vue.use(VueResource);

Vue.use(VueScrollTo);
Vue.use(VueQuillEditor);

import data from './data.json';

Vue.http.options.root = data.root

const webeor = new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#wrapper');
