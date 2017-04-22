<template lang="html">
	<div id="card" class="card">
		<component :is="img" class="card__icon"></component>
		<h6 class="card__title">{{ title }}</h6>
		<span class="card__price">от <span>{{ price }}</span> р.</span>
		<p class="card__description">{{ description }}</p>
		<button class="card__button" type="button" ripple-dark >Выбрать</button>
	</div>
</template>

<script>

	import rocketIconSimple from '../../components/partials/icons/rocket-icon-simple';
	import rocketIconMedium from '../../components/partials/icons/rocket-icon';
	import rocketIconAdvanced from '../../components/partials/icons/rocket-icon-advanced';

	export default {
  		name: "card",
		props: [ 'title' , 'img' , 'price' , 'description' ],
		components: {
			rocketIconSimple , rocketIconMedium , rocketIconAdvanced
		}
	}
</script>

<style lang="scss">

	@import '../../scss/partials/_layout';
	@import '../../scss/partials/_mixins';
	@import '../../scss/partials/_variables';

	.card {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 350px;
		padding: 25px;
		border-radius: 30px;
		background-color: $whited;
		border: solid 1px $light-blue-grey;
		cursor: pointer;
		@include MDShadow-2($cloudy-blue);
		transition:
			box-shadow .3s ease-in-out,
			border-color .3s ease-in-out;
		&:hover {
			border: solid 1px $whited;
			@include MDShadow-3($dusk);
		}
		&__icon {
			height: 125px;
		}
		&__title {
			margin: 0;
			margin-top: 22px;
			text-align: center;
			color: $cool-grey;
			font-size: 1.1rem;
			font-weight: bold;
			letter-spacing: 0.7px;
		}
		&__price {
			margin: 0;
			margin-top: 18px;
			text-align: center;
			color: $dusk;
			font-size: 2rem;
			font-weight: 500;
			span {
				font-size: 60px;
				letter-spacing: -2.4px;
			}
		}
		&__description {
			margin: 0;
			margin-top: 24px;
			text-align: center;
			color: $cool-grey;
			font-size: 16px;
 			line-height: 1.75;
		}
		&__button {
			size: 190px 50px;
			margin: 0;
			margin-top: 35px;
			color: #c2c9db $whited;
			font-size: 14px;
			font-weight: bold;
			letter-spacing: 0.6px;
			border: solid 1px $light-blue-grey;
			border-radius: 25px;
			outline: none;
			@include MDShadow-2($cloudy-blue);
			transition:	box-shadow .3s ease-in-out;
			&:focus {
				@include MDShadow-3($cloudy-blue);
			}
		}
	}

</style>
