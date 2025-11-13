function solution(participant, completion) {
    var answer = '';
    
    let map = {}
    for(let person of participant) {
        map[person] = map[person] ? map[person] + 1 : 1;
    }
    
    for(let person of completion) {
        map[person] -= 1;
    }
    
    for(let person in map) {
        if(map[person] === 1) {
            answer = person;
            break;
        }
    }
    
    
    return answer;
}