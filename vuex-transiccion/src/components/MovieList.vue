<template>
    <div>
        
        <div class="row" v-if="movies.length > 0">
            <fade-group>
            <movie :movie="movie" v-for="movie in movies" :key="movie.id"></movie>
            </fade-group>
        </div>
        
        
        <div v-else class="alert alert-danger">No hay peliculas disponibles</div>
        
    </div>
</template>

<script>
import Movie from './MovieItem'
import {mapGetters} from 'vuex'
import FadeGroup from './Animations/FadeGroup'


export default ({
    components: {
        Movie,
        FadeGroup
    },
    computed:{
        ...mapGetters({
            movies: 'filteredMovies'
        })
    }
})
</script>
