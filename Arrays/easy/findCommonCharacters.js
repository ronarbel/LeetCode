/* eslint-disable */
var commonChars = function(A) {
  const words = A.map((word) => {
      const letterMap = {};
      for (let i = 0; i < word.length; i += 1) {
          let letter = word[i];
          if (!letterMap[letter]) {
              letterMap[letter] = 1;
          } else {
              letterMap[letter] += 1;
          }
      }
      return letterMap;
  });
  
  let seen = {};
  for (let i = 1; i < words.length; i += 1) {
      const firstWord  = words[0];
      const currentWord = words[i];
      for (let letter in firstWord) {
          if (firstWord[letter] && currentWord[letter]) {
              if (!seen[letter]) {
                  seen[letter] = {
                      numberOfWordsIn: 1,
                      minRepeats: Math.min(firstWord[letter], currentWord[letter])
                  }
              } else {
                  seen[letter].numberOfWordsIn += 1;
                  seen[letter].minRepeats = Math.min(
                      seen[letter].minRepeats,
                      currentWord[letter]
                  );
              }
          }
      }
  }
  
  const result = []
  for (let letter in seen) {
      if (seen[letter].numberOfWordsIn === A.length) {
          for (let i = 0; i < seen[letter].minRepeats; i += 1) {
              result.push(letter);
          }
      }
  }
  return result;
};