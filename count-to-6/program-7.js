module.exports = ((string, length = string.length) => {
  return (`${string}${'!'.repeat(length)}`);