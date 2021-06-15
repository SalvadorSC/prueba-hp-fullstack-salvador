const express = require("express");
const router = express.Router();
const fetch = require("cross-fetch");

let albumes = {};
let albumesHechos = [];
const url = "https://itunes.apple.com/";
const getAlbums = async (nombreArtista) => {
  try {
    const res = await fetch(`${url}search?term=${nombreArtista}&entity=album`);
    console.log(`${url}search?term=${nombreArtista}&entity=album`);
    if (res.status >= 400) {
      throw new Error("Bad response from server");
    }
    albumes = await res.json();

    let resultadoAlbumes = albumes.results;

    const nombresAlbumes = resultadoAlbumes.map(
      ({ collectionName }) => collectionName
    );

    const nombresAlbumesFiltrados = nombresAlbumes.filter(
      (nombre, i, nombresAlbumes) => nombresAlbumes.indexOf(nombre) !== i
    );
    resultadoAlbumes = resultadoAlbumes.filter(
      ({ collectionName }) => !nombresAlbumesFiltrados.includes(collectionName)
    );

    albumesHechos = resultadoAlbumes;
  } catch (err) {
    console.error(err);
  }
};

// Get all albums
router.get(`/:nombreArtista`, (req, res) => {
  const nombreArtista = req.params.nombreArtista;
  getAlbums(nombreArtista);
  res.json(albumesHechos);
});

module.exports = router;
