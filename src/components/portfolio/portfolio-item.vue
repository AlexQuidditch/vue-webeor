<template lang="html">
	<li class="portfolio-item">
		<h6 class="portfolio-item__title">{{ title }}</h6>
		<img :src="picture" :alt="title" class="portfolio-item__picture" />
		<p class="portfolio-item__description">{{ description }}</p>
		<a :href="link"
			:title="linkTitle"
			 v-if="link.length > 0"
			class="portfolio-item__link"
			target="_blank"
			ripple-light
			>Открыть сайт</a>
			<a :href="repository" target="_blank" class="portfolio-item__repository">
				<github-icon class="portfolio-item__icon"></github-icon>
			</a>
	</li>
</template>

<script>

	import githubIcon from '../partials/icons/githubIcon';

	export default {
  		name: "portfolio-item",
		components: { githubIcon },
		props: [ 'title' , 'picture' , 'description' , 'link' , 'repository' ],
      	data() {
			return { linkTitle: 'Откроется в новой вкладке' }
      	}
	}
</script>

<style lang="scss">

	@import "../../scss/partials/_layout";
	@import "../../scss/partials/_mixins";
	@import "../../scss/partials/_variables";

	.portfolio-item {
		position: relative;
		size: 30% auto;
		margin-bottom: 1rem;
		padding-bottom: 14px;
		cursor: default;
		@include MDShadow-2($blacked);
		@include MQ(Pp) {
			width: 100%;
		}
		&__title {
			font-size: 1.5rem;
			padding: 0.5rem 1rem;
		}
		&__picture {
			width: 100%;
		}
		&__description {
			font-size: 1rem;
			line-height: 1.5;
			padding: 1rem;
			padding-bottom: 0.5rem;
		}
		&__link {
			display: inline-block;
			margin-left: 1rem;
			padding: 12px 22px;
			color: $whited $red;
			border: none;
			transition:
				box-shadow .3s ease-in-out,
				color .3s ease-in-out,
				background-color .3s ease-in-out;
			&:hover {
				@include MDShadow-2($red);
			}
			@include MQ(Pp) {
				margin-right: 0;
			}
		}
		&__repository {
			position: absolute;
			bottom: 18px;
			right: 1rem;
			size: 42px;
		}
		&__icon {
			size: 42px;
		}
	}

</style>
