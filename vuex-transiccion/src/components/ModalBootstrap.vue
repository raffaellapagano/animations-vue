<template>
  <div>

     <div class="card m-auto" style="width:500px">
  <div class="card-header">
      <slot name="header"></slot>
  </div>
  <div class="card-body">
      <slot name="body"></slot>
  </div>
  <div class="card-footer">
      <slot name="footer"></slot>
  </div>
</div>
      
    <div class="modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <slot name="header"></slot>
      </div>
      <div class="modal-body">
        <slot name="body"></slot>
      </div>
      <!-- <div class="modal-footer">
        <slot name="footer"></slot>
      </div> -->
    </div>
  </div>
</div>
  </div>

</template>

<script>
export default {
  name: 'ModalBootstrap',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>