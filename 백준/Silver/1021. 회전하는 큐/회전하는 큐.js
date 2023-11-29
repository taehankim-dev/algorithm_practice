const [N, M, ...nums] = require('fs').readFileSync('/dev/stdin')
                         .toString().trim().split(/\s/).map(v => +v);

const queue = Array.from({length : N}, (_, i) => i+1);
let count = 0;

const ReftPush = (arr) => {
  const first = arr.shift();
  arr.push(first);
  return arr;
}

const RightPush = (arr) => {
  const last = arr.pop();
  for(let i = arr.length; i > 0; i--){
    arr[i] = arr[i-1]
  }
  arr[0] = last;
  return arr;
}

for(let i = 0; i < M; i++){
  let target = nums[i];
  while(true){
    if(queue[0] === target) {
      queue.shift();
      break;
    }
    
    const targetIndex = queue.findIndex(item => item === target);
    const rightCnt = queue.length - targetIndex;
    if(targetIndex <= rightCnt) ReftPush(queue);
    else RightPush(queue);

    count++;
  }
}

console.log(count)