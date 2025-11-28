function solution(array, commands) {
    var answer = [];
    
    for(let [i, j, k] of commands) {
        let arr = array.slice(i-1, j);
        arr = arr.sort((a, b) => a - b);
        
        answer.push(arr[k - 1]);        
    }
    
    return answer;
}