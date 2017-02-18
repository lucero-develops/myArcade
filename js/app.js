// Enemies our player must avoid
var Enemy = function(x = -101,y,sprite) { 
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = sprite ||'images/enemy-bug.png';

    //added these variables using short-circuit evaluation 
    //(||) returns the value of its second operand, if the 
    //first one is falsy, otherwise the value of the first 
    //operand is returned.
  
    this.x= x;
    this.y= y || 100;

};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.checkout

    //Some research on requestAnimationFrame lead me to 
    //test this possible solution 
	this.x += 200 * dt; // Increase 'x' by units per millisecond

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class

//creating an instance of the Enemy class

var Player = function(x,y,sprite){
    Enemy.call(this,x,y,sprite);
};
// This class requires an update(), render() and
// a handleInput() method.

Player.prototype = Object.create(Enemy.prototype);
Player.prototype.constructor = Player;

//I shouldn't have to create the render() method
//because no change is needed from Enemy.render

Player.prototype.update = function() {
    //need to define

};

Player.prototype.handleInput = function() {
    //need to define 
};




// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

// Testing this ,  trying to get the clear all the 
//errors in the console log
var e1 = new Enemy();
var e2 = new Enemy();
var e3 = new Enemy();
var allEnemies =[e1,e2,e3];

//Instantiating player
var player = new Player(200,400,'images/char-boy.png');

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
