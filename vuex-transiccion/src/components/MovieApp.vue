<template>
    <div>
        <h1 class ="text center text-muted">Buscador con Vuex</h1>
        <SearchMovies></SearchMovies>
        <hr />
        <movie-list></movie-list>
    </div>
</template>

<script>
import SearchMovies from './SearchMovies'
import MovieList from './MovieList'

export default ({
    components: {
        SearchMovies,
        MovieList
    }
})
</script>
