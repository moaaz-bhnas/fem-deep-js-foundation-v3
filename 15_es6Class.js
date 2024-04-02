/** Super
 * It allows relative polymorphism
 * Polymorphism: a concept in object-oriented programming that allows the same function to be used in different forms
 * you can call a method from the parent using super
 */

class Workshop {
  constructor(teacher) {
    this.teacher = teacher;
  }

  ask(question) {
    console.log(this.teacher, question);
  }
}

class AnotherWorkshop extends Workshop {
  ask(question) {
    super.ask(question);
  }
}
