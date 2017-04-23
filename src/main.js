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
Vue.use(VueLazyload, {
  preLoad: 1.3,
  attempt: 1
});

Vue.http.options.root = 'https://autosaloon-293cd.firebaseio.com/'

const app = new Vue({
	el: '#wrapper',
	router,
	template: '<App/>',
	components: {
		App
	}
});
