import Vue from 'vue'

export default {
    get( url ) {
		return Vue.http.get( url )
			.then( response => { return response.json() })
			.then( data => {
				const getData = [];
				for (let key in data) {	getData.push(data[key]) };
				getData.reverse().join();
				return getData;
			});
		}
};
