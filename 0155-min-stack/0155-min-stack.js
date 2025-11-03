class MinStack {
    // getMin 때문에 두 개의 스택을 쓴다.
    // 1개의 스택을 쓰는 방법도 있는데 복잡
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(val) {
        this.stack.push(val);
        const min = this.minStack.length > 0 ? Math.min(val, this.minStack[this.minStack.length - 1]) : val;
        this.minStack.push(min);
    }

    pop() {
        this.stack.pop();
        this.minStack.pop();
    }

    top() {
        return this.stack[this.stack.length - 1];
    }

    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}