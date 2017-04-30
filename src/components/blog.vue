<template lang="html">
	<main id="main" class="main">
		<transition name="slide-up" mode="out-in">
			<div v-if="!isLoaded" key = "loading" class="loader">
				<div class="loader__spinner"></div>
				<h2 class="loader__title">Загружаю посты...</h2>
			</div>
			<transition-group
				v-else
				tag = "div"
				class="container _flex-column _blog"
				>
				<post v-for = "postItem in Posts" :key = "postItem.time"
					:title = "postItem.title"
					:time = "postItem.time"
					:picture = "postItem.picture"
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

	.container._blog {
		width: $containersWidth * .9;
		@include MQ(Pp) {
			max-width: 90%
		}
	}

	.blog {
		min-height: 100vh;
		.container {
			min-height: 85vh;
		}
	}
	.loader {
		display: flex;
		flex-flow: column wrap;
		justify-content: center;
		align-items: center;
		height: 85vh;
		&__spinner {
			@include loader06($size: 56px, $border-size: 4px, $duration: 1s);
		}
		&__title {
			margin-top: 40px;
		}
	}

</style>
