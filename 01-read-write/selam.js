const fs = require('node:fs');

fs.writeFile('selam.txt', 'Selamlar baylar!\n', (err) => {
  if (err) throw err;
  console.log('Selam dosyasına yazıldı!');
});


fs.readFile('selam.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('Dosya içeriği:', data);
});

