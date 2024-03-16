/** JavaScript types
 * undefined
 * string
 * number
 * boolean
 * object
 * symbol
 * bigint? (e.g. 42n / BigInt(42)) A primitive type that can grow infintely large with the memory
 */

/** What about
 * undeclared?
 * null?
 * function => a special type of object
 * array => same
 */

/** Note
 * In JavaScript, variables don't have types. Values do
 */

/** Types of emptiness
 * undefined: an initialized variable with no value
 * undeclared: a variable that has never been initialized
 * uninitialized: (aka TDZ Temporary Dead Zone) never initialized, not hoisted.
 */

console.log(typeof a); // should be undeclared, but historcally JS went with "undefined"

/** NaN
 * Invalid number. A special bit pattern to represent a number which is invalid number
 * using 0 as a placeholder for numbers is incorrect as it's a valid number
 * If you're creating a function that does some math, and you return a failure, use NaN
 */

const myAge = Number("26"); // => 26
const myNextAge = Number("twenty seven"); // => NaN
myAge - "My brother's age"; // => NaN "Here JS due to - converts the string to NaN and NaN - NaN = NaN"
NaN === NaN; // => false "NaN" is the only primitive value in JS that's is not qual to itself, hence isNaN
isNaN(myAge); // => false
isNaN(myNextAge); // => true
isNaN("My brother's age"); // => true. How? JS coerces the argument to number first "NaN", then checks, hence Number.isNaN
Number.isNaN("My brother's age"); // => false. Checks directly if the argument is the NaN value

/** -0
 * doesn't exist in math, but exists in programming
 * why use it?
 * Let's say you have a car on a map moving at n/-n speed
 * and you need to know what direction it had when it stops 0/-0
 */
const negZero = -0;
negZero === -0; // true. It exists
negZero === 0; // true, which is a lie.
Object.is(negZero, 0); // false. Object.is() is like quadra equal

/** Math.sign
 * It's a not-perfict utility to indicate the sign of a number 1/-1
 * So make your own
 */
Math.sign(5); // => 1
Math.sign(-5); // => -1
Math.sign(0); // => 0 ???
Math.sign(-0); // => -0 ???

const sign = (number) =>
  number !== 0 ? Math.sign(number) : Object.is(number, -0) ? -1 : 1;

/** Fundemental objects (aka built-in objects or native functions)
 * use: Object(), Array(), Function(), Date(), RegExp(), Error()
 * don't use to construct a value as there are already literals: String(), Number(), Boolean()
 */
