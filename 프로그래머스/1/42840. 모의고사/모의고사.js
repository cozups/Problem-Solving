function solution(answers) {
    var answer = [];
    
    // 정답 패턴
    const pattern1 = [1, 2, 3, 4, 5];
    const pattern2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const pattern3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    // 정답 개수 배열
    const correct = [0, 0, 0];
    
    // 채점
    answers.forEach((answer, i) => {
        if(answer === pattern1[i % 5]) correct[0] += 1;
        if(answer === pattern2[i % 8]) correct[1] += 1;
        if(answer === pattern3[i % 10]) correct[2] += 1;
    })
    
    // 맞춘 개수 정렬
    let max = Math.max(...correct);
    correct.forEach((count, index) => {
        if(count === max) {
            answer.push(index + 1);
        }
    })
    return answer;
}