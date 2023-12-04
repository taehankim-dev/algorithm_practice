const inputs = require('fs').readFileSync('/dev/stdin')
               .toString().trim().split('\n')
const N = +inputs.shift();
inputs.sort();

const sortedArr = inputs.sort((a,b) => {
  if(a.length < b.length) return -1;
  else if(a.length > b.length) return 1;
  else {
    const sumA = a.split("").reduce((acc, cur) => {
      if(!isNaN(+cur)) acc += +cur;
      return acc;
    }, 0);
    const sumB = b.split("").reduce((acc, cur) => {
      if(!isNaN(+cur)) acc += +cur;
      return acc;
    }, 0);

    if(sumA < sumB) return -1;
    else if(sumA > sumB) return 1;
  }
})

console.log(sortedArr.join("\n"))