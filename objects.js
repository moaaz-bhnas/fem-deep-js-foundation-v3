/** this
 * It references the execution context of the function call
 * determined entirely by how the function is called (call-site)
 * It exists to allow us to call functions in different contexts
 */
function printBlAnime(anime) {
  console.log(this.category, anime);
}

function differentContext() {
  var myContext = {
    category: "BL",
  };
  printBlAnime.call(myContext, "Yuri on Ice!!!");
}

differentContext();

/** Note
 * There are 4 ways in JS to call a function
 * and each way answer the question of what "this" is differently
 */

var studio = {
  name: "Ghibli",
  printStudioName() {
    console.log(this.name);
  },
};
studio.printStudioName();
/** 1. Implicit binding
 * calling a function on a context object
 * It defines "this" based upon what object you call the function from
 */

function printStudio() {
  console.log(this.name);
}
var studio1 = {
  name: "Ghibli",
};
var studio2 = {
  name: "Ghibli",
};
printStudio.call(studio1);
printStudio.call(studio2);
/** 2. Explicit binding - loose
 * Call the function with "this" = studio1/studio2
 */

var studio3 = {
  name: "Ghibli",
  printName() {
    console.log(this.name);
  },
};
setTimeout(studio3.printName, 10);
setTimeout(studio3.printName.bind(studio3), 10);
/** 2. Explicit binding - hard
 * In the first timer, the call-site will be somthing like cb()
 * which is why we lost "this" binding
 * The second timer produces a new function that's bound to this=studio3
 */

/** Note
 * "this" gives you flexible dynamicism
 * If you write a this-aware code, and you find yourself having
 * to be predictable with each call (bind), then you're not benifiting from
 * the flexible dynamicism, and you should switch to closures instead
 */

function ask() {
  console.log(this.question);
}
var newEmptyObject = new ask("Football?");
/** 3. "Constructor calls"
 * you think "new" keyword has something to do with class constructors, right?
 * Nope, it has nothing to do with that
 * It's another way of calling functions with this keyword pointing at
 * a whole new empty object
 */
/** It does 4 things:
 * 1. Create a brand new empty object
 * 2. Link that object to another object
 * 3. Invoke the function with this = new empty object
 * 4. If function doesn't return an object, assume return of this
 */

var teacher = "Kyle";
function ask2() {
  console.log(this.teacher);
}
function ask3() {
  "use strict";
  console.log(this.teacher);
}
ask2();
// Kyle
ask3();
// TypeError
/** 4. default binding
 * When none of the previous bindings match, "this" is set to global
 * unless "use strict" is used. If no bindings were used, "this" = undefined
 * undefined.teacher => type error
 */

/** Binding precedence (4 rules)
 * 1. Is the function called by new()?
 * 2. Is the function called by apply() or call()? Note: bind() effectively uses apply()
 * 3. Is the function called on a context object?
 * 4. Default
 */

/** Lexical this
 * arrow function doesn't have a "this"
 * so it goes up the scope elevator
 * which is the only good useage of arrow functions
 */
var cinema = {
  name: "Plaza",
  printName() {
    setTimeout(() => {
      console.log(this.name);
    }, 10);
  },
};
cinema.printName();
