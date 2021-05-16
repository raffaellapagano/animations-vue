import Vue from 'vue'
import Vuex from 'vuex'
import movies from './../assets/movies.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: movies,
    filter:{
      query: '',
      available: true
    }
  },
  mutations: {
    SetQuery (state, query) {
      state.filter.query = query;
    },
    SetAvailable (state) {
      state.filter.available = ! state.filter.available;
    }
  },
  getters: {
    filteredMovies (state) {
      let movies = state.movies.filter(movie =>movie.available === state.filter.available);
      if(state.filter.query.length > 2) {
        return movies.filter(movie => movie.title.toLowerCase().includes(state.filter.query))
      }
      return movies;
    }
  }
})
