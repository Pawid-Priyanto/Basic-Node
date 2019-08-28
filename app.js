// easy way
function isPolindrum(str) {
  return str === str.split('').reverse().join('');
}


// cara ribet
function isPolindrum(str) {
  return str.split('').every((char,i) => {
    return char === str[str.length -i -1];
  });
}

console.log(isPolindrum('anna')); // true
console.log(isPolindrum('annabe')); // false
console.log(isPolindrum('pa abccba ap')); //guest what?

