<template lang="html">
	<section id="Services" class="services">
		<div class="container _flex-row _j-around">
			<card v-for="cardItem in Cards" :key="cardItem.key"
				:title = "cardItem.title"
				:img = "cardItem.img"
				:price = "cardItem.price"
				:description = "cardItem.description"
			></card>
		</div>
	</section>
</template>

<script>

	import Card from '../templates/card';

	export default {
		name: "Services",
		components: { Card },
		data() {
			return {
				Cards: [
					{
						title: 'Орбитальный',
						img: 'rocketIconSimple',
						price: '9 900',
						description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates impedit similique vitae beatae quos pariatur facilis nobis ut, assumenda, sunt voluptate numquam blanditiis nulla possimus iusto quae quod eligendi quibusdam.'
					},
					{
						title: 'Межпланетный',
						img: 'rocketIconMedium',
						price: '14 900',
						description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates impedit similique vitae beatae quos pariatur facilis nobis ut, assumenda, sunt voluptate numquam blanditiis nulla possimus iusto quae quod eligendi quibusdam.'
					},
					{
						title: 'Интерстеллар',
						img: 'rocketIconAdvanced',
						price: '24 900',
						description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates impedit similique vitae beatae quos pariatur facilis nobis ut, assumenda, sunt voluptate numquam blanditiis nulla possimus iusto quae quod eligendi quibusdam.'
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

	.services {
		padding: 40px 0;
	}

</style>
