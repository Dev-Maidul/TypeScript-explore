// ! Object oriented programming

class Animal{
    name:string;
    species:string;
    sound:string;

    constructor(name:string,species:string,sound:string){
        this.name=name;
        this.species=species;
        this.sound=sound
    }
    makeSound(){
        console.log(`The ${this.name} is making sound ${this.sound}`)
    }
};

const dog= new Animal("Kutta lig","dog","gew ghew");
const cat= new Animal("Pretty","Cat","Mew Mew");
cat.makeSound();
dog.makeSound()