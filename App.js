// node App.js --> log
console.log('log');

// глобальные объекты
console.log(`Аргументы CLI: ${process.argv}`); // Массив аргументов командной строки

// ES-6 модули
// Запускать через npm start или node App.js
import { sum } from "./sum.js";
console.log(sum(5, 10)); // 15