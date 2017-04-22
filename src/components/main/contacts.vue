<template lang="html">
	<section id="Contacts" class="contacts"></section>
</template>

<script>
	export default {
		name: "Contacts",
		data() {
			return {
				title: 'Контакты',
				headline: 'Оставьте заявку',
				Contacts: {
					counter: '10',
					message: '',
					value: '3'
				},
				Getted: [],
				successMsg: 'Заявка успешно отправлена!!',
				errorMsg: 'Ой, что-то пошло не так :С',
				sendSuccess: 0,
				sendError: 0,
				placeholder: 'Дополнительная информация...',
				priceHeadline: 'Стоимость:',
				Variants: [
					{
						text: 'Требуется сайт-визитка',
						value: '1'
					},
					{
						text: 'Требуется корпоративный сайт',
						value: '2'
					}
				],
				Prices: [
					{
						pretext: 'Размещение: ',
						value: '11 200 рублей / месяц'
					},
					{
						pretext: 'Производство: ',
						value: 'от 3 000 рублей / ролик'
					}
				]
			}
		},
		methods: {
			post() {
				this.$http.post(`webeor.json`, this.Contacts)
					.then(response => {
						console.log(response);
						this.sendSuccess = !0;
						this.sendError = 0
					}, error => {
						console.log(error);
						this.sendSuccess = 0;
						this.sendError = !0
					});
			},
			get() {
				this.$http.get('webeor.json')
					.then(response => {
						return response.json();
					})
					.then(data => {
						const getData = [];
						for (let key in data) {
							getData.push(data[key]);
						}
						this.Getted = getData;
						this.Contacts.message = '';
						this.Contacts.value = '1';
					});
			}
		}
	}
</script>

<style lang="scss">

	@import '../../scss/partials/_layout';
	@import '../../scss/partials/_mixins';
	@import '../../scss/partials/_variables';

	.contacts {}

</style>
