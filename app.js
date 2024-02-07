class Animal {
    constructor(name, sound) {
      this.name = name;
      this.sound = sound;
    }
  
    makeSound() {
      console.log(`${this.name}-ს ხმა: ${this.sound}`);
    }
  }
  
  const dog = new Animal("ძაღლი", "woof!");
  dog.makeSound();
  