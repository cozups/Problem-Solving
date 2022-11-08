/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// first solution
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const S = Array.from(s).sort();
  const T = Array.from(t).sort();

  for (let i = 0; i < S.length; i++) {
    if (S[i] !== T[i]) {
      return false;
    }
  }

  return true;
};

// other solution
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const counts = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    counts[s.charCodeAt(i) - 97]++;
    counts[t.charCodeAt(i) - 97]--;
  }

  for (let c of counts) {
    if (c !== 0) return false;
  }

  return true;
};

// 효율은 두번째 솔루션이 더 좋았다.
// hashmap을 의도한 문제같은데 자바스크립트로 hashmap을 구현해서 쓰니까 효율이 제일 안 좋았다.
