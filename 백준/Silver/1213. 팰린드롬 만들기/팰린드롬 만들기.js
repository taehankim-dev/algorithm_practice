const inputs = require('fs').readFileSync('/dev/stdin') 
              .toString().trim().split("").sort();

const [head, body] = [[], []];
while(inputs.length){
  const first = inputs.shift();
  const idx = inputs.indexOf(first);
  if(idx === -1) body.push(first);
  else {
    head.push(first);
    inputs.splice(idx, 1);
  }
}

const tail = [...head].reverse().join("");
if(body.length > 1) console.log("I'm Sorry Hansoo");
else console.log(head.join("") + body.join("") + tail)