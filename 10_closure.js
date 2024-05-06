/**
 * Kyle "one of the most important ideas ever invented in computer science"
 */

/** Definition
 * Closure is when a function "remembers" its lexical scope even
 * when the function is executed outside that lexical scope
 */

function ask(question) {
  setTimeout(function waitASec() {
    console.log(question);
  }, 1000);
}
ask("What is closure?");
/**
 * At the time "waitASec" function runs, the "ask" function has already finished
 * and the "question" variable should've gone away (garbage collected)
 * but closure preserved it
 */

/** Note
 * JavaScript engines implement closure as a link to the entire scope
 * not just variables
 */

for (var i = 0; i <= 3; i++) {
  setTimeout(function printCounter() {
    console.log(i);
  }, 10);
}
/** What will be logged here, and why?
 * 4
 * 4
 * 4
 * "printCounter" has a link to its lexical scope
 * where the only variable "i" is 4 at the time it runs
 */

/** How to solve it
 * You need the function "printCount" to close over different variables
 * that hold different values
 */

/** Solution #1
 * Create a block variable with "let" which will be different each iteration
 */
for (var i = 0; i <= 3; i++) {
  let j = i;
  setTimeout(function printCounter() {
    console.log(j);
  }, 10);
}

/** Solution #2
 * Just use "let" instead of "var", and it will create a new variable each iteration
 */
for (let i = 0; i <= 3; i++) {
  setTimeout(function printCounter() {
    console.log(j);
  }, 10);
}

/** Note
 * Closure protects an execution context from being garbage collected after it's finished
 */
