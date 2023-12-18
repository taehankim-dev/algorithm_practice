const inputs = require('fs').readFileSync('/dev/stdin')
               .toString().trim().split("\n")
const [N, M] = inputs.shift().split(' ').map(v => +v)
const graph = Array.from({length : N}, () => new Array(M).fill());

for(let i = 0; i < N; i++){
  const temp = inputs.shift().split(" ").map(v => +v);
  for(let j = 0; j < M; j++){
    graph[i][j] = temp[j]
  }
}

const K = +inputs.shift();

const findAns = (arr) => {
  const [i,j,x,y] = arr.split(" ").map(v => +v-1);
  let sum = 0;

  for(let a = i; a <= x; a++){
    for(let b = j; b <= y; b++){
      sum += graph[a][b];
    }
  }

  return sum;
}

let answer = ""
for(let i = 0; i < K; i++){
  answer += `${findAns(inputs[i])}\n`
}

console.log(answer)