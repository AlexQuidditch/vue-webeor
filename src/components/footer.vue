<template lang="html">
	<footer id="Footer" class="footer">
		<div class="container _flex-row _j-end _a-center">
			<span class="footer-text">{{ firstText }}</span>
			<a href="https://ru.vuejs.org/" target="_blank">
				<vue-icon class="footer-icon"></vue-icon>
			</a>
		</div>
	</footer>
</template>

<script>

	import VueIcon from './partials/icons/vuejsIcon';

	export default {
		name: "sFooter",
		components: { VueIcon },
		data() {
			return {
				firstText: 'Poweped by ',
			}
		}
	}
</script>

<style lang="scss">

	@import '../scss/partials/_layout';
	@import '../scss/partials/_mixins';
	@import '../scss/partials/_variables';

	$footerHeight: 100px;

	.footer {
		height: $footerHeight;
		padding: .5rem;
		background-color: $black;
		@include MQ(Pp) {
			height: auto;
		}
	}
	.footer-text {
		color: $whited;
	}
	.footer-icon {
		overflow: visible;
		height: $footerHeight / 2;
		margin: .5rem;
	}

</style>
