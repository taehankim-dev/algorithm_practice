const [N, M, ...items] = require('fs').readFileSync('/dev/stdin').toString().trim()
                        .split(/\s/).map(v => +v);

const packages = [];
const pieces = [];

for(let i = 0; i < items.length; i+=2){
  packages.push(items[i]);
  pieces.push(items[i+1]);
}

const packMin = Math.min.apply(null, packages);
const pcMin = Math.min.apply(null, pieces);
const packCount = Math.floor(N / 6);
const pcCount = N - 6 * packCount;

let cost;

if(packMin / 6 < pcMin){
  cost = packCount * packMin + (pcCount * pcMin < packMin ? pcCount * pcMin : packMin);
} else {
  cost = N * pcMin;
}

console.log(cost)