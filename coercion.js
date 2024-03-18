// Great source: https://dev.to/aman_singh/abstract-operations-the-key-to-understand-coercion-in-javascript-453i

/** Abstract operations
 * what perform coercion in JavaScript
 * they are conceptual. Not necessarily function that can be called
 */

/** toPrimitive(hint) abstract operation
 * Applied whenever we have non-primitive type (like function, object, array) and we need a primitive equivalent
 * converts a non-primitive type to a primitive when needed
 * It's recursive like other algorithms in JS. result is not primitive, run again
 * It takes an optional argument of type hint. Like what primitive type you need
 * In the previous example, the type is string
 *
 * If hint is number (e.g. 5 - {}) or default (e.g. obj1 + obj2):
 * valueOf() method is invoked
 * primitive type? no?
 * toString() is invoked
 *
 * If hint is string (e.g. alert({})):
 * toString() is invoked
 * valueOf() is invoked
 *
 * If the invocation of these two operations doesn't return a primitive, generally it's a TypeError.
 */

/** Hints
 * There are three variants of type conversion (hints), that happen in various situations:

 * "string": For an object-to-string conversion, when we’re doing an operation on an object that expects a string:
alert(obj);
anotherObj[obj] = 123;

 * "number": For an object-to-number conversion, like when we’re doing maths:
// explicit conversion
let num = Number(obj);

// maths (except binary plus)
let delta = date1 - date2;

// less/greater comparison
let greater = user1 > user2;

 * "default": Occurs in rare cases when the operator is “not sure” what type to expect.
// binary plus uses the "default" hint as binary plus + can work both with strings (concatenates them) and numbers (adds them).
let total = obj1 + obj2;

// obj == number/string/symbol uses the "default" hint
if (user == 1) { ... };
 */

/** ToString() abstract operation
 * Primitive types have natural stringification:
 * null ->            'null'
 * undefined ->       'undefined'
 * true ->            'true'
 * false ->           'false'
 * 52 ->              '52'
 * -0.toString() ->   '0' LIE
 * ToString(Object) calls toPrimitve(string as hint)
 * It recursively calls toString() and then valueOf() till we get a string
 * [] => ""
 * [1,2,3] => "1,2,3"
 * [null,undefined] => ","
 * [[],[[],[]]] => ",,"
 * [,,,] => ",,,"
 *
 * {} => "[object Object]"
 * {a:2} => "[object Object]"
 * {toString() {return "Moaaz"}} => "Moaaz"
 */

/** ToNumber() abstract operation
 * Applied whenever a non-number value is supplied in an operation where a number was expected, such as a mathematical operation
 * "" => 0 // should've been NaN
 * "-0" => -0
 * "  05 " => 5
 * ".0" => 0
 * "0." => 0
 * "." => NaN
 * true ->           1
 * false ->          0
 * undefined ->      NaN (not a valid number)
 * null ->           0
 * ToString(Object) calls toPrimitve(number as hint)
 * .valeuOf(), then .toString(), then further coercions:
 * [""] => "" => 0
 * ["0"] => "0" => 0
 * ["-0"] => "-0" => -0
 * [null] => "" => 0
 * [undefined] => "" => 0
 * [1, 2, 3] => "1,2,3" => NaN
 * [[[[]]]] => "" => 0
 * {} => "[Object object]" => NaN
 * {valueOf(){return 5}} => 5
 */

/** ToBoolean
 * ToBoolean is a little simpler than ToString and ToNumber operation as it doesn't do any internal conversion.
 * It only performs a table lookup:
 * undefined	false
 * null	false
 * boolean	return argument
 * number	if argument is +0, -0 or NaN, return false; otherwise true
 * string	if argument is empty string, return false; otherwise true
 * symbol	true
 * object	true
 */

// What happens in these cases?
[] + 5; //?
/**
 * the addition operator ‘+’ performs string concatenation or numeric addition based on the argument type.
 * If either of the argument is string, it will perform string concatenation
 * We were expecting a primitive type but end up getting an array as one of the argument.
 * ToPrimitive abstract operation is performed with "default" passed as a hint.
 * [].valueOf() => []
 * [].toString() => ""
 * "" + 5 => "" + "5" // engine coerces 5 to "5" using ToString as either of the argument is string
 * "5"
 */

[] + [];
/**
 * ToPrimitive() is invoked with "default" as hint
 * [].valueOf() => []
 * [].toString() => ""
 * "" + "" => ""
 */

"" - true;
/**
 * Here, both operands are expected to be numbers
 * so toNumber is invoked on both
 * 0 - 1 => -1
 */

1 < 2 < 3;
/**
 * (1 < 2) < 3 => true < 3
 * Here true is expected to be number
 * 1 < 3 => true
 */

3 < 2 < 1;
/**
 * (3 < 2) < 1
 * false < 1 => 0 < 1
 * true
 */

[] + {};
/**
 * Here, primitives are expected
 * {}.toPrimitve(default)
 * {}.valueOf() => {}
 * {}.toString => "[Object object]"
 * .. [].toString => ""
 * "[Object object]" + "" => "[Object object]"
 */

{
}
+[]; // 0?? hint: {} here is just an empty block, so the engine ignores it

/** Unary plus operator
 * It turns a string to a number e.g. +"10" = 10 using .toNumber abstract operation
 */

/** Boxing
 * It's what allows "abc".length / "abc".toUpperCase()
 * It's an implicit coercion that turns primitive into objects
 * to allow accessing properties/methods on that string
 */
