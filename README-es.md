Para ejecutar el testing (estando dentro de la carpeta "Testing"):

- node ./script.js

Para ejecutar el backend (estando dentro de la carpeta de "backend-HP"):

- npm run serve

Para ejecutar el frontend (estando dentro de la carpeta de "frontend-hp"):

- npm run dev

Problemas con la app:

- A la hora de filtrar como usuario, solo lo hace con coincidencias del principio del string.
  - Ej 1: Al buscar "old" para encontrar todas las versiones de "Old Town Road", de Lil Nas X, si que filtra y proporciona las respuestas.
  - Ej 2: Al buscar "town" para encontrar todas las versiones de "Old Town Road", de Lil Nas X, no proporciona las respuestas deseadas.

Cambios hechos para la segunda tarea:

- Usar ".then" en vez de ".end" (quizás el siguiente programador no sabe que es el ".end" en express.js)
- Usar Try y Catch para el handling de los errores
- Cambiar las funciones anónimas por arrow functions.
- Guardar algunos valores que se repiten mucho y son muy largos.
- Desestructuracion.
