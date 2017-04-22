<template lang="html">
	<section id="Clients" class="clients"></section>
</template>

<script>

	import arrowIconSvg from '../partials/icons/arrowIcon'
	import githubIconSvg from '../partials/icons/githubIcon'

	export default {
		name: "Clients",
		components: {
			arrowIconSvg,
			githubIconSvg
		},
		data() {
			return {
				headline: 'Кейсы:',
				otherHeadline: 'Другие работы:',
				linkAll: '/какой-то-линк',
				githubProfile: '//github.com/AlexQuidditch',
				titleMsg: 'Откроется в новой вкладке',
				Clients: [
					{
						headline: 'Сайт суши-кафе "Сушилка" ',
						Before: [
							'Сайт, созданный по устаревшим технологиям',
							'Не адаптивный',
							'Без возможности оформления заказа.'
						],
						After: [
							'Сайт с использованием современных технологий',
							'Адаптивный для всех основных видов устройств',
							'С приятным дизайном',
							'И возможностью оформления заказа.'
						],
						picture: '../../../static/assets/img/sushilka-screen.jpg',
						alt: 'какой-то альт',
						link: '//суши-ачинск.рф'
					},
					{
						headline: 'Сайт компании "Комфорт" ',
						Before: [
							'Сайт низкого качества, созданный на конструкторе',
							'Низкая скорость загрузки и работы в целом',
							'Отсутствие HTTPS',
							'Неудобство навигации'
						],
						After: [
							'Качественный сайт, созданный с нуля',
							'Высокая скорость загрузки',
							'Наличие HTTPS',
							'Удобство навигации',
							'Приятный дизайн'
						],
						picture: '../../../static/assets/img/komfort124-screen.jpg',
						alt: 'какой-то альт',
						link: '//komfort124.ru'
					}
				],
				Others: [
					{
						headline: 'ProTomsk.ru',
						description: 'Вёрстка и оформление административной части, CMS',
						link: '//github.com/AlexQuidditch/protomsk_Admin-frontend'
						},
						{
						headline: 'Taiga70.com',
						description: 'Вёрстка и настройка логики клиентской части',
						link: '//github.com/AlexQuidditch/TaigaSite'
					}
				]
			}
		}
	}

</script>

<style lang="scss">

	@import '../../scss/partials/_layout';
	@import '../../scss/partials/_mixins';
	@import '../../scss/partials/_variables';

	.clients {}

</style>
