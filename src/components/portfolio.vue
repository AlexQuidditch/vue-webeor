<template lang="html">
	<main id="main" class="main">
		<section id="portfolio" class="portfolio">
			<h2 class="portfolio__title">{{ title }}</h2>
			<div class="container">
				<ul class="portfolio-list">
					<portfolio-item v-for = "portfolioItem in Portfolio" :key="portfolioItem.link"
						:title = "portfolioItem.title"
						:picture = "portfolioItem.picture"
						:description = "portfolioItem.description"
						:link = "portfolioItem.link"
						:repository = "portfolioItem.repository"
					></portfolio-item>
				</ul>
			</div>
		</section>
	</main>
</template>

<script>

	import portfolioItem from './portfolio/portfolio-item';

	export default {
  		name: "portfolio",
		components: { portfolioItem	},
      	data() {
			return {
				title: 'Моё портфолио:',
				Portfolio: [
					{
						title: 'Сушилка',
						picture: '../../static/assets/img/sushilka-screen.jpg',
						description: 'Сайт доставки магазина японской кухни "Сушилка". ',
						link: '//суши-ачинск.рф',
						repository: '//github.com/AlexQuidditch/vue-sushilkasite'
					},
					{
						title: 'Тайга-Медиа',
						picture: '../../static/assets/img/taiga-screen.jpg',
						description: 'Сайт рекламного агентства в г. Томске',
						link: '//taiga70.com',
						repository: '//github.com/AlexQuidditch/gulp-taiga'
					},
					{
						title: 'Комфорт 124',
						picture: '../../static/assets/img/komfort124-screen.jpg',
						description: 'Сайт поставщика отопительного оборудования',
						link: '',
						repository: '//github.com/AlexQuidditch/komfortSite'
					},
					{
						title: 'WebeOR',
						picture: '../../static/assets/img/webeor-screen.jpg',
						description: 'Репозиторий этого сайта',
						link: '',
						repository: '//github.com/AlexQuidditch/vue-webeor'
					}
				]
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
