<template lang="html">
	<section id="Banner" class="banner">
		<h2 class="banner__title">{{ title }}</h2>
		<h3 class="banner__subtitle">{{ subTitle }}</h3>
	</section>
</template>

<script>

	export default {
		name: "Banner",
		data() {
			return {
				title: `Вам тоже нужен сайт в космосе?`,
				subTitle: 'Выбирайте свой уровень полёта!'
			}
		}
	}

</script>

<style lang="scss">

	@import '../../scss/partials/_layout';
	@import '../../scss/partials/_mixins';
	@import '../../scss/partials/_variables';

	.banner {
    	width: 100%;
		padding: 40px 0;
		&__title {
			text-align: center;
			font-size: 3rem;
			margin: 0;
		}
		&__subtitle {
			text-align: center;
			font-size: 2.5rem;
			margin: 0;
		}
	}

</style>
