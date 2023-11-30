const [pos, ...commands] = require('fs').readFileSync('/dev/stdin')
                           .toString().trim().split("\n");

const move = {
  R : [1,0],
  L : [-1,0],
  B : [0,-1],
  T : [0,1],
  RT : [1,1],
  LT : [-1,1],
  RB : [1,-1],
  LB : [-1,-1]
}

const [kPos, sPos, N] = pos.split(" ");
const [kx, ky] = kPos.split("");
const [sx, sy] = sPos.split("");
let king = [kx.charCodeAt() - 64, +ky];
let stone = [sx.charCodeAt() - 64, +sy];

for(let i = 0; i < N; i++){
  const nx = king[0] + move[commands[i]][0];
  const ny = king[1] + move[commands[i]][1];

  if(nx > 0 && nx < 9 && ny > 0 && ny < 9){
    if(nx === stone[0] && ny === stone[1]){
      const mx = stone[0] + move[commands[i]][0];
      const my = stone[1] + move[commands[i]][1];

      if(mx > 0 && mx < 9 && my > 0 && my < 9){
        stone = [mx, my];
        king = [nx, ny];
      } else continue;
    } else king = [nx,ny];
  } else continue;
}

let result = `${String.fromCharCode(king[0] + 64)}${king[1]}\n`;
result += `${String.fromCharCode(stone[0] + 64)}${stone[1]}`;
console.log(result)