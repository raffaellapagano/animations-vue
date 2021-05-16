<template>
  <div class="home">
     <div class="container text-center">
      <MovieApp></MovieApp>
    </div>
    <div>
      <button @click="showImage=!showImage">Toggle Image</button>
    </div>
    <transition
      enter-active-class="animate__animated animate__fadeInDown"
      leave-active-class="animate__animated animate__fadeOutUp"
    >
    <img v-if="showImage" alt="Vue logo" src="../assets/logo.png">
    </transition>
    
  </div>
</template>

<script>
// @ is an alias to /src
import MovieApp from '../components/MovieApp'

export default {
  name: 'Home',
  components: {
    MovieApp
  },
  data: () => ({
    showImage: true
  })
}
</script>
