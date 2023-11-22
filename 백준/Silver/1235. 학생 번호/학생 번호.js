const [N, ...students] = require('fs').readFileSync('/dev/stdin')
                          .toString().trim().split('\n');

const findAns = () => {
  let sliceArr = [];
  let num = 1;

  while(true){
    students.forEach(student => {
      const stringLength = student.length;
      sliceArr.push(student.slice(stringLength - num));
    })

    const newSet = new Set([...sliceArr]);
    if(newSet.size === sliceArr.length) break;
    else {
      num++;
      sliceArr = [];
    } 
  }
  return num;
}

console.log(findAns());