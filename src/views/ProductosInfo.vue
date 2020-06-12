<template>
  <div>
    <Barra />
    <ProductoInfo />
  </div>
</template>

<script>
import Barra from "@/components/Barra.vue";
import ProductoInfo from "@/components/ProductoInfo.vue";

export default {
  name: "ProductosInfo",
  components: {
    Barra,
    ProductoInfo
  }
};
</script>
