const fs = require('fs');

const inputs = fs.readFileSync('/dev/stdin').toString().trim().split(/\s+/).map(Number);
const answers = [];

for (const n of inputs) {
    let rem = 0;
    let len = 0;
    
    while(true) {
        rem = (rem * 10 + 1) % n;
        len += 1;
        if(rem === 0) {
            answers.push(String(len))
            break;
        }
    }
}

console.log(answers.join("\n"));