/** Super
 * It allows relative polymorphism
 * Polymorphism: a concept in object-oriented programming that allows the same function to be used in different forms
 * you can call a method from the parent using super
 */

/**
 * Evolution
 */
/** 1
 * Here, Object.create() creates a new empty object with "workshopStore" as its prototype
 */
function Workshop(teacher) {
  const output = Object.create(workshopStore);
  outout.teacher = teacher;
  return output;
}

const workshopStore = {
  ask(question) {
    console.log(this.teacher, question);
  },
};

const workshop = Workshop("Kyle");

/** 2
 * Here "this" plays the the major rule, as it
 * 1. creates a new empty object in the memory
 * 2. assign this to that empty object
 * 3. Give it a link to the function's prototype
 * 4. If nothing returned, return this (new object)
 */
function Workshop(teacher) {
  this.teacher = teacher;
}

Workshop.prototype.ask = function ask(question) {
  console.log(this.teacher, question);
};

const workshop2 = new Workshop("Kyle");

/** 3
 * Just a syntatic sugar for 2, but it does the same thing under the hood
 */
class Workshop {
  constructor(teacher) {
    this.teacher = teacher;
  }

  ask(question) {
    console.log(this.teacher, question);
  }
}
