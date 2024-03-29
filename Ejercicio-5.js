//! Ejercicio 5 - Filter

//! 5.1
// TODO: Dado el siguiente array, utiliza .filter() para generar un nuevo array
// TODO: con los valores que sean mayor que 18

const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

console.log(
  "The numbers bigger than 18 are: ",
  ages.filter((age) => age > 18)
);

//! 5.2
// TODO: Dado el siguiente array, utiliza .filter() para generar un nuevo array
// TODO: con los valores que sean par.

console.log(
  "The even numbers are: ",
  ages.filter((age) => age % 2 === 0)
);

//! 5.3
// TODO: Dado el siguiente array, utiliza .filter() para generar un nuevo array
// TODO: con los streamers que tengan el gameMorePlayed = 'League of Legends'.

const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const LolGamers = streamers.filter((player) => {
  if (player.gameMorePlayed === "League of Legends") {
    return player.name;
  }
});

console.log("The LoL streamers are: ", LolGamers);

//! 5.4
// TODO:Dado el siguiente array, utiliza .filter() para generar un nuevo array
// TODO:con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos
// TODO: usar la funcion .includes() para la comprobación.

const streamersWithAnUletter = streamers.filter((streamer) =>
  streamer.name.includes("u")
);

console.log("The streamers with an 'U' letter are: ", streamersWithAnUletter);

//! 5.5
// TODO: utiliza .filter() para generar un nuevo array con los streamers que incluyan
// TODO: el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion
// TODO: .includes() para la comprobación.
// TODO: Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando
// TODO: .age sea mayor que 35.

const legendsArray = streamers.filter((streamer) => {
  if (streamer.gameMorePlayed.includes("Legends")) {
    return true;
  }
});

const olderStreamers = legendsArray.map((streamer) => {
  if (streamer.age > 35) {
    return {
      ...streamer,
      gameMorePlayed: streamer.gameMorePlayed.toUpperCase(),
    };
  } else {
    return streamer;
  }
});

console.log("The legends streamers are: ", olderStreamers);
