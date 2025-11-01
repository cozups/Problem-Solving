/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length === 0) return 0;
    
    let l = 0;
    let r = 1;

    const freq = {};
    let maxLen = 1;
    freq[s[0]] = 1;
    
    while(r < s.length) {
        if(freq[s[r]]) {
            freq[s[l]] = freq[s[l]] - 1;
            l++;
        } else {
            maxLen = Math.max(maxLen, r - l + 1);
            freq[s[r]] = 1;
            r++;
        }
    }

    return maxLen;
};