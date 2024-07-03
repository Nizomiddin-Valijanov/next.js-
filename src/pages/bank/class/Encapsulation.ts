export class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `${this.name} is ${this.age} years old.`;
  }
}

const person = new Person("Alice", 30);
console.log(person.getDetails()); // Alice is 30 years old.
