import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'

Vue.use(VueResource);

Vue.http.options.root = 'https://testing-vue.firebaseio.com/'

const app = new Vue({
	el: '#wrapper',
	router,
	template: '<App/>',
	components: {
		App
	}
})
