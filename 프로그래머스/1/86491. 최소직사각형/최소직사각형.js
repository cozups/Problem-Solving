function solution(sizes) {
    var answer = 0;
    
    let maxW = 0;
    let maxH = 0;
    for(let i = 0; i < sizes.length; i++) {
        let [w, h] = sizes[i];
        if(w < h) {
            // 세로가 더 길면 눕힌다
            sizes[i] = [h, w];
        }
        maxW = Math.max(maxW, sizes[i][0]);
        maxH = Math.max(maxH, sizes[i][1]);
    }
    
    answer = maxW * maxH;
    
    return answer;
}