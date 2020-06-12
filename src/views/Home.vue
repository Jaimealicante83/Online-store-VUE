<template>
  <div>
    <Barra />
    <Portada />
    <Categorias />
    <Pie />
  </div>
</template>

<script>
import Barra from "@/components/Barra.vue";
import Portada from "@/components/Portada.vue";
import Categorias from "@/components/Categorias.vue";
import Pie from "@/components/Pie.vue";

export default {
  name: "Home",
  components: {
    Barra,
    Portada,
    Categorias,
    Pie
  },

  computed: {
    mostrarCategorias() {
      return this.$store.state.categorias;
    }
  }
};
</script>

<style></style>
