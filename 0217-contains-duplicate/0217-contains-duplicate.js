/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // nums 배열에 두번 이상 나타나는 숫자가 있으면 true, 아니면 false
    // 빈도수 체크 => 객체 이용
    // 숫자 -> 객체에 존재하는지 확인 후 존재하면 false, 없으면 객체에 추가
    const freq = {};
    for(let num of nums) {
        if(!freq[num]) {
            freq[num] = 1;
        } else return true;
    }

    return false;
};