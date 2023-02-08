// 1. Stwórz dokument HTML. Stwórz plik main.js w odpowiednim folderze i podepnij go pod plik HTML, a w nim dwie zmienne:

// let num1 = 2;
// let num2 = 5;
// 2. Następnie napisz funkcję, która pobiera te dwie zmienne jako parametry.

// 3. Funkcja zwraca większą liczbę.

// Następnie wynik działania funkcji wyświetl w konsoli.

// Plik wgraj do repozytorium zdalnego i podeślij link do sprawdzenia.

let a = 2;
let b = 5;

function number(num1,num2) {
  let result = Math.max(num1,num2);
  return result;
}
console.log(number(a,b));
