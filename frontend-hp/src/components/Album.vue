<template>
  <div class="album">
    <div class="container-img">
      <img :src="this.artworkUrl100" alt="" />
    </div>
    <div>
      <h4>{{ this.collectionName }}</h4>
      <p>{{ this.artistName }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Album",
  props: {
    artworkUrl100: String,
    artistName: String,
    collectionName: String,
  },
};
</script>

<style>
.album {
  display: flex;
  width: 80%;
  border-radius: 10px;
  margin: 20px auto;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  text-align: left;
}

.container-img img {
  border-radius: 10px;
}
.container-img {
  padding-right: 5px;
  border-right: 1px solid #ccc;
  margin: 10px;
}
</style>
