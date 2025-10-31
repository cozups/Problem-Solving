/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    // strs내 문자열 중에서 애너그램 관계인 것들끼리 묶어 반환
    // 정답 보고 풀었음.
    // 각 문자열의 빈도를 체크해서 빈도 개수를 key로 놓고, 그에 해당하는 문자열 배열을 값으로 놓는다.
    const map = {};
    for (let i = 0; i < strs.length; i++) {
        const freq = new Array(26).fill(0);
        for (let char of strs[i]) {
            freq[char.charCodeAt(0) - 97]++;
        }
        const key = freq.join(",");
        map[key] = map[key] || [];
        map[key].push(strs[i]);
    }

    return Object.values(map);
};