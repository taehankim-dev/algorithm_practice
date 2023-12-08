let nums = require('fs').readFileSync('/dev/stdin')
              .toString().trim().split("")
const findAns = () => {
  let n = 0;
  while(true){
    n++;
    let num = n.toString();
    while(num.length > 0 && nums.length > 0){
      if(num[0] === nums[0]){
        nums = nums.slice(1);
      }
      num = num.slice(1);
    }

    if(nums.length === 0){
      return n;
    }
  }
}
console.log(findAns());