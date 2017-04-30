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
						v-scroll-to = "{ el: '#main' , offset: -78, duration: 950 }"
						tag = "button"
						class = "about__button"
						ripple-light
						>{{ linkItem.name }}</router-link>
						<a :href="cv.link" target="_blank" class="about__button _cv" ripple-light >{{ cv.name }}</a>
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
					`<br />
					Я front-end разработчик.<br />
					Eсть опыт разработки проектов с нуля, как статических, так и SPA. <br />
					<br />
					<h3>Технологии:</h3>
					Frontend: <br />
					<ul>
						<li>- HTML5</li>
						<li>- SCSS + PostCSS (БЭМ)</li>
						<li>- JavaScript (ECMAScript 2015)</li>
						<li>- Базовые знания TypeScript</li>
						<li>- SVG</li>
						<li>- Экосистема Vue.js, VanillaJS, JQuery, HanblebarsJS</li>
						<li>- Gulp, Webpack</li>
						<li>- Yarn, npm, Bower</li>
					</ul>
					Backend:
					<ul>
						<li>- Node.js</li>
						<li>- Firebase</li>
					</ul>
					Дополнительно:
					<ul>
						<li>- Git, GitHub</li>
						<li>- Adobe Photoshop, Zeplin - работа с макетами</li>
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
				],
				cv: {
					link: '//docs.google.com/document/d/1TGCfkyZMv3AG0VFFrfsMV9G4XdW8GkTbv6MT81lNGtQ/',
					name: 'Скачать резюме'
				}
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
			@include MQ(Pp) {
				font-size: 1.25rem;
			}
		}
		&__text {
			font-size: 1.5rem;
			line-height: 2;
			@include MQ(Pp) {
				font-size: 1.15rem;
			}
		}
		&__button {
			margin-top: 28px;
			margin-right: 28px;
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
			&._cv {
				background-color: $blue
			}
			@include MQ(Pp) {
				margin-right: 0;
			}
		}
	}

</style>
