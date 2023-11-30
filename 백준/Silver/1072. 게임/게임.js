const [X, Y] = require('fs').readFileSync('/dev/stdin') 
              .toString().trim().split(" ").map(v => +v);

const findAns = () => {
  if(X === Y) return -1;

  const Z = Math.floor( 100 * Y / X);
  let lp = 1;
  let rp = 1000000000;
  let ans = Infinity;

  while(lp <= rp){
    const mid = parseInt((lp + rp) / 2);
    const newZ = Math.floor( 100 * (Y + mid) / (X + mid));
    if(newZ !== Z){
      ans = Math.min(ans, mid);
      rp = mid - 1;
    } else {
      lp = mid + 1;
    }
  }

  return ans === Infinity ? -1 : ans;
}

console.log(findAns());