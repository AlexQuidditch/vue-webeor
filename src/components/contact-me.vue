<template lang="html">
	<main id="main" class="main">
		<section id="contact-me" class="contact-me">
			<h2 class="contact-me__title">{{ title }}</h2>
			<ul class="container contacts-list">
				<li v-for="contactsItem in Contacts"
					class="contacts-item">
					<h4 class="contacts-item__title">{{ contactsItem.title }}</h4>
					<a :href="contactsItem.link" class="contacts-item__content">{{ contactsItem.text }}</a>
				</li>
			</ul>
		</section>
	</main>
</template>

<script>
	export default {
  		name: "contact-me",
      	data() {
			return {
				title: 'Связаться со мной можно вот так:',
				Contacts: [
					{
						title: 'Skype',
						link: 'skype:alex_quidditch',
						text: 'Alex_Quidditch'
					},
					{
						title: 'Сотовый',
						link: null,
						text: '+7 (996) 937-84-75'
					},
					{
						title: 'E-mail',
						link: 'mailto:alexquidditch@yandex.ru',
						text: 'AlexQuidditch@yandex.ru'
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
	@import '../scss/partials/_variables';

	.contact-me {
		min-height: 100vh;
		&__title {
			text-align: center;
			font-size: 3rem;
			margin-bottom: 48px;
			@include MQ(Pp) {
				font-size: 2.25rem;
			}
		}
	}

	.contacts-list {
		width: $containersWidth * .8
	}

	.contacts-item {
		&__title {
			font-size: 2.5rem;
			line-height: 2;
		}
		&__content {
			font-size: 1.5em;
			line-height: 1.5;
		}
	}

</style>
