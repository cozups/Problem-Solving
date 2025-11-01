/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    // s 후처리: 대문자 -> 소문자, 숫자/영문자 아닌거 없애기
    let newStr = '';
    let lowerS = s.toLowerCase();
    for (let char of lowerS) {
        const charCode = char.charCodeAt(0)
        if ((charCode >= 'a'.charCodeAt(0) && charCode <= 'z'.charCodeAt(0)) || (charCode >= '0'.charCodeAt(0) && charCode <= '9'.charCodeAt(0))) {
            newStr += char;
        }
    }

    // 팰린드롬 체크: 투포인터
    let l = 0;
    let r = newStr.length - 1;

    while (l < r) {
        if (newStr[l] !== newStr[r]) {
            return false;
        }
        l++;
        r--;
    }
    return true;
};
