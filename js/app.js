'use strict';
//these arrays help make the enemy starting point vary.
var enemyY =[312, 229, 229, 146,146, 146, 63, 63, 63, 63];
var enemyX =[-101,-101, 0, 0, 0, 75, 200, 300];

// Enemies our player must avoid
var Enemy = function(x = -101, y, sprite, height =40, width = 55 ){ 
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images

    //Using a condition like this is pretty sweet 
    this.sprite = sprite ||'images/enemy-bug.png';

    //added these variables using short-circuit evaluation 
    //(||) returns the value of its second operand, if the 
    //first one is falsy, otherwise the value of the first 
    //operand is returned.

    this.x = x;
    //genarates a differnt starting point
    this.y = y || enemyY[Math.floor(Math.random() * enemyY.length)];
    //these are created for use in collision
    this.height = height;
    this.width = width;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.checkout

    //Gives the enemy animation random levels of speed
    var speed = [50,50,50,111,222,222,333,333];
    var  n = speed[Math.floor(Math.random() * speed.length)];
    //Some research on requestAnimationFrame lead me to 
    //this solution 
	this.x += n * dt; 
    if(this.x>505){
        //creates different starting locations
    		this.x = enemyX[Math.floor(Math.random() * enemyX.length)];
        this.y = enemyY[Math.floor(Math.random() * enemyY.length)];
    };

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class

//creating an instance of the Enemy class

var Player = function(x,y,sprite, height, width){
    Enemy.call(this,x,y,sprite, height, width);
};
// This class requires an update(), render() and
// a handleInput() method.

Player.prototype = Object.create(Enemy.prototype);
Player.prototype.constructor = Player;

//I shouldn't have to create the render() method
//because no change is needed from Enemy.render

Player.prototype.update = function() {
    this.x = this.x;
    this.y = this.y;
    //inputting the entire array allEnemies
    this.checkCollisions(allEnemies);

};

Player.prototype.checkCollisions = function(enemy){
	var e =enemy;
	for(var i=0; i < e.length; i++){
		if (this.x < e[i].x + e[i].width &&
		  this.x + this.width > e[i].x &&
		  this.y < e[i].y + e[i].height &&
		  this.height + this.y > e[i].y){
        alert("Try again");
        this.x = 200;
		  	this.y = 405;
			};	
	}
};

//test if players objective is achieved, GOOD ON YA MATE!
Player.prototype.GoodOnYa = function(){
    if(this.y < 63){
        this.x = 200;
        this.y = 405;
    };
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

    //called this method here, so player would render in 
    //in the water blocks before resetting 
    this.GoodOnYa();
};

Player.prototype.handleInput = function(pInput) {

    switch (pInput) {
        case 'left':
            if (this.x > 0) {
                this.x -= 101;
            }
            break;

        case 'up':
            if (this.y > 0) {
                this.y -= 83;
            }
            break;

        case 'right':
            if (this.x < 402) {
                this.x += 101;
            }
            break;

        case 'down':
            if (this.y < 400) {
                this.y += 83;
            }
            break;
        };
    };



// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player


//setup this up so you can easily implement 
//levels if you wanted to , for now I like 5.
var enemies = 5;
var allEnemies = [];
for (var i = 0; i < enemies; i++) {
    allEnemies.push(new Enemy());
}

//Instantiating player           35 is height, width doesn't need to change
var player = new Player(200,405,'images/char-boy.png',35);

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
