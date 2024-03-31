/**
 * Kyle "it's the most prevelant and the most important between all code organization patterns"
 */

/** What is the module pattern
 * I take some data and bevaviors that operate on that data,
 * and encapsulate them into a data structure
 * hide what I don't need to show
 * and expose only the minimal necessary API (least exposure principle 😉)
 * via closure
 * Important: this usage of closure is closing over varriables
 * that are designed to change over time
 */

/** Encapsulation
 * hiding data and behaviour
 * collecting data with control over visibility
 */

/** Singleton
 * the singleton pattern is a software design pattern that
 * restricts the instantiation of a class to a singular instance.
 */

/** Classic (revealing) module pattern
 * it has two components:
 * 1. outer enclosing function IIFE
 * 2. inner function that closes over the variable "teacher"
 */

var workshop = (function Module(teacher) {
  var publicAPI = { ask };
  return publicAPI;

  function ask(question) {
    console.log(teacher, question);
  }
})("Kyle");

workshop.ask("drink?");
// Kyle drink?

/** Note
 * we can call the Module here a singleton
 * as it's an IIFE. It runs oce and its done
 */

/** Module factory
 * Unlike the latter, you can have many instances of the module
 * each with its own closed over state
 */
function WorkshopModule(teacher) {
  var publicAPI = { ask };
  return publicAPI;

  function ask(question) {
    console.log(teacher, question);
  }
}

var workshop2 = WorkshopModule("Kyle");
