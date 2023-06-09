function Dog(name, breed, weight) { // constructor Dog
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}

Dog.prototype.species = 'Canine'; // Add 1 property and 3 methods to prototype

Dog.prototype.bark = function() {
    if (this.weght > 25) {
        console.log(this.name + ' says Woof!');
    } else {
        console.log(this.name + ' says Yip!');
    }
};

Dog.prototype.run = function() {
    console.log('Run!');
};

Dog.prototype.wag = function() {
    console.log('Wag!');
};

Dog.prototype.sitting = false;

Dog.prototype.sit = function() {
    if (this.sitting) {
        console.log(this.name + ' is sitting now');
    } else {
        this.sitting = true;
        console.log(this.name + ' is now sitting');
    }
};

let fido = new Dog('Fido', 'Mixed', 38); // create new objects using operator New + constructor 
let fluffy = new Dog('Fluffy', 'Poodle', 30);
let spot = new Dog('Spot', 'Chihuahua', 10);

spot.bark = function() { // special method for spot
    console.log(this.name + ' says Woof!');
};

fido.bark(); // calling objects methods
fido.run();


