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
