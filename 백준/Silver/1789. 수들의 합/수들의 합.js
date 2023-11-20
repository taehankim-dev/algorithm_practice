const S = +require('fs').readFileSync('/dev/stdin').toString().trim();

function FindVal() {
    let count = 0;
    let sum = 1;
    let start = 2;

    while(sum <= S){
        sum += start;
        start++;
        count++;
    }

  return count;
}

console.log(FindVal());