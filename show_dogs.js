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
    this.name = name;
    this.breed = breed;
    this.weight = weight;
    this.handler = handler;
}

ShowDog.prototype = new Dog(); // prototype ShowDog

ShowDog.prototype.league = 'Webville'; // prototype's property

ShowDog.prototype.stack = function() { // prototype's method
    console.log('Stack');
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

let scotty = new ShowDog('Scotty', 'Dcottish Terrier', 15, 'Cookie'); // new object