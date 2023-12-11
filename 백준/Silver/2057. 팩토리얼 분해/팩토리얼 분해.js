const num = BigInt(require('fs').readFileSync('/dev/stdin').toString().trim());

const factorial = (n) => {
  if(n === 0) return 1;
  return n * factorial(n-1);
}

const findAns = (n) => {
  if(n === 0n) return 'NO';

  const facs = new Array();
  let idx = 0;
  while(BigInt(factorial(idx)) <= n){
    facs[idx] = BigInt(factorial(idx));
    idx++;
  }

  let sum = n;
  for(let i = facs.length - 1; i >= 0; i--){
    if(sum >= facs[i]) sum -= facs[i];
  }

  if(sum === 0n) return 'YES';
  else return 'NO'
}

console.log(findAns(num))
