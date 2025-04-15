// node App.js --> log
console.log('log');

// глобальные объекты
console.log(`Аргументы CLI: ${process.argv}`); // Массив аргументов командной строки

// ES-6 модули
// Запускать через npm start или node App.js
import { sum } from "./sum.js";
console.log(sum(5, 10)); // 15

// встроенные модули
import fs from 'fs';
// Асинхронная запись файла
fs.writeFile('new.txt', 'Hello, Node.js!', (err) => {
  if (err) throw err;
  console.log('Файл создан!');
});

// создание сервера
import http from 'http';
const server = http.createServer((request, response) => {
  response.writeHead(200, { 'content-type': 'text/html' });
  response.end('<h1>Hello, World!</h1>');
});
server.listen(3000, () => {
  console.log('Сервер запущен на http://localhost:3000');
});