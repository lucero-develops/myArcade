// Enemies our player must avoid
var Enemy = function(x,y,sprite) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';

    //and these variables because they are needed by
    //the render function
    this.x= x;
    this.y= y;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.checkout

    //Some research on requestAnimationFrame lead me to 
    //test this possible solution 
	this.x += 10 * dt; // Increase 'x' by 10 units per millisecond

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class

//creating an instance of the Enemy class

/* building the Player class this way seems 
more sucure/ correct way rather than 
    var player = new Enemy(x,y,sprite);
but I really dont fully understand how the created 
instance above would have any cons ...
*/

var Player = function(x,y,sprite){
    Enemy.call(this,x,y, sprite);
};

Player.prototype = Object.create(Enemy.prototype);

//I shouldn't have to create the render() method
//because no change is needed from Enemy.render

Player.prototype.update = function() {
    /* thinking about the Player class the 
    only thing to update at the moment would be 
    x and y cordinates. */

    this.x = this.x;
    this.y = this.y;

    //My thinking is that the scope with catch
    //Players x and y values
};
//console log is saying this isn't a function.


// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

// Testing this , not thinking of Enemy now 
// I'm am just trying to get the clear all the errors in
//the console log
var E1 = new Enemy();
var E2 = new Enemy();
var allEnemies =[E1,E2];



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
