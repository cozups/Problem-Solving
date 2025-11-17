function solution(s){
    var answer = true;
    let stack = [];

    for(let char of s) {
        if(char === '(') {
            stack.push(char);
        } else if(stack.length === 0) {
            return false;
        } else {
            stack.pop();
        }
    }
    
    if(stack.length > 0) return false;

    return answer;
}