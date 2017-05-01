import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import routes from './routes.js';

const scrollBehavior = (to, from, savedPosition) => {
	if (savedPosition) {
		return savedPosition
	} else {
		const position = {}
		if (to.hash) {
			porousition.selector = to.hash
		}
		if (to.matched.some( m => m.meta.scrollToTop )) {
			position.x = 0
			position.y = 0
		}
		return position
	}
};

export default new Router({
	mode: 'history',
	linkActiveClass: '_active',
	scrollBehavior,
	routes
});
