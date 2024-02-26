//! Ejercicio 4 - Map

//! 4.1
// TODO: Dado el siguiente array, devuelve un array con sus nombres
// TODO: utilizando .map().

const users = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];

console.log(
  "The list of names is: ",
  users.map((user) => user.name)
);

//! 4.2
// TODO: Dado el siguiente array, devuelve una lista que contenga los valores
// TODO: de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que
// TODO: empiece por 'A'.

const numbersWithA = users.map((user) => {
  if (user.name.startsWith("A")) {
    return { ...user, name: "Anacleto" };
  } else {
    return { ...user };
  }
});

console.log(
  "The new list of names is: ",
  numbersWithA.map((user) => user.name)
);

//! 4.3
// TODO: Dado el siguiente array, devuelve una lista que contenga los valores
// TODO: de la propiedad .name y añade al valor de .name el string ' (Visitado)'
// TODO: cuando el valor de la propiedad isVisited = true.

const cities = [
  { isVisited: true, name: "Tokyo" },
  { isVisited: false, name: "Madagascar" },
  { isVisited: true, name: "Amsterdam" },
  { isVisited: false, name: "Seul" },
];

const visitedCities = cities.map((city) => {
  if (city.isVisited === true) {
    return city.name + ": " + "Visited";
  } else {
    return city.name;
  }
});

console.log("The list of cities is: ", visitedCities);
