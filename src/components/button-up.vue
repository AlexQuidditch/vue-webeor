<template lang="html">
	<button	v-scroll-to = "{ el: '#main' , offset: -78, duration: 950 }"
		id="button-up" class="button-up" ripple-light>
		<svg class="button-up__icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
		    <path d="M0 0h24v24H0V0z" fill="none"/>
		    <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/>
		</svg>
	</button>
</template>

<script>
	export default {
  		name: "button-up",
      	data() {
			return { isVisible: false }
      	},
		mounted() {
			window.onscroll = () => {
				let buttonUp = document.getElementById('button-up');
				let scrolled = window.pageYOffset || document.documentElement.scrollTop;
				if (scrolled > 1200) {
					buttonUp.classList.add('_visible')
				} else {
					buttonUp.classList.remove('_visible')
				}
			}
		}
	}
</script>

<style lang="scss">

	@import "../scss/partials/_layout";
	@import "../scss/partials/_mixins";
	@import "../scss/partials/_variables";

	.button-up {
		$size: 75px;
		@include MDButton( $whited , $red ) {
			z-index: 900;
			position: fixed auto 0 0 auto;
			size: $size;
			margin: 2vh;
			border-radius: $size / 2;
			outline: none;
			transform: translateX( calc(100% + 3vh) ) rotate(230deg);
			@include MQ(Pp) {
				size: $size * .9
			}
		}
		padding: 0;
		@include MDShadow-3($red);
		transition: .5s ease-in-out;
		&:active {
			@include MDShadow-4($red);
		}
		&._visible {
			transform: translateX(0) rotate(0deg);
		}
		&__icon {
			size: $size / 1.25;
			fill: $whited
		}
	}

</style>
