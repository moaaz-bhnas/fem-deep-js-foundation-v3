/** Scope (One of the three core pillars of JavaScript)
 * Definition: Where to look for things
 * Which makes you ask ..
 * What are you looking for? identifiers (variables)
 */

/** Compilation
 * JavaScript is a compiled language
 * It runs some processes on the code before executing it top to bottom
 * For example, if you have a syntax error in line 7, line 1 of the program won't run
 * Before running the program,
 * JavaScript compiler creates "buckets" when it encounters units of scope (function / block)
 * And creates "marbles" whenever it encouters variables and drop them in the correct bucket
 * Except, it doesn't actually create the buckets in the memory. It just creates a plan for the bucket that activates
 * when a bucket is executed
 * In a lexically-scoped language (JS), all scopes/identifiers are determined at compile time, and used at run time
 */

/** Note
 * All variables in your programs either:
 * 1. receives a value assignment (target reference)
 * 2. gets retreived its value (source reference)
 * Shadowing is when you have 2 variables with the same name in different scope levels
 */

var anime = "HxH";

function printAnime() {
  var anime = "AOT";
  console.log(anime);
}

printAnime();

/** Explain the previos code in terms of scopes
 * 1. compilation phase
 * compiler: Hey scope manager, I found a definition for variable "anime", ever heard of it?
 * scope manager: Nope, but I created a red bucket 🟥 (global scope) for it
 * compiler: Here's a 🔴 marble "anime". Put it in the bucket
 *
 * compiler: Yo scope manager, me again! Ever heard of "printAnime" identifier?
 * scope manager: Nope!
 * compiler: Here's a 🔴 marble for "printAnime"
 * compiler: Feel spmething weird? This identifier point to a function declaration.
 * scope manager: Yup, this creates a new scope, so I created a 🟦 bucket for it
 *
 * compiler: Great! Ever heard of anime?
 * scope manager: Nope (this is a new scope - shadowing)
 * compiler: Here's a 🔵 marble
 *
 * 2. execution phase
 * execution engine v8: Scope manager (global scope)! I have a target reference for anime. Ever heard of it?
 * scope manager: Yup, I have it in scope, here it is 🔴
 * v8: assign it this value "HxH"
 *
 * .. execution moves to line 33 as function declarations dom't exist in this phase
 *
 * v8: Yo! ever heard of "printAnime" in a source reference
 * scope manager: Yea, here it is 🔴
 * v8: Oh! It's a reference to another function with another scope. Let's dig in
 * v8: Scope manager (in printAnime 🟦), "anime" in target reference. Ever heard of it?
 * scope manager: Here it is 🔵
 * c8: assign it "AOT"
 */

/** Dynamic global variables
 * A variable receiving a value without formally being declared
 * v8: Yo! global scope! Ever heard of x?
 * Global scope: I actually just created one for you, here 🔴
 * Global scope (with strict mode): Nope! Reference error
 */

/** Some types of error
 * Refernce error: Source reference for undeclare variable e.g. a()
 * Type error: variable exists, but it's not legal to do this particular actio with it
 * var a = 1;
 * a()
 */
