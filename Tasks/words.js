// Count words in a string

const countWordsInString = str => {
  return str.split(/[\s+]/).filter(element => element !== '').length;
}

require('../Tests/words.js')(countWordsInString);
