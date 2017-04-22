<template lang="html">
	<transition name="fade" mode="out-in">
		<main id="main" class="main">
			<intro></intro>
			<banner></banner>
			<services></services>
		</main>
	</transition>
</template>

<script>

	import Intro from './main/intro'
	import Services from './main/services'
	import Clients from './main/clients'
	import Advantages from './main/advantages'
	import Contacts from './main/contacts'
	import Banner from './main/banner'

	export default {
		name: 'main',
		components: {
			Intro,
			Services,
			Clients,
			Advantages,
			Contacts,
			Banner
		},
		mounted() {
			Waves.init();
			Waves.attach('[ripple-dark]', ['waves-dark']);
			Waves.attach('[ripple-light]', ['waves-light']);
		}
	}

</script>
