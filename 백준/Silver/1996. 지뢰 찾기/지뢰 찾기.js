const inputs = require('fs').readFileSync('/dev/stdin') 
              .toString().trim().split('\n');
const N = +inputs.shift();
const mine = Array.from({length : N}, () => new Array(N).fill(0));

const isInArray = (y, x) => {
  if(y >= 0 && y < N && x >= 0 && x < N && inputs[y][x] !== '.') return true;

  return false;
}

const dx = [-1, -1, -1, 0, 0, 1, 1, 1];
const dy = [-1, 0, 1, -1, 1, -1, 0, 1]

for(let i = 0; i < N; i++){
  for(let j = 0; j < N; j++){
    if(inputs[i][j] !== '.'){
      mine[i][j] = '*';
    } else {
      let cnt = 0;
      for(let k = 0; k < 8; k++){
        let nx = i + dx[k];
        let ny = j + dy[k];

        if(isInArray(nx, ny)){
          cnt += +inputs[nx][ny]
        }
      }
      if(cnt >= 10) mine[i][j] = 'M';
      else mine[i][j] = cnt.toString();
    }
  }
}

let result = "";
mine.forEach(line => {
  line.forEach(item => {
    result += item;
  })

  result += '\n';
})

console.log(result);