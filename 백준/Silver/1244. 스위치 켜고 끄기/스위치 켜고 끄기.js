const [N, switches, M, ...students] = require('fs').readFileSync('/dev/stdin')
                                      .toString().trim().split("\n");

const changeSwitches = () => {
  const answer = switches.split(" ").map(v => +v === 0 ? false : true);

  for(let i = 0; i < M; i++){
    const [gender, num] = students[i].split(" ").map(v => +v);
    if(gender === 1){
      let index = num;
      let times = 1;
      while(index <= N){
        answer[index-1] = !answer[index-1]
        times++;
        index = num * times;
      }
    } else {
      let index = num - 1;
      let count = 1;
      answer[index] = !answer[index];
      while(true){
        if(answer[index - count] !== answer[index + count] || count < 0 || count >= N) break;
        answer[index - count] = !answer[index-count]
        answer[index + count] = !answer[index + count]
        count++;
      }
    }
  }

  return answer;
}

const result = changeSwitches();
let answer = "";
result.forEach((res, i) => {
  if(i !== 0 && i % 20 === 0) answer += "\n";

  answer += `${res === true ? 1 : 0} `;
})

console.log(answer)