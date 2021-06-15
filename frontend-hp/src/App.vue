<template>
  <div>
    <header>
      <input
        id="inputSearch"
        v-bind:value="albumSearch"
        v-on:input="albumSearch = $event.target.value"
        placeholder="Album name"
      />
      <button id="btn-search" @click="search(albumSearch)">
        Search
      </button>
    </header>
    <hr />
    <div class="container">
      <input
        id="inputFilter"
        v-bind:value="filtro"
        v-on:input="filtro = $event.target.value"
        placeholder="Filter albums"
      />
      <button
        id="btn-filter"
        class="btn-filter"
        @click="filtrarAlbumes(filtro)"
      >
        Filter
      </button>
      <div v-for="dato in this.datosToShow" :key="dato.collectionId">
        <Album
          :collectionName="dato.collectionName"
          :artistName="dato.artistName"
          :artworkUrl100="dato.artworkUrl100"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Album from "./components/Album.vue";
export default {
  name: "App",
  components: {
    Album,
  },
  data() {
    return {
      albumSearch: "",
      datos: [],
      datosToShow: [],
      url: "http://localhost:5000/",
    };
  },
  props: {
    toggleAlbums: Boolean,
  },
  methods: {
    search(busqueda) {
      let busquedaFixed = busqueda.toLowerCase().replace(/\s/g, "-");
      const setDatosToShow = async (datos) => {
        this.datosToShow = datos;
      };
      fetch(`${this.url}api/albums/${busquedaFixed}`)
        .then((response) => response.json())
        .then((datos) => (this.datos = datos))
        .then(() => {
          setDatosToShow(this.datos);
        });
    },
    filtrarAlbumes(filtro) {
      this.datosToShow = this.datos.filter((dato) => {
        if (!dato.collectionName.toUpperCase().search(filtro.toUpperCase())) {
          return dato;
        }
      });
    },
  },
};
</script>

<style>
.container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
header {
  display: flex;
  justify-content: space-between;
}
.hidden {
  display: none;
}
input {
  padding-left: 7px;
  height: 2rem;
  border-radius: 5px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
input:focus-visible {
  border: none;
}
.btn-filter {
  margin-left: 10px;
}
button {
  border-radius: 5px;
  border: none;
  height: 2rem;
  margin: 0;
  cursor: pointer;
  background-color: rgb(255, 247, 240);
  width: 60px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
p {
  margin-bottom: none;
}
</style>
