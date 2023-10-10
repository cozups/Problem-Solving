/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const hashSet = {};

  for (let c of s) {
    hashSet[c] = !hashSet[c] ? 1 : hashSet[c] + 1;
  }

  for (let c of t) {
    if (!hashSet[c]) return false;
    hashSet[c] -= 1;
  }

  for (let item in hashSet) {
    if (hashSet[item] > 0) return false;
  }

  return true;
};

console.log(isAnagram('anagram', 'nagaram'));
