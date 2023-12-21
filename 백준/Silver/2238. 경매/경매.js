const inputs = require('fs').readFileSync('/dev/stdin')
               .toString().trim().split('\n');
const [U,N] = inputs.shift().split(" ").map(v => +v);

const findAns = () => {
  const payment = Array.from({length : 10001}, () => []);
  const counts = new Array(10001).fill(0);
  for(let i = 0; i < N; i++){
    const [S, P] = inputs[i].split(" ");
    payment[+P].push(S);
    counts[+P]++
  }

  let min = Infinity;
  counts.filter(count => count !== 0).map(item => {
    if(min > item) min = item;
  })

  let findIndex = counts.findIndex(count => count === min);
  console.log(payment[findIndex][0], findIndex);
}

findAns();