function solution(phone_book) {
    const set = new Set();
    phone_book = phone_book.sort((a,b) => a - b); // 글자수 정렬
    
    for(let phone of phone_book) {
        for(let i = 1; i <= phone.length; i++) {
            let prefix = phone.substring(0, i);
            if(set.has(prefix)) {
                return false;
            }
        }
        set.add(phone);
    }
    
    return true;
}