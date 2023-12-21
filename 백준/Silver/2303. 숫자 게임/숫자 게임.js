const [N, ...inputs] = require('fs').readFileSync('/dev/stdin')
                       .toString().trim().split("\n");

const findMaxVal = (array) => {
  const cards = array.split(" ").map(v => +v);
  const values = [];
  for(let i = 0; i < 3; i++){
    for(let j = i+1; j < 4; j++){
      for(let k = j+1; k < 5; k++){
        values.push(cards[i] + cards[j] + cards[k]);
      }
    }
  }

  const filtering = values.map(value => {
    const splits = value.toString().split("");
    return +splits[splits.length - 1]
  })

  return Math.max(...filtering);
}

const findAns = () => {
  const values = [];

  for(let i = 0; i < +N; i++){
    values.push(findMaxVal(inputs[i]))
  }

  let maxVal = -1;
  let maxIdx = -1;
    
  for(let i = 0; i < +N; i++){
    if(maxVal <= values[i]){
      maxVal = values[i];
      maxIdx = i+1;
    }
  }
  
  console.log(maxIdx)
}

findAns();