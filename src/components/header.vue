	<template lang="html">
	<header id="Header" class="header">
		<transition name="fade-slow" appear>
			<div class="container _flex-column _j-center _a-start">
				<Logo/>
				<h1 class="header__title">{{ title }}</h1>
			</div>
		</transition>
		<div :class = "{ '_visible' : scroller }" class="header-bottom">
			<span class="header-bottom__text">{{ bottomText }}</span>
			<button class="header-bottom__scroller"	ripple-dark >
				<scroll-icon class="header-bottom__scroller-icon"></scroll-icon>
			</button>
		</div>
	</header>
</template>

<script>

	import Logo from 'components/partials/icons/logo-svg';
	import ScrollIcon from 'components/partials/icons/arrow-scroll';

	export default {
		name: 'sHeader',
		components: {
			Logo , ScrollIcon
		},
		data() {
			return {
				title: 'Я запускаю сайты в космос!',
				bottomText: 'Ну почти... :) Листайте вниз --->',
				scroller: false,
				menuItems: [
					{
						name: 'Главная',
						roll: 'main'
					},
					{
						name: 'Услуги',
						roll: 'news'
					},
					{
						name: 'Портфолио',
						roll: 'services'
					},
					{
						name: 'Контакты',
						roll: 'about'
					}
				]
			}
		},
		methods: {
			toggleScroller() {
				this.scroller =! this.scroller;
			}
		},
		mounted() {
			setTimeout( this.toggleScroller , 2500 );
		}
	}
</script>

<style lang="scss">

	@import '../scss/partials/_layout';
	@import '../scss/partials/_mixins';
	@import '../scss/partials/_variables';

	.header {
		z-index: 99;
		position: relative;
		height: $headerHeight;
		background: url('../../static/assets/img/rocket.png') no-repeat center;
		background-size: cover;
		&__title {
			font-size: 4rem;
			color: $red;
		}
		&__subtitle {
			font-size: 3rem;
			color: $red;
		}
	}

	.header-bottom {
		opacity: 0;
		visibility: hidden;
		position: relative;
		width: $containersWidth;
		margin: 0 auto;
    	bottom: 15vh;
		transform: translateY(10px);
		transition:
			opacity .3s ease-in-out,
			visibility .3s ease-in-out,
			transform .6s ease-in-out;
		&._visible {
			opacity: 1;
			visibility: visible;
			transform: translateY(0);
		}
		&__text {
			color: $red;
			font-size: 1.5rem;
			line-height: 64px;
		}
		&__scroller {
			position: absolute;
			@include center(x);
			margin: 0 auto;
			size: 64px;
			background-color: $whited;
			border: none;
			border-radius: 50%;
			outline: none;
			@include MDShadow-2($cloudy-blue);
			transition:	box-shadow .3s ease-in-out;
			&:focus,
			&:hover {
				@include MDShadow-3($cloudy-blue);
			}
		}
		&__scroller-icon {
			width: 32px;
			margin: 5px auto auto;
			.arrow-scroll {
				fill: $red
			}
		}
	}

	#logo-svg {
		height: $headerHeight * 0.25;
	}

</style>
