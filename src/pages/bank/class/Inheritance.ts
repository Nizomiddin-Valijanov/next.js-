export class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

export class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}
