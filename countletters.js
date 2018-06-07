var countLetters = function (string) {
  result = {};
  for (var i = 0; i < string.length; i++) {
    if (result[string[i]]) {
      result[string[i]] += 1;
    } else {
      result[string[i]] = 1;
    }
  }
  delete result[' '];
  return result;
}

console.log(countLetters('lighthouse in the house'));


