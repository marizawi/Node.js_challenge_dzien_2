const fs = require('fs');

fs.readFile('./data/zadanieDnia/test.txt', 'utf8', (err, data) =>{
    if (err === null) {
        console.log('Poprawnie odczytano plik.', data);
        let output = "";
        for (let i = 0; i < data.length; i++) {
            if (i % 2 === 0) {
                output += data[i].toUpperCase();
            } else {
                output += data[i].toLowerCase();
            }
        }
        fs.writeFile('./data/zadanieDnia/test.txt', output, err => {
            if (err === null){
                console.log('Zapisano poprawnie!');
            } else {
                console.log('Błąd podczas zapisu pliku!', err);
            }
        });
    } else {
        console.log('Błąd podczas odczytu pliku!', err);
    }
});