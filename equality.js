/** strict equality (===) vs loose equality (==)
 * They both check the value and the type
 * loose equality allows coercion
 * strict equality disallows it
 */
5 == "5"; // true
5 === "5"; // false

/** Coercive Equality
 * null == undefined // true
 * This is useful because if you have a value that has two possible empty states null / undefined
 * You can check once value == null instead of dointg the two strict checks
 * JavaScript meant for them to be used interchangably
 */

/** Double equality algorithm
 * If types are the same, ===
 * if null == undefined, equal
 * if non-primitives, toPrimitive
 * if primitives and different types, prefer toNumber
 */

42 == [42];
/**
 * [42] is non-primitive, then [42].toPrimitive()
 * [42].valueOf() => [42]
 * [42].toString() => "42"
 * 42 == "42"
 * one operand is number, the other string, convert the string
 * 42 == 42 => true
 */

[] == ![];
/**
 * "" == false
 * 0 == 0
 */

/** Summary
 * Prefer == over ===
 * == is not about comparison with unknown types
 * == is about comparison with known types. Optionally when you wanna allow coercion
 */
