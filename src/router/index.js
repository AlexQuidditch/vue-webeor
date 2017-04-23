import Vue from 'vue';
import Router from 'vue-router';
import Main from 'components/main';
import Portfolio from 'components/portfolio';
import Blog from 'components/blog'
import About from 'components/about';
import Contacts from 'components/contact-me';

Vue.use(Router);

const scrollBehavior = (to, from, savedPosition) => {
	if (savedPosition) {
    	return savedPosition
	} else {
		return { x: 0, y: 0 }
	};
	if (to.hash) {
		return {
			selector: to.hash
		}
	}
};

export default new Router({
	mode: 'history',
	linkActiveClass: '_active',
	scrollBehavior,
	routes: [
		{
			path: '/',
			name: 'main',
			redirect: {
				name: 'about'
			}
		},
		{
			path: '/portfolio',
			name: 'portfolio',
			component: Portfolio
		},
		{
			path: '/blog',
			name: 'blog',
			component: Blog
		},
		{
			path: '/about',
			name: 'about',
			component: About
		},
		{
			path: '/contact-me',
			name: 'contact-me',
			component: Contacts
		}
	]
});
