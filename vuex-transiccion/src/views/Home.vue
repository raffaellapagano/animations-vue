<template>
  <div class="home">
    
     <div class="container text-center">
      <MovieApp></MovieApp>
    </div>
  
  </div>
</template>

<script>
// @ is an alias to /src
import MovieApp from '../components/MovieApp'

export default {
  name: 'Home',
  components: {
    MovieApp
  }
}
</script>
