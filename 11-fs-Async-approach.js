// const fs = require('fs');
const { readFile, writeFile } = require('fs');
console.log('Start');

readFile('./content/subFolder/file.txt', (e, r) => {
    if (e) {
        console.log(e);
        return
    }
    
    const first = r;
    readFile('./content/subFolder/txt1.txt', (e, r) => {
        if (e) {
            console.log(r);
            return;
        }

        const second = r;
        writeFile('./content/3rd.txt', `The result: ${first}, ${second} `, (e, r) => {
            if (e) {
                console.log(r);
                return
            }
            console.log('Done With this Task');
        });
    });
});

console.log('Start the next Task ');