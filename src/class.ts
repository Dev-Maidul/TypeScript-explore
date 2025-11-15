// ! Object oriented programming

class Animal {
    constructor(public name: string, public species: string, public sound: string) {
        
     }
    
    makeSound() {
        console.log(`The ${this.name} is making sound ${this.sound}`);
    }
}

const dog = new Animal("Kutta lig", "Dog", "Gew Ghew");
const cat = new Animal("Pretty", "Cat", "Mew Mew");

cat.makeSound();
dog.makeSound();
