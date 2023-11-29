const [N, M, ...graph] = require('fs').readFileSync('/dev/stdin') 
                      .toString().trim().split(/\s/);

let size = 1;
let width = 0;

for(let i = 0; i < +N; i++){
  for(let j = 0; j < +M; j++){
    const start = graph[i][j];
    for(let k = j+1; k < +M; k++){
      if(graph[i][k] === start){
        width = k - j + 1;
        if(i + width - 1 < N &&
           start === graph[i + width - 1][j] &&
           graph[i + width - 1][j] === graph[i + width - 1][k] &&
           width * width > size
          ) {
            size = width * width
          }
      }
    }

  }
}

console.log(size);