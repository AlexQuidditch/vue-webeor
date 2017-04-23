<template lang="html">
	<main id="main" class="main">
		<transition name="fade" mode="out-in">
			<div v-if="!isLoaded" key = "loading" class="loader">
				<div class="loader__spinner"></div>
				<h2 class="loader__title">Загружаю посты...</h2>
			</div>
			<transition-group
				v-else
				name="fade"
				mode="out-in"
				tag = "div"
				class="container"
				>
				<post v-for = "postItem in Posts" :key = "postItem.time"
					:title = "postItem.title"
					:time = "postItem.time"
					:content = "postItem.content"
					>
				</post>
			</transition-group>
		</transition>
	</main>
</template>

<script>

	import Post from '../components/templates/blog-post.vue';

	export default {
  		name: "blog",
		components: {
			Post
		},
      	data() {
			return {
				isLoaded: false,
				Posts: []
			}
      	},
		created() {
			this.$http.get('posts.json')
				.then(response => {
					return response.json();
				})
				.then(data => {
					const getData = [];
					for (let key in data) {
						getData.push(data[key])
					};
					getData.reverse().join();
					this.Posts = getData;
					this.isLoaded = true
				});
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

	@import "../scss/SpinThatShit/loaders.scss";

	.blog {
		min-height: 100vh;
		&__title {
			font-size: 3rem;
		}
	}
	.loader {
		display: flex;
		flex-flow: column wrap;
		justify-content: center;
		align-items: center;
		height: 75vh;
		&__spinner {
			@include loader06($size: 56px, $border-size: 4px, $duration: 1s);
		}
		&__title {
			margin-top: 40px;
		}
	}

</style>
