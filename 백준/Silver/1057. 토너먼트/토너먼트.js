const [N, a, b] = require('fs').readFileSync('/dev/stdin')
                  .toString().split(" ").map(v => +v);
let member = Array.from({length : N} , (_, i) => i+1);
let round = 1;

while(true){
  let torf = false;
  let winners = [];

  for(let i = 0; i < N; i += 2){
    let [n1, n2] = [member[i] , member[i+1]];
    if(n2 === undefined){ // member가 홀수명인지 확인.
      winners.push(n1);
    } else if ( [a,b].includes(n1) || [a,b].includes(n2) ) {
      // 김지민이거나 임한수일 경우.
      if([a,b].includes(n1) && [a,b].includes(n2)){
        // 김지민이고 임한수일 경우.
        torf = true;
        break;
      } else {
        if([a,b].includes(n1)){
          winners.push(n1);
        } else {
          winners.push(n2);
        }
      }
    } else {
      winners.push(n2);
    }
  }

  if(torf) break;

  round++;
  member = winners;
}

console.log(round)