<template>
    <div class="categorias">
        <div id="category"></div>
       <div class="container">
           <h2>Categorías:</h2>
           <div class="ulcontainer">
               <ul>

                 <li v-for="categoria in categorias" v-bind:key="categoria">

                     <router-link :to="{ name: 'Productos', params: { category: categoria.name}}">

                     <img class="categoria-imagen" :src="imagePath(categoria)" alt="">
                     </router-link>
                     <router-link :to="{ name: 'Productos', params: { category: categoria.name}}">
                     {{ categoria.name }} 
                     </router-link>

                    

                 </li>
               
               </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Categorias',

    computed:{
        categorias(){
          return this.$store.state.categorias
    }
  },

    methods:{
          imagePath(categoria){
            return  require(`../assets/img/${categoria.img[0]}`);
        },
    }
}
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap');

.categorias{
    height:  auto;
    background-color: #e0e0e0;

    .container{
        padding-top: 100px;
        padding-bottom: 70px;
        max-width: 90%;
        margin: 0 auto;

        h2{
            font-family: 'Noto Sans', sans-serif;
            text-transform: uppercase;
            margin: 0;
        }

        .ulcontainer{
            margin: 0 auto;
            max-width: 300px;
            ul{
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                padding-left: 0;
                cursor: pointer;
                    li{
                    font-family: 'Noto Sans', sans-serif;
                    display: flex;
                    flex-direction: column;
                    list-decoration: none;
                    padding-bottom: 30px;
                    font-size: 12px;
                    text-transform: uppercase;
                    letter-spacing: 2px;

                    .categoria-imagen{
                        height: 300px;
                        width: auto;
                        margin-bottom: 10px;
                    }
                }

                a{
                    text-decoration: none;
                    color: #0b0b0b;
                    transition: color .5s ease;
                }

                a:hover{
                    color: rgb(226, 35, 67);
                }
            }
        }
    }
}

@media only screen and (min-width: 768px)  {

    .categorias{

        .container{
            padding-top: 100px;
            max-width: 90%;

            h2{
            margin: 0 0 60px 0;
            }

            .ulcontainer{
                max-width: 100%;
                margin: 0 auto;
                ul{
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    justify-content: space-around;
                    li{
                        display: flex;
                        flex-direction: column;
                        font-size: 14px;

                        .categoria-imagen{
                            height: 360px;
                            width: auto;
                        }
                    }
                }
            }
        }
    }
}

@media only screen and (min-width: 1200px)  {

    .categorias{

        .container{
            padding-top: 80px;
            max-width: 1150px;

            h2{
            margin: 0 0 60px 0;
            }

            .ulcontainer{
                max-width: 100%;
                margin: 0 auto;
                ul{
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    justify-content: space-around;
                    li{
                        display: flex;
                        flex-direction: column;
                        font-size: 14px;

                        .categoria-imagen{
                            height: 310px;
                            width: auto;
                        }
                    }
                }
            }
        }
    }
}

@media only screen and (min-width: 1400px)  {

    .categorias{

        .container{
            padding-top: 80px;
            max-width: 1400px;

            .ulcontainer{
                max-width: 100%;
                margin: 0 auto;
                ul{
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    justify-content: space-around;
                    li{
                        display: flex;
                        flex-direction: column;
                        font-size: 14px;

                        .categoria-imagen{
                            height: 400px;
                            width: auto;
                        }
                    }
                }
            }
        }
    }
}

@media only screen and (min-width: 1600px)  {

    .categorias{

        .container{
            padding-top: 80px;
            max-width: 1600px;

            .ulcontainer{
                ul{
                    li{
                        .categoria-imagen{
                            height: 450px;
                            width: auto;
                        }
                    }
                }
            }
        }
    }
}
    
 
</style>

