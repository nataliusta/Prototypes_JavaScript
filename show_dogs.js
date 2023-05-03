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
