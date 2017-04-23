<template lang="html">
	<div id="wrapper" class="wrapper">
		<div id="particle-js" class="particle-js"></div>
		<s-header></s-header>
		<s-navigation></s-navigation>
		<transition name="fade" mode="out-in" appear>
			<router-view></router-view>
		</transition>
		<s-footer></s-footer>
	</div>
</template>

<script>

	import particles from 'particles.js';
	import particlesjsConfig from './components/particlesjs-config.json';

	import sHeader from './components/header';
	import sNavigation from './components/navigation';
	import sFooter from './components/footer';

	export default {
		name: 'app',
		components: {
			sHeader,
			sNavigation,
			sFooter
		},
		mounted () {
		  	this.$nextTick(() => {
		    	// this.initParticleJS()
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
		overflow-x: hidden;
		size: 100%;
	}

	.wrapper {
		position: relative;
		color: $blacked;
	    @include font-smoothing;
	}

	.main {
		padding: 40px 0;
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
		&._flex-row {
			display: flex;
			flex-flow: row wrap;
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

	.fade-slow-enter-active,
	.fade-slow-leave-active {
	    transition: opacity 1.5s ease-in-out;
	}
	.fade-slow-enter,
	.fade-slow-leave-to {
    	opacity: 0;
	}

</style>
