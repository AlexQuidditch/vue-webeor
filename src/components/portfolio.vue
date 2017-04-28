<template lang="html">
	<div id="main" class="main">
		<section id="portfolio" class="portfolio">
			<h2 class="portfolio__title">{{ title }}</h2>
			<div class="container _flex-row _j-center ">
				<ul class="portfolio-list">
					<li class="portfolio-list__item"></li>
				</ul>
			</div>
		</section>
	</div>
</template>

<script>
	export default {
  		name: "portfolio",
      	data() {
			return {
				title: 'Портфолио!'
			}
      	},
		mounted() {
			Waves.init();
			Waves.attach('[ripple-dark]', ['waves-dark']);
			Waves.attach('[ripple-light]', ['waves-light']);
		}
	}
</script>

<style lang="scss">

	@import '../scss/partials/_layout';
	@import '../scss/partials/_mixins';
	@import '../scss/partials/_variables';

	.portfolio {
		height: 100vh;;
		&__title {
			text-align: center;
			font-size: 3rem;
		}
	}

	.portfolio-list {
		margin-top: 48px;
		&__item {
			size: 300px 400px;
			@include MDShadow-5($red);
		}
	}

</style>
