const fs = require('fs');

fs.readFile('./data/zadanie01/input.json', 'utf8', (err, data) => {
    if (err === null) {
        const numbers = JSON.parse(data);
        let sum = 0;
        for (let i = 0; i < numbers.length; i++) {
            sum += numbers[i];
        }

        fs.writeFile('./data/zadanie01/sum.txt', sum, err => {
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