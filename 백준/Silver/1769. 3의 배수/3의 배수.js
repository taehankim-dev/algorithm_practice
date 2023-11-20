const inputs = require('fs').readFileSync('/dev/stdin').toString().trim()
              .split('').map(v => +v);
let numbers = inputs;

function HowManySum() {
  let sum;
  let count = 0;

  if(inputs.length === 1){
    sum = +inputs[0];
  } else {
    while(true){
      sum = numbers.reduce((acc, cur) => acc += cur, 0);
      count++;

      if(sum.toString().length === 1) break;

      numbers = sum.toString().split("").map(v => +v);
      
    }
  }

  return {
    answer : sum % 3 === 0 ? 'YES' : 'NO',
    count : count
  }
}

console.log(`${HowManySum().count}\n${HowManySum().answer}`);