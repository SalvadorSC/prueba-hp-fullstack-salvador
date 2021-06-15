<template>
  <p>{{ datos }}</p>
  <div v-show="toggleAlbums" v-for="dato in datos" :key="dato.collectionId">
    <p>{{ datos }}</p>
  </div>
</template>

<script>
import Album from "./Album.vue";
export default {
  name: "Albums",
  components: {
    Album,
  },
  methods: {},
  props: [],
};
</script>
