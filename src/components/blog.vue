<template lang="html">
	<div id="main" class="main">
		<section id="blog" class="blog">
			<h2 class="blog__title">{{ title }}</h2>
		</section>
	</div>
</template>

<script>
	export default {
  		name: "blog",
      	data() {
			return {
				title: 'Здесь будет блог!'
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

	.blog {
		height: 100vh;
		&__title {
			font-size: 3rem;
		}
	}

</style>
