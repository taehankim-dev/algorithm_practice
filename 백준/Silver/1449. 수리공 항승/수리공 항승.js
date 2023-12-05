const [N, L, ...pos] = require('fs').readFileSync('/dev/stdin')
                       .toString().trim().split(/\s/).map(v => +v);

// 물이 새는 곳 오름차순 정렬.
const sortedPos = pos.sort((a,b) => a-b);

const findAns = () => {
  let tapes = 0;

  while(true){
    if(sortedPos.length === 0) break;
    const minPos = sortedPos.shift() - 0.5;
    const maxPos = minPos + L
    for(let i = 0; i < sortedPos.length; i++){
      if(minPos < sortedPos[i] && sortedPos[i] < maxPos){
        sortedPos.shift();
        i--;
      } 

      if(sortedPos[i] > maxPos) break;
    }
    tapes++;
  }
  
  return tapes;
}

console.log(findAns())