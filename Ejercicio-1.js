//! Ejercicio 1

// TODO: Crea una arrow function que tenga dos parametros a y b y
// TODO: que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre
// TODO: por consola la suma de los dos parametros.

const sum = (a = 10, b = 5) => console.log(a + b);
sum();

// TODO: 1.1 Ejecuta esta función sin pasar ningún parámetro.
sum();

// TODO: 1.2 Ejecuta esta función pasando un solo parametro
sum(20);

// TODO: 1.3 Ejecuta esta función pasando dos parametros
sum(20, 40);
