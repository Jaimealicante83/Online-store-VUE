<template>
  <div id="contenedor">
    <div class="container">
      <a href="http://jaimealicante.es/"><p>Ir a jaimealicante.es</p></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pie"
};
</script>

<style lang="scss">
#contenedor {
  background-color: #1a1a1a;
  height: 250px;
  .container {
    padding-top: 100px;
    a {
      padding: 100px 0;
      color: #f1f1f1;
      text-decoration: none;
    }
  }
}
</style>
