const startBtn = document.getElementById("start-btn");
const canvas = document.getElementById("canvas");
const startScreen = document.querySelector(".start-screen");
const checkpointScreen = document.querySelector(".checkpoint-screen");
const checkpointMessage = document.querySelector(".checkpoint-screen > p"); // to target the paragraph element inside the .checkpoint-screen element.

const ctx = canvas.getContext("2d"); // Before you can begin building out the functionality for the game, you will need to set up the ability to add 2D graphics. The Canvas API can be used to create graphics in games using JavaScript and the HTML canvas element. You will need to use the getContext method which will provide the context for where the graphics will be rendered.
canvas.width = innerWidth; // The canvas element has a width property which is a positive number that represents the width of the canvas. // The innerWidth property is a number that represents the interior width of the browser window.
canvas.height = innerHeight; // The innerHeight property is a number that represents the interior height of the browser window.
const gravity = 0.5; // In your platformer game, the main player will need to jump between the different platforms. When the player jumps, you will need to apply gravity to bring them back down.
let isCheckpointCollisionDetectionActive = true; // In the game, the player will have the opportunity to cross different checkpoints. You will need to keep track of the status for the checkpoint collision detection.

// As you are designing the game, you will need to make sure that the size of the elements in the game are responsive and adapt to different screen sizes.
const proportionalSize = (size) => {
  return innerHeight < 500 ? Math.ceil((size / 500) * innerHeight) : size; // The width and the height of the main player, platforms and checkpoints will be proportional sized relative to the innerHeight of the browser screen. The goal is to make the game responsive and visually consistent across different screen sizes.
};

// to define some characteristics for the main player of the game.
class Player {
  constructor() {
    // define the player's position, velocity, width, and height values.
    this.position = {
      // the proportionalSize function here to make sure that the player's position is always proportional to the screen size. This is important because you want the player to be able to move around the screen regardless of the screen size.
      x: proportionalSize(10),
      y: proportionalSize(400),
    };
    this.velocity = {
      // The velocity property will be used to store the player's speed in the x and y directions.
      x: 0,
      y: 0,
    };
    this.width = proportionalSize(40); // the proportionalSize() function here to set the width and height properties of your class to be proportional to the height of the screen.
    this.height = proportionalSize(40);
  }
  draw() {
    // draw() method, which will be responsible for creating the player's width, height, position, and fill color.
    ctx.fillStyle = "#99c9ff"; // to set the color for your player.
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height); // to create the player's shape by calling the fillRect() method on the ctx object which you instantiated earlier. Example Code: fillRect(x, y, width, height)
  }
  update() {
    // update() method which will be responsible for updating the player's position and velocity as it moves throughout the game.
    this.draw(); // draw() method to ensure that the player is continually drawn on the screen as the game updates.
    this.position.x += this.velocity.x; // When the player moves to the right, you will need to adjust its velocity.
    this.position.y += this.velocity.y; // When the player jumps up, you will need to add the logic for adjusting its velocity.
    if (this.position.y + this.height + this.velocity.y <= canvas.height) {
      // Right now, when the player jumps up, it is possible for it to move past the height of the canvas. To fix that, you will need to add a condition to stop the player from falling past the height of the canvas.
      if (this.position.y < 0) {
        this.position.y = 0;
        this.velocity.y = gravity;
      }
      this.velocity.y += gravity;
    } else {
      this.velocity.y = 0;
    }
    if (this.position.x < this.width) {
      // to ensure that the player stays within the boundaries of the canvas screen and doesn't move too far off to the left.
      this.position.x = this.width;
    }
    if (this.position.x >= canvas.width - this.width * 2) {
      // to check if the player's x position has exceeded the right edge of the canvas. If it has, you will need to set the player's x position to the maximum value so the player does not accidentally go off screen to the right.
      this.position.x = canvas.width - this.width * 2; // This will ensure that the player's x position will never exceed the right edge of the canvas.
    }
  }
}

const player = new Player();
