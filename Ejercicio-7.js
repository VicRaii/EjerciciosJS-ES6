//! Ejercicio 7 - Reduce

//! 7.1
//TODO: Dado el siguiente array, haz una suma de todos las notas de los examenes de
//TODO: los alumnos usando la función .reduce().

const exams = [
  { name: "Yuyu Cabeza Crack", score: 5 },
  { name: "Maria Aranda Jimenez", score: 1 },
  { name: "Cristóbal Martínez Lorenzo", score: 6 },
  { name: "Mercedez Regrera Brito", score: 7 },
  { name: "Pamela Anderson", score: 3 },
  { name: "Enrique Perez Lijó", score: 6 },
  { name: "Pedro Benitez Pacheco", score: 8 },
  { name: "Ayumi Hamasaki", score: 4 },
  { name: "Robert Kiyosaki", score: 2 },
  { name: "Keanu Reeves", score: 10 },
];

const noteSum = exams.reduce((acc, currentExam) => acc + currentExam.score, 0);

console.log("The total score is: ", noteSum);

//! 7.2
//TODO: Dado el mismo array, haz una suma de todos las notas de los examenes de los
//TODO: alumnos que esten aprobados usando la función .reduce().

const passingExams = exams.filter((exam) => exam.score >= 5);

const totalPassedScore = passingExams.reduce(
  (acc, exam) => acc + exam.score,
  0
);

console.log("The total score of passing alumns is: ", totalPassedScore);

//! 7.3
//TODO: Dado el mismo array, haz la media de las notas de todos los examenes .reduce().

const averageScore = exams.reduce(
  (acc, exam) => acc + exam.score / exams.length,
  0
);

console.log("The average score is: ", averageScore);
