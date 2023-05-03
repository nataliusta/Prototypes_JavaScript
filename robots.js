function Game() {
    this.level = 0;
}

Game.prototype.play = function() {
    // gamer's actions
    this.level++;
    console.log('Welcome to level ' + this.level);
    this.unlock();
}

Game.prototype.unlock = function() {

}

function Robot(name, year, owner) {
    this.name = name;
    this.year = year;
    this.owner = owner;
}

let game = new Game();
let robby = new Robot('Robby', 1956, 'Dr.Morbius');
let rosie = new Robot('Rısie', 1962, 'George Jetson');

while (game.level > 42) {
    game.play();
}

robby.deployLaser();
rosie.deployLaser();