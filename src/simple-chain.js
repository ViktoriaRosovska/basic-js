const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  items: [],
  chainArr: [],
  str: "",
  getLength() {
    return this.items.length;
  },
  addLink(value) {
    this.items.push(String(value));
    return chainMaker;
  },
  removeLink( position ) {
    if (!Number.isInteger(position) || position - 1 < 0 || position - 1 >= this.items.length) {
      this.items = [];
      throw new Error("You can't remove incorrect link!");
    }

    this.items.splice(position - 1, 1);
    return chainMaker;
  },
  reverseChain() {
    this.items.reverse();
    return chainMaker;
  },
  finishChain() {

    let str = "";
    for (let i = 0; i < this.items.length; i++) {
      if (i > 0)
        str += "~~";

      if (this.items[i] === "")
        str += "( )";
      else
        str += "( " + this.items[i] + " )";
    }

    this.items = [];
    return str;
  }
};

module.exports = {
  chainMaker
};
