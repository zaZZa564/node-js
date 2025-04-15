// node App.js --> log
console.log('log');

// глобальные объекты
console.log(`Директория: ${__dirname}`); // Directory: C:\Users\barab\OneDrive\Документы\repos\node-js
console.log(`Аргументы CLI: ${process.argv}`); // Массив аргументов командной строки

// ES-6 модули
import { sum } from "./sum";
console.log(sum(5, 10)); // 15