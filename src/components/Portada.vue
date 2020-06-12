<template>
  <div class="portada">
    <div class="container">
      <h1>Bienvenidos a la tienda</h1>
      <p>Mira que puedes comprar en nuestra tienda para geeks</p>
      <button @click="bajar">Ver categorías</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Portada",

  methods: {
    bajar: function() {
      document.getElementById("category").scrollIntoView({
        behavior: "smooth"
      });
    }
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap");

$black: #3b3b3b;

.portada {
  height: 520px;
  background-image: url("../assets/img/black.jpg");
  background-size: cover;
  background-position: 10% 10%;
  background-repeat: no-repeat;
  font-family: "Noto Sans", sans-serif;

  .container {
    height: 100%;
    max-width: 70%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      font-size: 40px;
      text-transform: uppercase;
      color: #fff;
      margin: 0;
    }
    p {
      font-size: 12.5px;
      line-height: 18px;
      color: #fff;
      margin: 20px 0;
    }

    button {
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 3px;
      background-color: #80513d;
      padding: 15px 25px;
      color: #fff;
      border: none;
      margin-top: 10px;
      cursor: pointer;
    }
  }
}

@media only screen and (min-width: 768px) {
  .portada {
    height: 700px;

    .container {
      max-width: 80%;

      h1 {
        font-size: 44px;
        letter-spacing: 1.5px;
      }
      p {
        font-size: 14px;
        line-height: 21px;
        margin: 17px;
      }

      button {
        font-size: 12px;
      }
    }
  }
}

@media only screen and (min-width: 1024px) {
  .portada {
    height: 550px;

    .container {
      max-width: 80%;

      h1 {
        font-size: 44px;
      }
      p {
        font-size: 14px;
        line-height: 21px;
        margin: 17px;
      }

      button {
        font-size: 12px;
      }
    }
  }
}

@media only screen and (min-width: 1200px) {
  .portada {
    height: 760px;

    .container {
      max-width: 80%;
      align-items: flex-start;

      h1 {
        font-size: 50px;
      }
      p {
        font-size: 14px;
        line-height: 19px;
        margin: 17px 0;
      }

      button {
        font-size: 11px;
      }
    }
  }
}
</style>
