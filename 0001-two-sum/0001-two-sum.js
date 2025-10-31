/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // nums 배열 안에 합이 target이 되는 요소의 인덱스 반환
    // 정렬 x -> 투포인터 x
    const freq = {};

    // 루프를 돌면서 해당 값을 가진 마지막 인덱스 저장
    for(let i = 0; i < nums.length; i++) {
        freq[nums[i]] = i;
    }

    // 다시 루프를 돌면서 target-nums[i]이 존재하고 자기 자신이 아니면 반환
    for(let i = 0; i < nums.length; i++) {
        if(freq[target-nums[i]] >= 0 && freq[target-nums[i]] !== i) {
            return [i, freq[target-nums[i]]];
        }
    }
};