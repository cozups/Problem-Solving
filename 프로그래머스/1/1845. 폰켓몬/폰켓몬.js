function solution(nums) {
    var answer = 0;
    
    const set = new Set(nums);
    if(set.size >= nums.length / 2) {
        answer = nums.length / 2;
    } else {
        answer = set.size;
    }
    
    return answer;
}