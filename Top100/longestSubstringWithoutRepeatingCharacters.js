const lengthOfLongestSubstring = function (s) {
  let maxSubstr = 0;
  const seen = {};
  let winStart = 0;
  for (let winEnd = 0; winEnd < s.length; winEnd += 1) {
    if (seen[s[winEnd]] === undefined) {
      seen[s[winEnd]] = winEnd;
      maxSubstr = Math.max(winEnd - winStart + 1, maxSubstr);
    } else {
      const newStart = seen[s[winEnd]] + 1;
      debugger;
      while (winStart < newStart) {
        delete seen[s[winStart]];
        winStart += 1;
      }
      seen[s[winEnd]] = winEnd;
      maxSubstr = Math.max(winEnd - winStart + 1, maxSubstr);
    }
  }
  return maxSubstr;
};

const s1 = 'hijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789hijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789hijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789hijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789hijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789hijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
console.log(lengthOfLongestSubstring(s1));
