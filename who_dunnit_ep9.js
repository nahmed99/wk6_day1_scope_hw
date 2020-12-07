// Episode 9

let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

// Prediction:
// The murderer is Professor Plum. The variable murderer within the if, is only in-scope within the if structure, and so does not impact the murderer variable at the top of the program.