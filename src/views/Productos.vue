<template>
  <div>
    <Barra />
    <Producto />
  </div>
</template>

<script>
import Barra from "@/components/Barra.vue";
import Producto from "@/components/Producto.vue";

export default {
  name: "Productos",
  components: {
    Barra,
    Producto
  }
};
</script>
