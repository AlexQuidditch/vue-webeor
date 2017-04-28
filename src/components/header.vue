	<template lang="html">
	<header id="Header" class="header">
		<transition name="fade-slow" appear>
			<div class="container _flex-column _j-center _a-start">
				<Logo class="header__logo"></Logo>
				<h1 class="header__title">{{ title }}</h1>
			</div>
		</transition>
		<div :class = "{ '_visible' : scroller }" class="header-bottom">
			<span class="header-bottom__text">{{ bottomText }}</span>
			<scroll-icon class="header-bottom__icon"></scroll-icon>
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
				title: 'Запускаю сайты в космос!',
				bottomText: 'Ну почти... :) Листайте вниз...',
				scroller: false
			}
		},
		methods: {
			toggleScroller() {
				this.scroller =! this.scroller;
			}
		},
		mounted() {
			setTimeout( this.toggleScroller , 3000 );
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
		&__logo {
			height: $headerHeight * 0.2;
		}
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
			line-height: 64px
		}
		&__icon {
			overflow: visible;
			position: absolute;
			@include center(x);
			width: 48px;
			margin: 20px auto auto;
			.arrow-scroll {
				overflow: visible;
				fill: $red;
			}
		}
	}

	@keyframes up-down {
		0% {
			transform: translateY( 50% );
		}
		100% {
			transform: translateY( 0%);
		}
	}

</style>
