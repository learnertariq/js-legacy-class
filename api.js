function Animal(hasHead) {
  this.hasHead = hasHead;
}

Animal.prototype = Object.create({});
Animal.prototype.constructor = Animal;

Animal.prototype.run = function () {
  return "running " + new Animal().hasHead;
};

function Person(hasHead) {
  Animal.call(this, hasHead);
  this.name = "tariq " + hasHead;
}

Person.prototype = Object.create(Animal.prototype);
Person.prototype.constructor = Person;

Person.prototype.walk = function () {
  return `${this.name} is walking`;
};

const newPerson = new Person(true);
console.log(newPerson.hasHead);
