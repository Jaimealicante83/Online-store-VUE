import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    categorias: [
      {
        id: 1,
        name: "Fotografia",
        img: ["camara8.png"]
      },
      {
        id: 2,
        name: "Audio",
        img: ["audio2.jpg"]
      },
      {
        id: 3,
        name: "Móviles",
        img: ["phone2.jpg"]
      },
      {
        id: 4,
        name: "Informatica",
        img: ["laptop1.jpg"]
      }
    ],
    productos: [
      {
        id: 1,
        nombre: "Camara Xh340",
        price: 550,
        cantidad: 0,
        category: "Fotografia",
        img: ["camara1.png"]
      },
      {
        id: 2,
        nombre: "Altavoces Bluetooth",
        cantidad: 8,
        price: 95,
        category: "Audio",
        img: ["audio1.jpg"]
      },
      {
        id: 3,
        nombre: "Smartphone negro",
        price: 400,
        category: "Moviles",
        cantidad: 1,
        img: ["phone1.jpg"]
      },
      {
        id: 4,
        nombre: "Ordenador portatil",
        price: 850,
        cantidad: 19,
        category: "Informatica",
        img: ["ordenador1.jpg"]
      },
      {
        id: 5,
        nombre: "Ordenador sobremesa",
        price: 670,
        cantidad: 5,
        category: "Informatica",
        img: ["ordenador2.jpg"]
      },
      {
        id: 6,
        nombre: "Teclado",
        price: 25,
        cantidad: 39,
        category: "Informatica",
        img: ["teclado.jpg"]
      },
      {
        id: 7,
        nombre: "Smartphone 230",
        price: 220,
        cantidad: 4,
        category: "Moviles",
        img: ["phone3.jpg"]
      },
      {
        id: 8,
        nombre: "Xyaomi 333",
        price: 260,
        cantidad: 18,
        category: "Moviles",
        img: ["phone7.jpg"]
      },
      {
        id: 9,
        nombre: "Altavoces",
        price: 300,
        cantidad: 11,
        category: "Audio",
        img: ["audio3.jpg"]
      },
      {
        id: 10,
        nombre: "Ratón",
        price: 15,
        cantidad: 35,
        category: "Informatica",
        img: ["raton.jpg"]
      },
      {
        id: 11,
        nombre: "Ordenador Gaming",
        price: 1050,
        cantidad: 3,
        category: "Informatica",
        img: ["ordenador3.jpg"]
      },
      {
        id: 12,
        nombre: "Camara evil",
        price: 650,
        cantidad: 11,
        category: "Fotografia",
        img: ["camara6.png"]
      },
      {
        id: 13,
        nombre: "Micrófono",
        price: 180,
        cantidad: 27,
        category: "Audio",
        img: ["micro.jpg"]
      },
      {
        id: 14,
        nombre: "Objetivo gran angular",
        price: 335,
        cantidad: 2,
        category: "Fotografia",
        img: ["camara8.png"]
      },
      {
        id: 15,
        nombre: "Smartphone camara 4k",
        price: 750,
        cantidad: 4,
        category: "Moviles",
        img: ["phone5.jpg"]
      },
      {
        id: 16,
        nombre: "Pantalla HD",
        price: 325,
        cantidad: 8,
        category: "Informatica",
        img: ["ordenador4.jpg"]
      },
      {
        id: 17,
        nombre: "Cámara reflex",
        price: 410,
        cantidad: 21,
        category: "Fotografia",
        img: ["camara9.png"]
      },
      {
        id: 18,
        nombre: "Altavoz bluetooth",
        price: 140,
        cantidad: 3,
        category: "Audio",
        img: ["audio5.jpg"]
      },
      {
        id: 19,
        nombre: "Altavoz",
        price: 290,
        cantidad: 11,
        category: "Audio",
        img: ["audio6.jpg"]
      },
      {
        id: 20,
        nombre: "Móvil blanco",
        price: 200,
        cantidad: 6,
        category: "Moviles",
        img: ["phone6.jpg"]
      },
      {
        id: 21,
        nombre: "Camara vintage",
        price: 750,
        cantidad: 16,
        category: "Fotografia",
        img: ["camara4.png"]
      },
      {
        id: 22,
        nombre: "Portatil",
        price: 850,
        cantidad: 6,
        category: "Informatica",
        img: ["ordenador5.jpg"]
      },
      {
        id: 23,
        nombre: "Altavoz ordenador",
        price: 90,
        cantidad: 5,
        category: "Informatica",
        img: ["altavozordenador.jpg"]
      }
    ]
  },
  mutations: {
    restarInventario(state, payload) {
      let producto = state.productos.find(
        producto => producto.id === Number(payload)
      );
      producto.cantidad--;
    }
  },
  actions: {
    removeFromCart({ commit }, payload) {
      commit("restarInventario", payload);
    }
  },
  getters: {
    product: state => id => {
      return state.categoria.filter(p => p.id === Number(id))[0];
    },
    elemento: state => id => {
      return state.productos.filter(p => p.id === Number(id))[0];
    },
    filtrarCategoria: state => category => {
      return state.productos.filter(producto => producto.category === category);
    }
  },
  modules: {}
});
