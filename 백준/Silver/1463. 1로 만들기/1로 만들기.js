const X = parseInt(require('fs').readFileSync('/dev/stdin').toString().trim());
const answer = new Array(X+1).fill(0);
answer[2] = 1;
answer[3] = 1;

for(let i = 4; i <= X; i++){
    answer[i] = answer[i-1] + 1;
    if(i % 3 === 0) {
        answer[i] = Math.min(answer[i], answer[i/3] + 1);
    }
    
    if(i % 2 === 0){
        answer[i] = Math.min(answer[i], answer[i/2] + 1);
    }
}

console.log(answer[X]);