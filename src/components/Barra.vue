<template>
    <div>
        <div class="barra">
            <div class="container">
                <router-link to="/">Portada</router-link>
                <a @click="volver">VOLVER</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Barra',

    methods:{
        volver(){
            this.$router.go(-1)
        }
    }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap');


 .barra{
     height: 80px;
     width: 100%;
     background-color: #1a1a1a;
     display: flex;
     position: fixed;
     top: 0;
     font-family: 'Noto Sans', sans-serif;

     .container{
         display: flex;
         justify-content: flex-end;
         align-items: center;
         width: 80%;
         margin: 0 auto;

         a{
             font-size: 14px;
             font-weight: 300;
             letter-spacing: 2.5px;
             text-transform: uppercase;
             color: #fff;
             text-decoration: none;
             padding: 0 10px;
             cursor: pointer;
             transition: all .5s ease;
         }

         a:hover{
             color: rgba(146, 124, 0, 0.822);
         }
     }
 }

</style>