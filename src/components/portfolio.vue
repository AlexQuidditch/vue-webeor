<template lang="html">
	<div id="main" class="main">
		<section id="portfolio" class="portfolio">
			<div class="container _flex-column _j-center _a-center">
				<h2 class="portfolio__title">{{ title }}</h2>
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
		height: 100vh;
		&__title {
			font-size: 3rem;
		}
	}

</style>
