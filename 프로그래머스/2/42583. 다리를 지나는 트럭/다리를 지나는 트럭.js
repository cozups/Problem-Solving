function solution(bridge_length, weight, truck_weights) {
    // 최대 bridge_length 대의 트럭
    // 최대 weight의 트럭 무게
    // 트럭은 1초에 1만큼 전진 -> 다리를 다 건너는데 bridge_length만큼 걸린다
    var answer = 0;
    let on = [];
    let currentWeight = 0;
    while(truck_weights.length > 0 || on.length > 0) {
        on = on.map(([truck, len]) => ([truck, len + 1]));
        answer++;
        
        if(on[0] && on[0][1] > bridge_length) {
            let truck = on.shift();
            currentWeight -= truck[0];
        }
        
        if(truck_weights[0] && currentWeight + truck_weights[0] <= weight) {
            let truck = truck_weights.shift();
            currentWeight += truck
            on.push([truck, 1]);
        }
    }
    
    return answer;
}