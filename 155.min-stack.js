/*****
 * source: https://leetcode.com/problems/min-stack/
 * 
155. Min Stack 

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

  * push(x) -- Push element x onto stack.
  * pop() -- Removes the element on top of the stack.
  * top() -- Get the top element.
  * getMin() -- Retrieve the minimum element in the stack.

Example:
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> Returns -3.
minStack.pop();
minStack.top();      --> Returns 0.
minStack.getMin();   --> Returns -2.

*****/

/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = [];
    this.minList = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x);
    if (this.minList.length == 0 || x <= this.getMin()) {
        this.minList.push(x);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let temp = this.top();
    if (temp <= this.getMin()) {
        this.minList.pop();
    }
    this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length-1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minList[this.minList.length-1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
