function checkIfTheFirstLetterIsUppercase(word) {
  if (word.length === 0) return false;

  return word[0] === word[0].toUpperCase();
}

module.exports = checkIfTheFirstLetterIsUppercase;
