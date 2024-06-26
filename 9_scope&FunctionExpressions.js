function anime() {}

var myAnime = function anotherAnime() {
  console.log(anotherAnime);
};

console.log(anime);
console.log(myAnime);
console.log(anotherAnime); // reference error "source reference for undeclared variable"

/** Function declaration vs Function expressions
 * function declaration when the keyword "function" is the first word, otherwise expression
 * Function expressions put their identifiers in their own scope
 * "anotherAnime" is a 🔵 marble
 * "anotherAnime" is readonly. You can't re-assign it
 */

/** Named vs anonymous function expressions
 * 100% favor the named. Why?
 * 1. reliable self reference from inside the function (for recurcion, fn.length, etc)
 * 2. More debuggable stack trace
 * 3. More self-documenting code
 */

/** Arrow function
 * Anonymous too
 */
