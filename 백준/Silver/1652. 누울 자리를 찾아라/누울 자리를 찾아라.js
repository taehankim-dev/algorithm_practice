const [N, ...inputs] = require('fs').readFileSync('/dev/stdin')
                       .toString().split('\n');

const findRowAns = () => {
  let rowAns = 0;

  for(let i = 0; i < +N; i++){
    let rowTemp = 0;
    for(let j = 0; j < +N; j++){
      if(inputs[i][j] === '.'){
        rowTemp++;
      } else if(inputs[i][j] === 'X'){
        rowTemp = 0;
      }

      if(rowTemp === 2) rowAns++;
    }
  }

  return rowAns;
}

const findColAns = () => {
  let colAns = 0;

  for(let i = 0; i < +N; i++){
    let colTemp = 0;
    for(let j = 0; j < +N; j++){
      if(inputs[j][i] === '.'){
        colTemp++;
      } else if(inputs[j][i] === 'X'){
        colTemp = 0;
      }

      if(colTemp === 2) colAns++;
    }
  }

  return colAns;
}

console.log(`${findRowAns()} ${findColAns()}`)