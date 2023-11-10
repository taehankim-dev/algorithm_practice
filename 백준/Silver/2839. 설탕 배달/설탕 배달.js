const input = +require('fs').readFileSync('/dev/stdin').toString();

const countFn = (number) => {
    let count = 0;
    while(number > 0){
        if(number % 5 === 0){
            number -= 5;
        } else {
            number -= 3;
        }
        count++;
    }
    
    return number === 0 ? count : -1;
}

console.log(countFn(input));