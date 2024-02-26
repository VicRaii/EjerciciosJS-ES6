//! Ejercicio 2 - Destructuring

//! 2.1
// TODO: En base al siguiente javascript, crea variables en base a las propiedades
// TODO: del objeto usando object destructuring e imprimelas por consola. Cuidado,
// TODO: no hace falta hacer destructuring del array, solo del objeto.

const game = {
  title: "The last us 2",
  gender: ["action", "zombie", "survival"],
  year: 2020,
};

const { title: gameTitle, gender: gameGender, year: gameYear } = game;

console.log(gameTitle);
console.log(gameGender);
console.log(gameYear);

//! 2.2
// TODO: En base al siguiente javascript, usa destructuring para crear 3 variables
// TODO: llamadas fruit1, fruit2 y fruit3, con los valores del array. Posteriormente
// TODO: imprimelo por consola.

const fruits = ["Banana", "Strawberry", "Orange"];

const [fruit1, fruit2, fruit3] = fruits;

console.log(fruit1, fruit2, fruit3);

//! 2.3
// TODO: En base al siguiente javascript, usa destructuring para crear 2
// TODO: variables igualándolo a la función e imprimiéndolo por consola.

const animalFunction = () => {
  return { name: "Bengal Tiger", race: "Tiger" };
};

const { name: animalName, race: animalRace } = animalFunction();

console.log(animalName);
console.log(animalRace);

//! 2.4
// TODO: En base al siguiente javascript, usa destructuring para crear las
// TODO: variables name y itv con sus respectivos valores. Posteriormente crea
// TODO: 3 variables usando igualmente el destructuring para cada uno de los años
// TODO: y comprueba que todo esta bien imprimiendolo.

const car = { name: "Mazda 6", itv: [2015, 2011, 2020] };

const { name: carName, itv: carItv } = car;

console.log(carName);
console.log(carItv);

const [itvYear1, itvYear2, itvYear3] = carItv;

console.log(itvYear1);
console.log(itvYear2);
console.log(itvYear3);
