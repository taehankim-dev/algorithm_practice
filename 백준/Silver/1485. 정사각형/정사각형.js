const inputs = require('fs').readFileSync('/dev/stdin').toString().trim()
               .toString().trim().split('\n');
const T = +inputs.shift();
let res = ""

const CalsDistance = (a,b) => {
  const [x1,y1] = a;
  const [x2,y2] = b;

  return Math.pow(Math.pow((x2-x1), 2) + Math.pow((y2-y1), 2), 0.5);
}

for(let i = 0; i < T; i++){
  const cases = inputs.slice(4*i, 4*i+4).map(v => v.split(" ").map(vv => +vv));
  cases.sort((a,b) => {
    if(a[0] < b[0]) return -1;
    else if(a[0] > b[0]) return 1;
    else {
      if(a[1] < b[1]) return -1
      else if(a[1] > b[1]) return 1;
      else return 0;
    }
  })

  //네 점의 중심점 구하기.
  const mid = cases.reduce((acc, cur) => {
    acc[0] += cur[0]
    acc[1] += cur[1]
    return acc;
  }, [0,0]).map(v => v/4)

  // 중심점과의 거리 구하기.
  const fromMidDis = [];
  for(let j = 0; j < 4; j++){
    fromMidDis.push(CalsDistance(mid, cases[j]))
  }

  // 중심점과의 거리가 다르다면 사각형이 아니므로 0.
  const fromMidDisUnique = new Set([...fromMidDis]);
  if(fromMidDisUnique.size !== 1) res += '0\n';
  else { // 거리가 같다면 회전시켜서 정사각형인지 확인.

    //원점을 중심으로 옮기기.
    const newCases = cases.map(v => {
      return [v[0] - mid[0], v[1] - mid[1]]
    })

    // 각 점을 90도 회전.
    const rotation = Array.from({length : 4}, () => []);
    for(let j = 0; j < 4; j++){
      rotation[j] = [(-1)*newCases[j][1], newCases[j][0]]
    }

    // 90도 회전시킨 점이 원점이 중심인 경우에 존재하는지 확인.
    const checking = rotation.map(rot => {
      if(newCases.findIndex((item) => item[0] === rot[0] && item[1] === rot[1]) === -1) {
        return false;
      } else return true;
    })

    if(checking.includes(false)) res += '0\n';
    else res += '1\n'
  }
}

console.log(res)