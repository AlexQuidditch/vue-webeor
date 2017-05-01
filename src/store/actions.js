import api from './modules/api.js';

export const getPosts = ( context , payload ) => {
	return api.get( payload )
		.then( response => context.commit('setPosts', response))
		.catch( error => console.error(error));
};

export const getPortfolio = ( context , payload ) => {
	return api.get( payload )
		.then( response => context.commit('setPortfolio' , response ))
		.catch( error => console.error(error))
};
