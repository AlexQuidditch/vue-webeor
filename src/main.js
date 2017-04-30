import Vue from 'vue';
import App from './App';
import router from './router';
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
	render: h => h(App)
}).$mount('#wrapper');
