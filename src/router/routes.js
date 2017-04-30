import Main from 'components/main';
import Portfolio from 'components/portfolio';
import Blog from 'components/blog'
import About from 'components/about';
import Contacts from 'components/contact-me';

export default [
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
];
