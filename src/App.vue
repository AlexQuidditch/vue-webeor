<template lang="html">
	<div id="wrapper" class="wrapper">
		<div id="particle-js" class="particle-js"></div>
		<s-header></s-header>
		<s-navigation></s-navigation>
		<transition name="fade" mode="out-in" appear>
			<router-view></router-view>
		</transition>
		<s-footer></s-footer>
		<button-up></button-up>
	</div>
</template>

<script>

	import particles from 'particles.js';
	import particlesjsConfig from './components/particlesjs-config.json';

	import sHeader from './components/header';
	import sNavigation from './components/navigation';
	import sFooter from './components/footer';
	import buttonUp from './components/button-up';

	export default {
		name: 'app',
		components: {
			sHeader,
			sNavigation,
			sFooter,
			buttonUp
		},
		mounted() {
		  	this.$nextTick(() => {
		    	this.initParticleJS()
	    	})
		},
		methods: {
		  	initParticleJS () {
	    		particlesJS( 'particle-js' , particlesjsConfig );
			}
		}
	}

</script>

<style lang="scss">

	@import 'scss/partials/_layout';
	@import 'scss/partials/_mixins';
	@import 'scss/partials/_variables';
	@import 'scss/layout/resets';

	html , body {
		size: 100%;
	}

	.wrapper {
		position: relative;
		color: $blacked;
	    @include font-smoothing;
	}

	.main {
		padding: 40px 0;
		@include MQ(Pp) {
			padding-top: 60px;
		}
	}

	.particle-js {
		z-index: -1;
		position: absolute 0 auto auto 0;
		size: 100% $headerHeight;
		background: $black
	}

	.container {
		size: $containersWidth 100%;
		margin: 0 auto;
		@include MQ(Pp) {
			width: 90%
		}
		&._flex-row {
			display: flex;
			flex-flow: row wrap;
			@include MQ(Pp) {
				flex-flow: column wrap;
			}
		}
		&._flex-column {
			display: flex;
			flex-flow: column wrap;
		}
		&._flex-row,
		&._flex-column {
			&._j-start {
				justify-content: flex-start;
			}
			&._j-center {
				justify-content: center;
			}
			&._j-end {
				justify-content: flex-end;
			}
			&._j-around {
				justify-content: space-around;
			}
			&._j-between {
				justify-content: space-between;
			}
			&._a-start {
				align-items: flex-start;
			}
			&._a-center {
				align-items: center;
			}
			&._a-end {
				align-items: flex-end;
			}
		}
	}

	@include waves-light( $whited, $ripple-opacity);
	@include waves-dark( $bluish-purple, $ripple-opacity);

	.fade-enter-active,
	.fade-leave-active {
	    transition: opacity 0.5s;
	}
	.fade-enter,
	.fade-leave-to {
    	opacity: 0;
	}

	.slide-up-enter {
		opacity: 0;
		transform: translateY(50px);
	}
	.slide-up-enter-to {
		opacity: 1;
		transform: translateY(0);
	}

	.slide-up-enter,
	.slide-up-enter-to {
		transition: transform 1.5s, opacity 1.5s;
	}

	.fade-slow-enter-active,
	.fade-slow-leave-active {
	    transition: opacity 1.5s ease-in-out;
	}
	.fade-slow-enter,
	.fade-slow-leave-to {
    	opacity: 0;
	}

</style>
