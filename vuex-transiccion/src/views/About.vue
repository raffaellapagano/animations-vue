<template>
  <div class="about">

    <div class="msgClose">
      <Fade>
        <h1 v-if="!display">Heu tancat el Modal</h1>
      </Fade>
      <button type="button" v-if="!display" class="btn btn-primary" @click="display = !display">Modal</button>
    </div>
    <Flip>

      <div class="modalC">
       <ModalBootstrap v-if="display">
          <template v-slot:header>
              <h5>Hola Mundo</h5>
          </template>
          
          <template v-slot:body>
              <h5 class="card-title">Cambio de Moneda</h5>
              <input type="text" v-model='euro'>
              
              <p class="card-text">El cambio de {{euro}}€ en dolares es {{ euro | convertir}}$</p>
          </template>

          <template v-slot:footer>
          <button type="button" class="btn btn-primary" @click="display = !display">Cerrar</button>
          </template>  
       </ModalBootstrap>
    </div>
    </Flip>

    <Formulari class="col-6 m-auto"></Formulari>
    
  </div>
</template>

<script>
import ModalBootstrap from '../components/ModalBootstrap'
import Formulari from '../components/Formulari'

import Flip from '../components/Animations/Flip'
import Fade from '../components/Animations/Fade'


export default {
  data(){
      return{
          euro: 0,
          display : true
      }
  },
  components: {
    ModalBootstrap,
    Formulari,
    Flip,
    Fade
  },
  filters:{
      convertir: function(value){
          return value * 1.23;
      }
  }
}
</script>

<style scoped>

* {
  margin: 0;
  padding: 0;
}

.modalC{
  position: fixed;
  top: 50%;
  left: 59%;
  z-index:1;
  transform: translate(-70%, -50%);
  z-index:1;
  box-shadow: 10px 10px 8px rgb(13, 224, 119);
}

.msgClose{
  height: 100px;
  padding: 5px;
}
</style>

