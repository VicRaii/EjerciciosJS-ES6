//! Ejercicio 6 - Find

//! 6.1
// TODO: Dado el siguiente array, usa .find() para econtrar el número 100.

const numbers = [32, 21, 63, 95, 100, 67, 43];

console.log(numbers.find((number) => number === 100));

//! 6.2
// TODO: Dado el siguiente array, usa .find() para econtrar la pelicula del año 2010.

const movies = [
  { title: "Madagascar", stars: 4.5, date: 2015 },
  { title: "Origen", stars: 5, date: 2010 },
  { title: "Your Name", stars: 5, date: 2016 },
];

console.log(movies.find((movie) => movie.date === 2010));

//! 6.3
// TODO: Dado el siguiente javascript, usa .find() para econtrar el alien de nombre
// TODO: 'Cucushumushu' y la mutación 'Porompompero'. Una vez que los encuentres, usa
// TODO: spread operator para fusionarlos teniendo en cuenta que el objeto de la mutación
// TODO: lo queremos meter en la propiedad .mutation del objeto fusionado.

const aliens = [
  { name: "Zalamero", planet: "Eden", age: 4029 },
  { name: "Paktu", planet: "Andromeda", age: 32 },
  { name: "Cucushumushu", planet: "Marte", age: 503021 },
];

const mutations = [
  {
    name: "Porompompero",
    description:
      "Hace que el alien pueda adquirir la habilidad de tocar el tambor",
  },
  {
    name: "Fly me to the moon",
    description: "Permite volar, solo y exclusivamente a la luna",
  },
  {
    name: "Andando que es gerundio",
    description: "Invoca a un señor mayor como Personal Trainer",
  },
];

const cucushumushuAlien = aliens.find((alien) => alien.name === "Cucushumushu");

const porompomperoMutation = mutations.find(
  (mutation) => mutation.name === "Porompompero"
);

const objetoFusionado = {
  ...cucushumushuAlien,
  mutation: porompomperoMutation,
};

console.log(cucushumushuAlien);
console.log(porompomperoMutation);

console.log("Final object", objetoFusionado);
