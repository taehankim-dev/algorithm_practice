const [N, L, W, H] = require('fs').readFileSync('/dev/stdin')
                      .toString().trim().split(" ").map(v => +v);

let [lp, rp] = [0, 1000000000];
let ans;
for(let i = 0; i < 10000; i++){
  const mid = (lp + rp) / 2;
  if(Math.floor(L / mid) * Math.floor(W / mid) * Math.floor(H / mid) >= N){
    lp = mid;
    ans = mid;
  } else {
    rp = mid;
  }
}

console.log(ans.toFixed(9))