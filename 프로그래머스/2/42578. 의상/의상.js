function solution(clothes) {
    var answer = 1;
    const map = {};
    
    // 종류 별 개수 카운트
    for(let [name, category] of clothes) {
        map[category] = map[category] ? map[category] + 1 : 1;
    }
    
    // 종류 개수 + 1씩 곱한다. 1을 더하는 이유는 아예 사용하지 않는 경우가 있기 때문
    for(let category in map) {
        answer *= (1 + map[category]);
    }
    
    // 아무것도 안 입는건 불가능 하므로 1을 뺀다.
    return answer - 1;
}