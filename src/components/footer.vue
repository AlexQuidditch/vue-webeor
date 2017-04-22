<template lang="html">
	<footer id="Footer" class="footer">
		<div class="container _flex-row _j-between _a-center">
			<span class="footer-text">{{ firstText }}</span>
			<a href="https://ru.vuejs.org/" target="_blank">
				<vue-icon class="footer-icon"></vue-icon>
			</a>
			<span class="footer-text">{{ secondText }}</span>
			<a href="https://www.w3.org/TR/html5/" target="_blank">
				<html5-icon class="footer-icon"></html5-icon>
			</a>
			<a href="https://sass-scss.ru/" target="_blank">
				<sass-icon class="footer-icon"></sass-icon>
			</a>
			<a href="https://www.javascript.com/" target="_blank">
				<javascript-icon class="footer-icon"></javascript-icon>
			</a>
			<a href="https://nodejs.org" target="_blank">
				<nodejs-icon class="footer-icon"></nodejs-icon>
			</a>
			<a href="https://firebase.google.com" target="_blank">
				<firebase-icon class="footer-icon"></firebase-icon>
			</a>
			<a href="https://atom.io" target="_blank">
				<atom-icon class="footer-icon"></atom-icon>
			</a>
			<span class="footer-text">{{ thirdText }}</span>
			<a href="https://github.com/AlexQuidditch/vue-webeor" target="_blank">
				<git-icon class="footer-icon"></git-icon>
			</a>
		</div>
	</footer>
</template>

<script>

	import VueIcon from './partials/icons/vuejsIcon';
	import SassIcon from './partials/icons/sassIcon';
	import Html5Icon from './partials/icons/html5Icon';
	import JavascriptIcon from './partials/icons/javascriptIcon';
	import NodejsIcon from './partials/icons/nodejsIcon';
	import FirebaseIcon from './partials/icons/firebaseIcon';
	import AtomIcon from './partials/icons/atomIcon';
	import GitIcon from './partials/icons/githubIcon';

	export default {
		name: "sFooter",
		components: {
			VueIcon , SassIcon , Html5Icon , JavascriptIcon , NodejsIcon , FirebaseIcon , AtomIcon , GitIcon
		},
		data() {
			return {
				firstText: 'Сделано с любовью на ',
				secondText: ' и вот этом всём -->',
				thirdText: 'и, конечно же, лежит здесь: '
			}
		}
	}
</script>

<style lang="scss">

	@import '../scss/partials/_layout';
	@import '../scss/partials/_mixins';
	@import '../scss/partials/_variables';

	.footer {
		height: 150px;
		background-color: $black
	}
	.footer-text {
		color: $whited;
	}
	.footer-icon {
		overflow: visible;
		height: 50px;
		margin: 0 .5rem;
	}

</style>
