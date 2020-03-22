const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
    //throw 'Not implemented';
    // remove line with error and write your code here
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
    //throw 'Not implemented';
    // remove line with error and write your code here
  },
  removeLink(position) {
    const real_pos = position - 1;
    if(real_pos < 0 || real_pos >= this.getLength() || position === `${position}`) {
      this.chain = [];
      throw new Error();
    }
    this.chain.splice(real_pos, 1);
    return this;
   // throw 'Not implemented';
    // remove line with error and write your code here
  },
  reverseChain() {
    this.chain.reverse();
    return this;
    //throw 'Not implemented';
    // remove line with error and write your code here
  },
  finishChain() {
    const finished = this.chain.join('~~');
    this.chain = [];
    return finished;
    //throw 'Not implemented';
    // remove line with error and write your code here
  }
};

module.exports = chainMaker;
