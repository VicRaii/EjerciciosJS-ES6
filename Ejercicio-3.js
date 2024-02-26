//! Ejercicio 3 - Spread Operator

//!3.1
// TODO: Dado el siguiente array, crea una copia usando spread operators.
const pointsList1 = [32, 54, 21, 64, 75, 43];

const newPointList1 = [...pointsList1];

console.log("The new list is: ", newPointList1);

//! 3.2
// TODO: Dado el siguiente objeto, crea una copia usando spread operators.
const toy = { name: "Bus laiyiar", date: "20-30-1995", color: "multicolor" };

const newToy = { ...toy };

console.log(newToy);

//! 3.3
// TODO: Dado los siguientes arrays, crea un nuevo array juntándolos usando
// TODO: spread operatos.
const pointsList2 = [32, 54, 21, 64, 75, 43];
const pointsLis3 = [54, 87, 99, 65, 32];

const newPointListsArray = [...pointsList2, ...pointsLis3];

console.log("The new point list is: ", newPointListsArray);

//! 3.4
// TODO: Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos
// TODO: con spread operators.
const toy2 = { name: "Bus laiyiar", date: "20-30-1995", color: "multicolor" };
const toyUpdate = { lights: "rgb", power: ["Volar like a dragon", "MoonWalk"] };

const newListOfToys = { ...toy2, ...toyUpdate };

console.log(newListOfToys);

//! 3.5
// TODO: Dado el siguiente array. Crear una copia de él eliminando la posición 2
// TODO: pero sin editar el array inicial. De nuevo, usando spread operatos.
const colors = ["rojo", "azul", "amarillo", "verde", "naranja"];

const newArrayOfColors = [...colors.slice(0, 1), ...colors.slice(2, 5)];

console.log(newArrayOfColors);
