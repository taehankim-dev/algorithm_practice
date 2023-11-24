const [A, B] = require('fs').readFileSync('/dev/stdin') 
              .toString().trim().split(" ");

const findAns = () =>{
  let min = A.length;
  for(let i = 0; i <= B.length - A.length; i++){
    let curMin = 0;
    for(let j = i; j < i + A.length; j++){
      if(A[j-i] !== B[j]) curMin++;
    }

    if(curMin < min) min = curMin;
  }

  return min;
}

console.log(findAns())