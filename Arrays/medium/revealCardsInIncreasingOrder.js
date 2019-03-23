var deckRevealedIncreasing = function(deck) {
  if (!deck.length) return
  deck = deck.sort((a, b) => a - b);
  let q = new Array(deck.length);
  for (let i = 0; i < q.length; i += 1) {
      q[i] = i
  }
  
  let result = new Array(deck.length)
  
  while (q.length) {
      let cardPlace = q.shift();
      let card = deck.shift()
      result[cardPlace] = card;
      
      if (q.length) q.push(q.shift())
  }
  return result;
};