<template lang="html">
	<div id="main" class="main">
		<section id="contact-me" class="contact-me">
			<h2 class="contact-me__title">{{ title }}</h2>
		</section>
	</div>
</template>

<script>
	export default {
  		name: "contact-me",
      	data() {
			return {
				title: 'Связаться со мной можно вот так:'
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

	.contact-me {
		height: 100vh;
		&__title {
			font-size: 3rem;
		}
	}

</style>
