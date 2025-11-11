function solution(survey, choices) {
    var answer = '';
    
    // 유형별 점수를 담는 맵
    const mbtiMap = {'R': 0, 'T': 0, 'C': 0, 'F': 0, 'J': 0, 'M': 0, 'A': 0, 'N':0}
    
    // 모르겠음(4)를 0점으로 만들기 위해 choices 원소 값 -4
    choices.forEach((choice, index) => {
        if(choice - 4 < 0) { // 비동의
            const label = survey[index][0];
            mbtiMap[label] += Math.abs(choice - 4);
        }
        if(choice - 4 > 0) { // 동의
            const label = survey[index][1];
            mbtiMap[label] += choice - 4;
        }
    });
    
    answer += mbtiMap['R'] >= mbtiMap['T'] ? 'R' : 'T';
    answer += mbtiMap['C'] >= mbtiMap['F'] ? 'C' : 'F';
    answer += mbtiMap['J'] >= mbtiMap['M'] ? 'J' : 'M';
    answer += mbtiMap['A'] >= mbtiMap['N'] ? 'A' : 'N';
    
    return answer;
}