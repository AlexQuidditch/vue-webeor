<template lang="html">
	<nav id="navigation" class="navigation">
		<div class="container _flex-row _j-between">
			<router-link class="navigation-logo" to="/">
				<Logo class="navigation-logo"></Logo>
			</router-link>
			<nav class="navigation-list">
	  	   		<router-link v-for="navigationItem in Navigation" :key="navigationItem.key"
					:to="{ name: navigationItem.route }"
					exact
					:class = "{ 'waves-effect waves-light' : navigationItem.last }"
					class="navigation-list__item"
					>{{ navigationItem.name }}</router-link>
	  	   	</nav>
		</div>
	</nav>
</template>

<script>

	import Logo from '../components/partials/icons/logo-svg.vue';

	export default {
  		name: "navigation",
		components: {
			Logo
		},
      	data() {
			return {
				Navigation: [
					{
						route: 'about',
						name: 'Обо мне'
					},
					{
						route: 'portfolio',
						name: 'Портфолио'
					},
					{
						route: 'blog',
						name: 'Блог (в разработке)'
					},
					{
						route: 'contact-me',
						name: 'Связаться',
						last: true
					}
				]
			}
      	}
	}
</script>

<style lang="scss">

	@import '../scss/partials/_layout';
	@import '../scss/partials/_mixins';
	@import '../scss/partials/_variables';

	.navigation {
		z-index: 100;
		position: sticky;
		top: 0;
		padding: 15px 0;
		background-color: $whited
	}

	.navigation-logo {
		height: 48px;
	}

	.navigation-list {
		display: flex;
		&__item {
			padding: 14px 16px;
			margin: 0 .5rem;
			color: $red;
			text-align: center;
			font-size: 1rem;
			font-weight: bold;
			border-bottom: solid 2px transparent;
			cursor: pointer;
			transition:
				box-shadow .3s ease-in-out,
				border-color .3s ease-in-out;
			&._active,
			&:hover {
				border-color: $red;
			}
			&:last-child {
				width: 150px;
				padding: 14px;
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
	}

</style>
