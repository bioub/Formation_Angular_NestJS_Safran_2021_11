class Stack<T = string> {
  private array: T[] = [];

  push(el: T) {

  }
  peek() {
    return this.array[this.array.length - 1];
  }
}

const stack = new Stack<number | string>();
stack.push(133);
stack.peek();
