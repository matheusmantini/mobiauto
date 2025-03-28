function maskify(string) {
  if (string.length <= 4) {
    return string;
  }

  let maskedString = "#".repeat(string.length - 4) + string.slice(-4);

  return maskedString;
}

module.exports = maskify;
