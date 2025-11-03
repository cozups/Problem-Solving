/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    // 괄호 짝이 맞는지 확인. 같은 짝이어야 함
    // 스택 이용
    const stack = [];
    for (let char of s) {
        // '(', '{', '[' 이면 push
        if (['(', '{', '['].includes(char)) {
            stack.push(char);
            continue;
        }
        // ')', '}', ']' 만나면 pop 후 같은 짝의 여는 괄호인지 확인
        // 중간에 스택이 비면 false
        if (stack.length === 0) return false;
        let popped = stack.pop();
        if (popped === '(' && char !== ')') {
            return false;
        }
        if (popped === '{' && char !== '}') {
            return false;
        }
        if (popped === '[' && char !== ']') {
            return false;
        }
    }

    // 완료 후 스택에 남아있으면 false
    return stack.length === 0;
};