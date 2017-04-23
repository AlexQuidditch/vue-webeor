<template lang="html">
	<section id="Intro" class="intro">
		<div class="container _flex-row _j-between _a-start">
			<div class="intro-content">
				<span class="intro-content__pre">--- {{ Info.pre }}</span>
				<h2 class="intro-content__title" v-html="Info.title"></h2>
				<p class="intro-content__description">{{ Info.description }}</p>
				<button class="intro-content__button" type="button" ripple-dark>{{ Info.button }}</button>
			</div>
			<img :src="img" :alt="alt"
				class="intro-image">
		</div>
		<div class="intro-bottom">
			<button class="intro-bottom__scroller" ripple-dark >
				<scroll-icon class="intro-bottom__scroller-icon"></scroll-icon>
			</button>
		</div>
	</section>
</template>

<script>

	import ScrollIcon from 'components/partials/icons/arrow-scroll';

	export default {
		name: "intro",
		components: {
			ScrollIcon
		},
		data() {
			return {
				Info: {
					pre: 'Что тут происходит?',
					title: 'У Вас есть проблемы.<br />Веб-проблемы.',
					description: 'Думаете, у Вас их нет? Ха! Свяжитесь со мной, мы вместе найдём и решим их.',
					button: 'GET STARTED'
				},
				img: '../../../static/assets/img/adaptive.jpg',
				alt: ''
			}
		},
		methods: {},
		mounted() {}
	}

</script>

<style lang="scss">

	@import '../../scss/partials/_layout';
	@import '../../scss/partials/_mixins';
	@import '../../scss/partials/_variables';

	.intro {
		height: 85vh;
		padding: 40px 0;
	}

	.intro-image {
		width: 555px;
		margin-top: 80px;
	}

	.intro-content {
		width: 425px;
		&__pre {
			margin: 0;
			color: $cool-grey;
			font-size: 14px;
			font-weight: bold;
			line-height: 2.29;
			letter-spacing: 0.7px;
		}
		&__title {
			margin: 0;
			margin-top: 24px;
			color: $dusk;
			font-size: 60px;
			font-weight: 500;
			line-height: 1.2;
			letter-spacing: -2.4px;
		}
		&__description {
			margin: 0;
			margin-top: 40px;
			color: $cool-grey;
			font-size: 16px;
			line-height: 1.75
		}
		&__button {
			size: 190px 50px;
			margin-top: 35px;
			color: #c2c9db $whited;
			font-size: 12px;
			font-weight: bold;
			letter-spacing: 0.6px;
			border: solid 1px $light-blue-grey;
			border-radius: 25px;
			outline: none;
			@include MDShadow-2($cloudy-blue);
			transition:	box-shadow .3s ease-in-out;
			&:focus {
				@include MDShadow-3($cloudy-blue);
			}
		}
	}

	.intro-bottom {
		position: relative;
		width: $containersWidth;
		margin: 0 auto;
    	bottom: 5vh;
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

</style>
