<template lang="html">
	<article class="post">
		<h2 class="post__title">{{ title }}</h2>
		<h3 class="post__time">{{ time }}</h3>
		<div v-html = "content" class="post__content html ql-editor"></div>
	</article>
</template>

<script>
	export default {
  		name: "post",
		props: [ 'title' , 'time' , 'content' ]
	}
</script>

<style lang="scss">

	@import "../../scss/partials/_layout";
	@import "../../scss/partials/_mixins";
	@import "../../scss/partials/_variables";

</style>
