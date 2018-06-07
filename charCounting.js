function countLetters(raw_string) {
  var string = raw_string.split(' ').join('').toLowerCase();
  var result = {};
  for (var i = 0; i < string.length; i++) {
    if (result[string[i]]) {
      result[string[i]].push(i);
    } else {
      result[string[i]] = [i]
    }
  }
  return result;
}
console.log(countLetters('lighthouse in the house'));
