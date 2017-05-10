export const scrollBehavior = (to, from, savedPosition) => {
	if (savedPosition) {
		return savedPosition
	} else {
		const position = {}
		if (to.hash) {
			porousition.selector = to.hash
		}
		if (to.matched.some( m => m.meta.scrollToTop )) {
			position.x = 0
			position.y = 0
		}
		return position
	}
};
