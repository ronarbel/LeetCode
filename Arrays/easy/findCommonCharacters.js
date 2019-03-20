var commonChars = function(A) {
  const words = A.map((word) => {
      const letterMap = {};
      for (let i = 0; i < word.length; i += 1) {
          if (!letterMap[word[i]]) {
              letterMap[word[i]] = 1;
          } else {
              letterMap[word[i]] += 1;
          }
      }
      return letterMap;
  });
  
  let seen = {};
  for (let i = 0; i < words.length; i += 1) {
      const firstWord  = words[0];
      for (let letter in firstWord) {
          if (firstWord[letter] && words[i][letter]) {
              if (!seen[letter]) {
                  seen[letter] = {
                      numberOfWordsIn: 1,
                      charRepeats: Math.min(firstWord[letter], words[i][letter])
                  }
              } else {
                  seen[letter].numberOfWordsIn += 1;
                  seen[letter].charRepeats = Math.min(
                      seen[letter].charRepeats,
                      words[i][letter]
                  );
              }
          }
      }
  }
  
  const result = []
  for (let letter in seen) {
      if (seen[letter].numberOfWordsIn === A.length) {
          for (let i = 0; i < seen[letter].charRepeats; i += 1) {
              result.push(letter);
          }
      }
  }
  return result;
};