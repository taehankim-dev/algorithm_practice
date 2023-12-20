const inputs = require('fs').readFileSync('/dev/stdin')
               .toString().trim().split("\n");
const [N, M] = inputs.shift().split(" ").map(v => +v);
let ans = Infinity;
let set = new Set();

const scaleMap = new Map([
  ["A", 1],
  ["A#", 2],
  ["B", 3],
  ["C", 4],
  ["C#", 5],
  ["D", 6],
  ["D#", 7],
  ["E", 8],
  ["F", 9],
  ["F#", 10],
  ["G", 11],
  ["G#", 12]
]);

const play = (scales, code, difficulty, depth) => {
  if (depth === scales.length) {
    let l = 987654321, r = 0;
    for (let i = 0; i < scales.length; ++i) {
        set.add(difficulty[i][0]);

        if (difficulty[i][1] !== 0) {
            r = Math.max(r, difficulty[i][1]);
            l = Math.min(l, difficulty[i][1]);
        }
    }

    if (set.size === code.length) {
        if (l === 987654321) {
            ans = 0;
        } else if (r - l + 1 < ans) {
            ans = r - l + 1;
        }
    }

    set.clear();
    return;
  }

  for (let i = 0; i < code.length; ++i) {
      difficulty[depth][0] = code[i];
      difficulty[depth][1] = code[i] - scales[depth] + (code[i] >= scales[depth] ? 0 : 12);
      play(scales, code, difficulty, depth + 1);
      difficulty[depth][1] += 12;
      play(scales, code, difficulty, depth + 1);
  }
}

const main = () => {
  const scales = inputs.shift().split(" ").map(item => scaleMap.get(item));
  const codes = inputs.shift().split(" ").map(item => scaleMap.get(item));
  const difficulty = new Array(N).fill(null).map(() => [0,0]);

  play(scales, codes, difficulty, 0);

  console.log(ans);
}

main();