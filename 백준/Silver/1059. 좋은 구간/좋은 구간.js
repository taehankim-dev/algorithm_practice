const [L, S, n] = require('fs').readFileSync('/dev/stdin')
                  .toString().trim().split('\n');
const nums = S.split(" ").map(v => +v).sort((a,b) => a-b);

const findAns = () => {
  if(nums.find(num => num === +n)) return 0;

  let minVal = 0;
  let maxVal = 0;

  nums.forEach(num => {
    if(num < n) minVal = num;
    else if(num > n && maxVal === 0) maxVal = num;
  })

  maxVal -= 1
  minVal += 1

  return ((n-minVal) * (maxVal-n+1) + (maxVal-n))
}

console.log(findAns())