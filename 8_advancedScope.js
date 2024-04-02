/** Lexical scope
 * the idea of the compiler figuring out all the scopes before the program runs
 * It's fixed at author time, and it's predictable. It doesn't change at runtime
 */

/** Dynamic scope
 * the interpreter figures outh the scopes at run time
 */

var anime = "HxH";

function printAnime() {
  console.log(anime);
}

function otherFn() {
  var anime = "Attack on Titan";
  printAnime();
}

printAnime();
otherFn();

/** What is the result of calling both functions?
 * Because JS is a lexically-scoped language, the compiler made a plan for the scope
 * of "printAnime()" function before run time.
 * "printAnime" has access to it's own variables and parent's (global) WHEREEVER it's called
 * so it will print "HxH" in both calls
 */

/** What if JS was a dynamically-scoped labguage
 * Then the scope is determined at run time
 * The first call it has access to global "anime", so => "HxH"
 * The second call it has access to ""otherFn" scope, so => "Attack on Titan"
 */

/** Note
 * Least exposure (privilige)
 * You should default to keep eveything private, and only expose the minimal necessary.
 * 1. It solves naming collision problem.
 * 2. If u hide something, somebody else can't accidentally misuse that thing
 * 3. Refactoring. If u expose somthing, mostly someone else is gonna use it, which complicates refactoring
 */

var discounts;
try {
  discounts = JSON.parse(someString);
} catch {
  discounts = [];
}
/** IIFE (Immediately-Invoked Function Expression)
 * The issue with this code that "discounts" variable
 * seems like being assigned more than once while it's either an empty array or parsed value
 * IIFEs can be used whenever you need statement / scope in an expression position
 */
var discounts = (function getDiscounts() {
  try {
    return JSON.parse(someString);
  } catch {
    return [];
  }
})();

/** Block scoping
 * If you have a cariable that's gonna be used only for a few lines of code
 * Maybe create a block for it
 */
function prefix(string) {
  {
    let prefix = "someUuidString";
    string = prefix + string;
  }

  if (/someTest/.test(string)) {
    return string;
  } else {
    return prefix(string);
  }
}

/** Hoisting
 * It's not a real thing in the JS specs
 * It's just a shorthand for what the compiler do at the copmile phase of JS code
 * Function expressions don't hoist
 */

anime = "HxH";
var anime;
/**
 * This is a bad example of hoisting
 */

printAnime();
function printAnime() {
  console.log(anime);
}
/**
 * This is a useful usage where you want to define all your functions at the bottom
 * and only see the executable code first when you read your code
 */

var anime2 = "AOT";

{
  console.log(anime2); // TDZ
  let anime2 = "One Piece";
}
/**
 * let/const hoists to blocks while var hoists to functions
 * let/const create the marble, but it's unitialized (Temporal dead zone)
 * while var creates the marble and sets it to undefined
 */
