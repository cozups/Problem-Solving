function solution(priorities, location) {
    var answer = 0;
    
    for(let i = 0; i < priorities.length; i++) {
        priorities[i] = [priorities[i], i];
    }
    
    let queue = [];
    let len = priorities.length;
    let turn = 1;
    while(priorities.length > 0) {
        let current = priorities.shift();
        if(priorities.find(process => process[0] > current[0])) {
            // 우선순위 높은거 찾으면 다시 push
            priorities.push(current);
        } else {
            if(location === current[1]) return turn;
            turn++;
        }
    }
    
    return answer;
}