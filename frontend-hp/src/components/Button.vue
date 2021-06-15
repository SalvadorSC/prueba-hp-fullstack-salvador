<template>
  <button v-on:click="onClickButton" @click="search(albumSearch)">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String,
    albumSearch: String,
  },
  methods: {
    onClickButton() {
      this.$emit("clicked", this.datos);
    },
  },
  created() {
    this.albumSearch;
  },
};
</script>

<style>
button {
  cursor: pointer;
}
</style>
