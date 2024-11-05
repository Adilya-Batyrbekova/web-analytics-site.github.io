const https = require('https');

const url = 'https://kodaktor.ru/api2/net.txt';
const targetCharCode = 48; // Десятичный ASCII-код символа "0"
let count = 0;

https.get(url, (res) => {
  res.on('data', (chunk) => {
    for (let i = 0; i < chunk.length; i++) {
      if (chunk[i] === targetCharCode) {
        count++;
      }
    }
  });

  res.on('end', () => {
    console.log(`Количество символов "0" в потоке: ${count}`);
  });

  res.on('error', (err) => {
    console.error('Ошибка при получении данных:', err.message);
  });
});