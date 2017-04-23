<template lang="html">
	<main id="main" class="main">
		<section id="about" class="about">
			<div class="container _flex-column">
				<h2 class="about__title">{{ title }}</h2>
				<p class="about__text" v-html="aboutMe" ></p>
				<div class="container _flex-row">
					<router-link
						v-for = "linkItem in Links" :key="linkItem.key"
						:to = "{ name: linkItem.route }"
						tag = "button"
						class = "about__button"
						ripple-light
						>{{ linkItem.name }}</router-link>
				</div>
			</div>
		</section>
	</main>
</template>

<script>
	export default {
  		name: "about",
      	data() {
			return {
				title: 'Привет!\nМеня зовут Забайкальский Алексей,\nмне 23 года.',
				aboutMe:
					`Я full-stack разработчик с уклоном во front-end. Разрабатываю веб-приложения с нуля.<br />
					Приоритетной задачей является решение бизнес-проблем заказчика.<br />
					С точки зрения разработки ставлю перед собой следующие задачи:<br />
					<ul>
						<li>- Построение оптимального UI;</li>
						<li>- Оптимизация времени загрузки приложения;</li>
						<li>- Написание понятного поддерживаемого кода;</li>
						<li>- Обеспечение возможности быстрого масштабирования;</li>
						<li>- и другие...</li>
					</ul>
					<br />
					Не использую CMS в работе, но имею некоторое знакомство с MODx. <br />
					Eсть опыт разработки проектов с нуля, как статических, так и SPA. <br />
					<br />
					<h3>Технологии:</h3>
					Frontend: <br />
					<ul>
						<li>- JavaScript (ECMAScript 2015)</li>
						<li>- Базовые знания TypeScript</li>
						<li>- HTML</li>
						<li>- SASS / SCSS + PostCSS (БЭМ)</li>
						<li>- SVG</li>
						<li>- Экосистема Vue.js, VanillaJS, JQuery, HanblebarsJS</li>
						<li>- Gulp, Webpack</li>
						<li>- Yarn, NPM, Bower</li>
					</ul>
					Backend:
					<ul>
						<li>- Node.js</li>
						<li>- Firebase</li>
					</ul>
					Дополнительно:
					<ul>
						<li>- Git, GitHub</li>
						<li>- Zeplin - работа с макетами</li>
					</ul>
					Есть опыт написания простых ботов для Telegram на Node.js`,
				Links: [
					{
						route: 'portfolio',
						name: 'Мои работы'
					},
					{
						route: 'contact-me',
						name: 'Связаться со мной'
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

	.about {
		&__title {
			font-size: 3rem;
			line-height: 1.5;
			text-align: center;
			white-space: pre;
		}
		&__text {
			font-size: 1.5rem;
			line-height: 2;
		}
		&__button {
			padding: 14px 28px;
			color: $whited $red;
			border-radius: 25px;
			border: none;
			transition:
				box-shadow .3s ease-in-out,
				color .3s ease-in-out,
				background-color .3s ease-in-out;
			&._active,
			&:hover {
				@include MDShadow-2($red);
			}
		}
	}

</style>
