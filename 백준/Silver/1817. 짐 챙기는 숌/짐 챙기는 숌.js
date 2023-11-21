const [N, M, ...books] = require('fs').readFileSync('/dev/stdin').toString().trim()
                         .split(/\s/).map(v => +v);

const findAns = () => {
  if(N === 0) return 0;

  let sum = 0;
  let count = 1;
  for(let i = 0; i < N; i++){
    sum += books[i];
    count++;

    if(sum <= M) count--;
    else if(sum > M) {
      sum = 0;
      i--;
    }
  }

  return count;
}

console.log(findAns());