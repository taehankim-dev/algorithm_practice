const num = +require('fs').readFileSync('/dev/stdin')
            .toString().trim();

const findAns = () => {
  let lt = 1;
  let rt = 1;
  let sum = 1;
  let ans = 0;
  while(lt <= rt){
    if(num === sum) ans++;
    if(sum < num){
      rt++;
      sum += rt;
    } else {
      sum -= lt;
      lt++;
    }
  }

  return ans;
}

console.log(findAns());