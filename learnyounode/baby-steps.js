numbers = process.argv.slice(2);

console.log(numbers.reduce((sum, x) => {
  return sum += parseInt(x, 0);
}, 0));