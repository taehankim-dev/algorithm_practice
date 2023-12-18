const input = +require('fs').readFileSync('/dev/stdin').toString().trim();
const findAns = (n) => {
    if(n < 3) return 4;
    for(let i = 2; i < n; i++){
        if(n <= i * i) return (i-1)*4;
        else if(n <= i * (i+1) ) return (i-1)*4+2;
    }
    return 0;
}
console.log(findAns(input))