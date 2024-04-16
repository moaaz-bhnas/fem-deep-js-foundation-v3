// Read this before you start: https://www.evernote.com/shard/s382/sh/6f04d86e-9f6f-4a1c-8a27-37180639d6fe/xXDWlSqA2ruPr7QCA381fsuFUMC_YtqQAwsatGsDr4qOyEoyBAg5GxslCA

/**
 * When you make an instance of a class, think like ..
 * my instance is a copy of all those behavior, inherited, which means copying
 * and can have more characteristics
 * even in biology
 * If my son (who inherited my characteristics) learned chess,
 * I don't magically learn it too
 * Well, this is not how it works in JavaScript
 * In JavaScript, a constructor call (via new) create a new object with the link to it's prototype
 */

/**
 * A "constructor call" (ia new) makes an object linked to it's own prototype
 */

function BoardGame() {
  this.multiplayer = true;
}
function Chess() {
  BoardGame.call(this);
}
Chess.prototype = Object.create(BoardGame.prototype);
Chess.prototype.constructor = Chess;
Chess.prototype.play = function play() {};
var krystalChess = new Chess();
// Here, new does the 4 things (check file 13)
krystalChess.constructor === Chess;
/**
 * Here following the prototype chain,
 * 1. is "constructor" a propery of "krystalChess"? No
 * 2. Is it a property of its prototype? yes
 */
krystalChess.__proto__ === Chess.prototype;
/** Dunder prototype
 * 1. Is "__proto__" a property of "krystalChess"? No
 * 2. Is "__proto__" a property of its prototype? No
 * 3. Is "__proto__" a property of its prototype's prototype (Object's prototype)? Yes
 * It's a getter function with "this" = krystalChess
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get
 */
