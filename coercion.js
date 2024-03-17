/** Abstract operations
 * what perform coercion in JavaScript
 * they are conceptual. Not necessarily function that can be called
 */

/** toPrimitive(hint) abstract operation
 * converts a non-primitive type to a primitive when needed
 * like in concatenation (e.g. "a" + {})
 * It takes an argument of type hint. Like what primitive type you need
 * In the previous example, the type is string
 * It's recursive like other algorithms in JS. result is not primitive, run again
 */

/** ToString() abstract operation
 * It recursively calls toString() and then valueOf() till we get a string
 */
