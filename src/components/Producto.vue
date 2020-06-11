<template>
    <div>
        <!--
        <h1>Este es el component llamado PRODUCTO EN SINGULAR y he aquí la ruta llamada desde route params = {{ $route.params.category }}</h1>

        <p> Aqui mostraremos todas las fotos y contenidos que tengan la ruta route params category{{ $route.params.category }}</p>



      


        <p>{{ categorien }}</p>
        
                  <ul>
            <li v-for="producto in filtrando2" v-bind:key="producto.id">
             {{ producto.id }} {{ producto.nombre }} 
            </li>
        </ul>
       

        -->





    <div class="container">

        <h2>{{ lacategoria }} </h2>

    <div class="ulcontainer">
        <ul>
            
            <li v-for="producto in filtrando" v-bind:key="producto.id">
                <router-link :to="{ name: 'ProductosInfo', params: { id: producto.id}}">
                <img :src="imagePath(producto)" alt="">
                </router-link>
                <router-link :to="{ name: 'ProductosInfo', params: { id: producto.id}}">
                 {{ producto.nombre }} <br/>Cantidad: {{ producto.cantidad }}
                </router-link>
                 
            </li>
        </ul>
    </div>
    </div> 
    </div>
</template>

<script>



export default {
    name: 'Producto',

    data(){
        return{
            'lacategoria': this.$route.params.category
        }
    },

     computed:{
        productos(){
          return this.$store.state.productos; //Esto devuelve los productos en stock, por ejemplo moviles, ordenadores, cámaras de fotos.
        },

           //PRUEBA
            filtrando() {
                if (this.$route.params.category === 'Informatica'){
                     return this.$store.getters.filtrarCategoria('Informatica');
                }

                 if (this.$route.params.category === 'Móviles'){
                     return this.$store.getters.filtrarCategoria('Moviles');
                }

                if (this.$route.params.category === 'Audio'){
                     return this.$store.getters.filtrarCategoria('Audio');
                } 
                if (this.$route.params.category === 'Fotografia'){
                     return this.$store.getters.filtrarCategoria('Fotografia');
                } 
                
                else {
                    return 'empty'
                }
             //Devuelve productos cuya categoria sea igual a informatica
           },
          
                

           

        categorien(){
            return this.$route.params.category; //Esto devuelve la categoria de los productos de la página actual. Por ejemplo informática
        },
    },

    methods:{
        imagePath(producto){
            return require(`../assets/img/${producto.img[0]}`);
        }
    }
}
</script>

<style scoped lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap');
  
  .container{
      max-width: 90%;
      margin: 0 auto;

    h2{
        font-family: 'Noto Sans', sans-serif;
        font-size: 24px;
        text-transform: uppercase;
        margin: 100px 0 60px 0;
    } 

      .ulcontainer{
          display: flex;
          align-items: center;
          justify-content: center;

          ul{
              padding-left: 0;

              a{
                  text-decoration: none;
              }
              
              li{
                  font-family: 'Noto Sans', sans-serif;
                  font-size: 12px;
                  text-transform: uppercase;
                  letter-spacing: 2px;
                  list-style: none;
                  display: flex;
                  flex-direction: column;
                  margin-bottom: 30px;    
                  img{
                      height: 300px;
                      width: 240px;
                      margin-bottom: 10px;
                  }
              }
          }
      }
  }

  @media only screen and (min-width: 768px)  {

 .container{
      max-width: 90%;
      margin: 0 auto;

      .ulcontainer{
          display: flex;
          align-items: center;
          justify-content: center;

          ul{
              padding-left: 0;
              display: flex;
              flex-wrap: wrap;
              align-items: center;
              justify-content: space-around;


              li{
                  font-family: 'Noto Sans', sans-serif;
                  font-size: 12px;
                  text-transform: uppercase;
                  letter-spacing: 2px;
                  list-style: none;
                  display: flex;
                  flex-direction: column;
                  margin-bottom: 30px;    
                  img{
                      height: 360px;
                      width: auto;
                      margin-bottom: 10px;
                  }
              }
          }
      }
    }
}

@media only screen and (min-width: 1200px)  {
     .container{
        padding-top: 80px;
        max-width: 1150px;

      .ulcontainer{
          display: flex;
          align-items: center;
          justify-content: center;
          max-width: 100%;
          margin: 0 auto;

          ul{
              padding-left: 0;
              display: flex;
              flex-wrap: wrap;
              align-items: center;
              justify-content: space-around;

              li{
                  font-family: 'Noto Sans', sans-serif;
                  font-size: 12px;
                  text-transform: uppercase;
                  letter-spacing: 2px;
                  list-style: none;
                  display: flex;
                  flex-direction: column;
                  margin-bottom: 30px;    
                  img{
                      height: 310px;
                      width: auto;
                      margin-bottom: 10px;
                    }
               }
           }
        }
   }
}

@media only screen and (min-width: 1400px)  {
    .container{
        padding-top: 80px;
        max-width: 1400px;

        .ulcontainer{
            display: flex;
            align-items: center;
            justify-content: center;
            max-width: 100%;
            margin: 0 auto;

            ul{
                padding-left: 0;
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                justify-content: space-around;

                li{
                    font-family: 'Noto Sans', sans-serif;
                    font-size: 12px;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    list-style: none;
                    display: flex;
                    flex-direction: column;
                    margin-bottom: 30px;    
                    img{
                        height: 400px;
                        width: auto;
                        margin-bottom: 10px;
                        }
                }
            }
        }
    }
}



</style>



         
              