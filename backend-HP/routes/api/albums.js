const express = require("express");
const router = express.Router();
const fetch = require("cross-fetch");

const url = "https://itunes.apple.com/";
const getIdArtist = async (nombreArtista) => {
  try {
    const res = await fetch(`${url}search?term=${nombreArtista}&entity=album`);
    console.log(`${url}search?term=${nombreArtista}&entity=album`);
    if (res.status >= 400) {
      throw new Error("Bad response from server");
    }
    albumes = await res.json();
    let idArtista = albumes.results[0].artistId;
    let albums = await getAlbums(idArtista);
    return albums;
  } catch (err) {
    console.error(err);
  }
};

const getAlbums = async (idArtista) => {
  try {
    const res = await fetch(`${url}lookup?id=${idArtista}&entity=album`);
    console.log(`${url}lookup?id=${idArtista}&entity=album`);

    if (res.status >= 400) {
      throw new Error("Bad response from server");
    }
    let albumes = await res.json();
    let resultadoAlbumes = albumes.results;
    resultadoAlbumes.shift();

    const nombresAlbumes = await resultadoAlbumes.map(
      ({ collectionName }) => collectionName
    );

    const nombresAlbumesFiltrados = await nombresAlbumes.filter(
      (nombre, i, nombresAlbumes) => nombresAlbumes.indexOf(nombre) !== i
    );
    resultadoAlbumes = await resultadoAlbumes.filter(
      ({ collectionName }) => !nombresAlbumesFiltrados.includes(collectionName)
    );
    let albumesHechos = resultadoAlbumes;
    return albumesHechos;
  } catch (err) {
    console.error(err);
  }
};

// Get all albums
router.get(`/:nombreArtista`, async (req, res) => {
  const nombreArtista = req.params.nombreArtista;
  const albumesDelArtista = await getIdArtist(nombreArtista);
  await res.json(albumesDelArtista);
});

module.exports = router;
