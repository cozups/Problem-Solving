function solution(cards1, cards2, goal) {
    var answer = 'Yes';
    
    while(goal.length > 0) {
        const currentGoal = goal[0];
        
        if(cards1[0] !== currentGoal && cards2[0] !== currentGoal) {
            answer = 'No';
        } else if(cards1[0] === goal[0]) {
            cards1 = cards1.slice(1);
        } else {
            cards2 = cards2.slice(1);
        }
        goal = goal.slice(1);
    }
    
    return answer;
}