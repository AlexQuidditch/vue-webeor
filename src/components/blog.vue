<template lang="html">
	<main id="main" class="main">
		<transition name="slide-up" mode="out-in">
			<div v-if="!PostsIsLoaded" key = "loading" class="loader">
				<div class="loader__spinner _blog"></div>
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
		components: { Post },
		computed: {
			Posts() {
				return this.$store.state.Posts
			},
			PostsIsLoaded() {
				return this.$store.state.PostsIsLoaded
			}
		},
		mounted() {
			Waves.init();
			Waves.attach('[ripple-dark]', ['waves-dark']);
			Waves.attach('[ripple-light]', ['waves-light']);
			this.$store.dispatch('getPosts' , 'posts.json');
		}
	}
</script>

<style lang="scss">

	@import '../scss/partials/_layout';
	@import '../scss/partials/_mixins';
	@import '../scss/partials/_variables';

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

</style>
