function Dog(name, breed, weight) { // constructor Dog
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}

Dog.prototype.species = 'Canine';

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

function ShowDog(name, breed, weight, handler) { // constructor ShowDog
    Dog.call(this, name, breed, weight);
    this.handler = handler;
}

ShowDog.prototype = new Dog(); // prototype ShowDog
ShowDog.prototype.constructor = ShowDog; // specify constructor for ShowDog objects
ShowDog.prototype.league = 'Webville'; // prototype's property

ShowDog.prototype.stack = function() { // prototype's method
    console.log('');
};

ShowDog.prototype.bait = function() { // ...
    console.log('Bait');
};

ShowDog.prototype.gait = function(kind) { // ...
    console.log(kind + 'ing');
};

ShowDog.prototype.groom = function() { // ...
    console.log('Groom');
};

let fido = new Dog('Fido', 'Mixed', 38); // create new objects using operator New + constructor 
let fluffy = new Dog('Fluffy', 'Poodle', 30);
let spot = new Dog('Spot', 'Chihuahua', 10);
let scotty = new ShowDog('Scotty', 'Dcottish Terrier', 15, 'Cookie'); // new object
let beatrice = new ShowDog('Beatrice', 'Pomeranian', 5, 'Hamilton');

/*
fido.bark();
fluffy.bark();
scotty.stack();
scotty.bark();
scotty.gait(')
console.log(scotty.league);
console.log(scotty.species);*/ // test