/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // s와 t가 애너그램이면 true, 아니면 false
    // 애너그램 확인 방법: 빈도수가 같은지 확인 -> 빈도수 객체
    // s 빈도수 체크 -> t 문자열의 문자가 등장 하지 않으면 false, 등장하면 -1
    // 객체가 모두 0이어야 애너그램
    // 추가: 길이가 다르면 false
    if(s.length !== t.length) return false;

    const freq = {};
    for(let char of s) {
        freq[char] = freq[char] + 1 || 1;
    }

    for(let char of t) {
        if(!freq[char]) return false;
        if(freq[char]) freq[char]--;
    }

    // 길이 체크를 하기 때문에 0 이상의 값이 남는지 확인할 필요가 없다.
    return true;
};