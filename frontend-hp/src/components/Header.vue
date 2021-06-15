<template>
  <header>
    <input
      v-bind:value="albumSearch"
      v-on:input="albumSearch = $event.target.value"
      placeholder="edit me"
    />
    <p>{{ albumSearch }}</p>
    <p class="hidden" @datos="datos">{{ datos }}</p>
    <button @click="search(albumSearch)">
      Search
    </button>
  </header>
  <hr />
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      albumSearch: "",
      datos: [],
    };
  },
  props: ["value"],
  methods: {
    search(busqueda) {
      console.log("search");
      fetch(`http://localhost:5000/api/albums/${busqueda}`)
        .then((response) => response.json())
        .then((datos) => (this.datos = datos));
      this.$emit("toggleAlbums");
    },
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
}
.hidden {
  display: none;
}
input {
  height: 2rem;
  border-radius: 5px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
input:focus-visible {
  border: none;
}
button {
  border-radius: 5px;
  border: none;
  height: 2rem;
  margin: 0;
  background-color: rgb(255, 247, 240);
  width: 60px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
</style>
