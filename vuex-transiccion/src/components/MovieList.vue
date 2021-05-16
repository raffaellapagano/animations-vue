<template>
    <div>
        
        <div class="row" v-if="movies.length > 0">
            <FadeGroup class="content__list"> 
            <movie :movie="movie" v-for="movie in movies" :key="movie.id"></movie>
            </FadeGroup>
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

<style scoped>
.content__list{
    display: flex;
    flex-flow: wrap;
}
</style>

