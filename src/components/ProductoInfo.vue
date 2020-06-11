<template>
    <div>
         
        <div class="container">
           <h3>{{ elemento.nombre }}</h3>

           <div class="containerProduct">

                <div class="containerImagen">
                    <img :src="imagePath(elemento)" alt="">
                </div>

                <div class="containerInfo">
                    <ul>
                        <li id="titulo"> {{ elemento.nombre }}</li>
                        <li>Categoría: {{ categorien }}</li>
                        <li>Precio: {{ elemento.price}}€</li>
                        <li v-if="elemento.cantidad > 5" class="verde">Disponibles: {{ elemento.cantidad }} en stock</li>
                        <li v-if="elemento.cantidad <= 5 && elemento.cantidad > 0" class="amarillo">Disponibles: {{ elemento.cantidad }} en stock </li>
                        <li v-if="elemento.cantidad == 0" class="rojo">Disponibles: {{ elemento.cantidad }} no quedan</li>
                    </ul>
                    <button @click="removeFromCart(elemento.id)" :disabled="elemento.cantidad == 0">Añadir al carrito</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductoInfo',

    data(){
        return{
            elemento: this.$store.getters.elemento(this.$route.params.id)
        }
    },

    methods:{
          imagePath(elemento){
            return  require(`../assets/img/${elemento.img[0]}`);
        },
        removeFromCart(itemId) {
         this.$store.dispatch('removeFromCart', itemId)
        }
    },

    computed: {
         categorien(){
            return this.$route.params.category; //Esto devuelve la categoria de los productos de la página actual. Por ejemplo informática
        },

        esteid(){
            return this.$route.params.id;
        },
    }
}
</script>

<style scoped lang="scss">

 @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap');

    .container{
        max-width: 70%;
        margin: 100px auto 0;

        h3{
            font-family: 'Noto Sans', sans-serif;
            font-size: 14px;
            font-weight: 600;
            letter-spacing: 1px;
            text-transform: uppercase;
        }

        .containerProduct{

            .containerImagen{

                img{
                    height: auto;
                    width: 100%;
                    display: block;
                }
            }

            .containerInfo{

                ul{
                    padding-left: 0;
                    li{
                        font-family: 'Noto Sans', sans-serif;
                        font-size: 14px;
                        list-style: none;
                        text-align: left;
                        padding-bottom: 4px;
                    }
                    .verde{
                        color: green;
                    }
                    .amarillo{
                        color: #E5D442;
                    }
                    .rojo{
                        color: red;
                    }
                }

                button{
                    font-family: 'Noto Sans', sans-serif;
                    font-size: 13.5px;
                    color: #fff;
                    background-color: #010101;
                    border: none;
                    padding: 11px 21px;
                    display: block;
                    cursor: pointer;
                    transition: all .5s ease;
                }

                button:hover{
                    background-color: #424242;
                }
            }
        }
    }

@media only screen and (min-width: 768px)  {
     .container{
        max-width: 60%;
        margin: 150px auto 0;

        h3{
            font-family: 'Noto Sans', sans-serif;
            font-size: 22px;
            font-weight: 600;
            letter-spacing: 1px;
            text-transform: uppercase;
        }

        .containerProduct{

            .containerImagen{
                img{
                    height: auto;
                    width: 100%;
                    display: block;
                }
            }

        .containerInfo{

                ul{
                    padding-left: 0;
                    li{
                        font-family: 'Noto Sans', sans-serif;
                        font-size: 16px;
                        list-style: none;
                        text-align: left;
                        padding-bottom: 4px;            }
                }

                button{
                    font-family: 'Noto Sans', sans-serif;
                    font-size: 14.5px;
                    color: #fff;
                    background-color: #010101;
                    border: none;
                    padding: 15px 25px;
                    display: block;
                }
            }
        }
     }
}

@media only screen and (min-width: 1024px)  {
     .container{
        max-width: 90%;
        margin: 150px auto 0;

        h3{
            font-family: 'Noto Sans', sans-serif;
            font-size: 22px;
            font-weight: 600;
            letter-spacing: 1px;
            text-transform: uppercase;
            margin-bottom: 100px;
        }

        .containerProduct{
            display: flex;
            justify-content: space-between;

            .containerImagen{

                img{
                    height: auto;
                    width: 95%;
                    display: flex;
                }
            }

        .containerInfo{
            align-self: flex-end;

                ul{
                    padding-left: 0;
                    li{
                        font-family: 'Noto Sans', sans-serif;
                        font-size: 16px;
                        list-style: none;
                        text-align: left;
                        padding-bottom: 4px;            }
                }

                button{
                    font-family: 'Noto Sans', sans-serif;
                    font-size: 14.5px;
                    color: #fff;
                    background-color: #010101;
                    border: none;
                    padding: 15px 25px;
                    display: block;
                }
            }
        }
    }
}

@media only screen and (min-width: 1200px)  {
     .container{
        max-width: 1000px;
        margin: 190px auto 0;

        h3{
            display: none;
        }

        .containerProduct{
            display: flex;
            justify-content: flex-start;

            .containerImagen{

                img{
                    height: auto;
                    width: 500px;
                    display: flex;
                }
            }

        .containerInfo{
            align-self: flex-end;
            padding-left: 100px;

                ul{
                    padding-left: 0;
                    li{
                        font-family: 'Noto Sans', sans-serif;
                        font-size: 16px;
                        list-style: none;
                        text-align: left;
                        padding-bottom: 4px;  
                    }

                    #titulo{
                        font-size: 20px;
                        font-weight: 800;
                        text-transform: uppercase;
                    }
                }

                button{
                    font-family: 'Noto Sans', sans-serif;
                    font-size: 14.5px;
                    color: #fff;
                    background-color: #010101;
                    border: none;
                    padding: 15px 25px;
                    display: block;
                }
            }
        }
    }
}
</style>