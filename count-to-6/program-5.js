module.exports = function average(...args) {
  let avg = 0;
  args.forEach((value) => {
    avg += value;
  });

  avg = avg/args.length;

  return avg;
};