<template>
  <div>
    <Barra />
    <ul>
      <li>pagina about</li>
    </ul>
  </div>
</template>

<script>
import Barra from "@/components/Barra.vue";

export default {
  name: "About",
  components: {
    Barra
  }
};
</script>

<style lang="scss">
.container {
  p {
    color: blue;
    font-size: 100px;
  }
}
</style>
