export const setPosts = (state, payload) => {
	state.Posts = payload;
	state.PostsIsLoaded = true
};

export const setPortfolio = (state, payload) => {
	state.Portfolio = payload;
	state.PortfolioIsLoaded = true
}
