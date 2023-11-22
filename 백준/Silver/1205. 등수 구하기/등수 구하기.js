const [N, newScore, P, ...list] = require('fs').readFileSync('/dev/stdin')
                                  .toString().trim().split(/\s/).map(v => +v);

const findRank = () => {
  const minScore = Math.min.apply(null, list);

  if(list.length === 0) return {score : newScore, rank : 1};

  if(list.length >= P && newScore <= minScore) return {score : newScore, rank : -1};

  const newList = list.concat(newScore);
  const sortedList = newList.sort((a,b) => b-a)
  const ranks = sortedList.map(v => {
    return {score : v, rank : sortedList.indexOf(v) + 1}
  });
  
  return ranks.find(rank => rank.score === newScore)
}

console.log(findRank().rank);