<template lang="html">
	<main id="main" class="main">
		<section id="portfolio" class="portfolio">
			<transition name="slide-up" mode="out-in">
				<div v-if="!PortfolioIsLoaded" key = "loading" class="loader">
					<div class="loader__spinner _portfolio"></div>
					<h2 class="loader__title">Загружаю портфолио...</h2>
				</div>
				<div v-else class="container">
					<ul class="portfolio-list">
						<portfolio-item v-for = "portfolioItem in Portfolio" :key="portfolioItem.title"
							:title = "portfolioItem.title"
							:picture = "portfolioItem.picture"
							:description = "portfolioItem.description"
							:link = "portfolioItem.link"
							:repository = "portfolioItem.repository"
							>
						</portfolio-item>
					</ul>
				</div>
			</transition>
		</section>
	</main>
</template>

<script>

	import portfolioItem from './portfolio/portfolio-item';

	export default {
  		name: "portfolio",
		components: { portfolioItem	},
		computed: {
			Portfolio() {
				return this.$store.state.Portfolio
			},
			PortfolioIsLoaded() {
				return this.$store.state.PortfolioIsLoaded
			}
		},
		mounted() {
			this.$store.dispatch('getPortfolio' , 'portfolio.json');
		}
	}
</script>

<style lang="scss">

	@import '../scss/partials/_layout';
	@import '../scss/partials/_mixins';
	@import '../scss/partials/_variables';

	.portfolio {
		min-height: 100vh;
		&__title {
			text-align: center;
			font-size: 3rem;
			@include MQ(Pp) {
				font-size: 2.25rem;
			}
		}
	}

	.portfolio-list {
		display: flex;
		flex-flow: row wrap;
		justify-content: space-around;
		align-items: flex-start;
		margin-top: 48px;
		@include MQ(Pp) {
			flex-flow: column wrap;
		}
	}

</style>
