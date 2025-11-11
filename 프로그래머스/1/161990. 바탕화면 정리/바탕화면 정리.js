function solution(wallpaper) {
    let [lux, luy, rdx, rdy] = [Infinity, Infinity, 0, 0];
    
    wallpaper.forEach((row, rIndex) => {
        row.split('').forEach((char, cIndex) => {
            if(char === '#') {
                lux = Math.min(lux, rIndex);
                luy = Math.min(luy, cIndex);
                rdx = Math.max(rdx, rIndex + 1);
                rdy = Math.max(rdy, cIndex + 1);
            }
        }) 
    })
    
    return [lux, luy, rdx, rdy];
}