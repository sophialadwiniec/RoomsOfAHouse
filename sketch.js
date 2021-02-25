/***********************************************************************************
	SimpleStateMachine - TEMPLATE
	by Sophia Ladwiniec

------------------------------------------------------------------------------------
	The way it works — you don't need to know this for the template use
	* array of images gets loaded at startup
	* drawFunction is a VARIABLE that points to a function varible name
	* drawOne(), drawTwo(), etc. are set to be functions.
	* the the keys 1-5 will change the drawFunction variable

------------------------------------------------------------------------------------
	Notes:
	- a more advanced state machine with use array-indexing for each of
		images the draw functions, but this is just for illustrative purposes

	- even more advanced will be to put the draw functions into an array, would
		be helpful for randomizing, go to the next function, etc

	- next step after that would be to put interfaces into an array that maps to
		the functions


***********************************************************************************/

// Array of images
var images = [];
// Array of functions
var functions = []; 
// // Array of instructions 
// var instructions = []; 
// Array of colors 
var colors = []; 

// variables used for instructions 
var midX; 
var startY;
var lineHeight = 48;

// variable that is a function 
var drawFunction;

// offset from bottom of screen
var gTextOffset = 20;

// load all images into an array
function preload() {
  images[0] = loadImage('assets/House front.png');
  images[1] = loadImage('assets/Foyer.png');
  images[2] = loadImage('assets/Dining room.png');
  images[3] = loadImage('assets/Kitchen.png');
  images[4] = loadImage('assets/stairs.png');
  images[5] = loadImage('assets/Upstairs room.png');
  images[6] = loadImage('assets/roof.png');
}

function loadFunctionsArray() {
  functions[0] = houseFront; 
  functions[1] = foyer; 
  functions[2] = dinningRoom; 
  functions[3] = kitchen; 
  functions[4] = stairs; 
  functions[5] = upstairs; 
  functions[6] = roof; 
}

// function loadInstructionsArray() {
//   instructions[0] = "Press 1 for Angry!"; 
//   instructions[1] = "Press 2 for Calm"; 
//   instructions[2] = "Press 3 for Happy :)"; 
//   instructions[3] = "Press 4 for Sad :(";
//   instructions[4] = "Press 5 for Scared"
//   instructions[5] = "Press s for a splash of bubbles!"; 
//   instructions[6] = "Press i for instructions or click on the bubble screen"; 
// }


// function loadColors() {
//   colors[0] = "#FF0000"; 
//   colors[1] = "#008000"; 
//   colors[2] = "#FFFF00"; 
//   colors[3] = "#0000FF";
//   colors[4] = "#800080"; 
//   colors[5] = "#4169e1"; 
//   colors[6] = "#ae0700"; 
// }

// Center drawing, drawFunction will be one for default
function setup() {
  createCanvas(800, 600);
  // loading all arrays 
  loadFunctionsArray(); 
  // loadInstructionsArray(); 
  // loadColors(); 

  midX = width/2;
  startY = 60;

  // Center our drawing objects
  imageMode(CENTER);
  textAlign(CENTER);
  textSize(24);

  // set to one for startup
  drawFunction = functions[0];
}

// Very simple, sets the background color and calls your state machine function
function draw() {
  background(192);

  // will call your state machine function
  drawFunction();
}

//========= TEMPLATE: modify these functions, INSIDE the function blocks only =========

//-- drawOne() will draw the image at index 0 from the array
houseFront = function() {
   image(images[0],width/2, height/2);

   fill(255); 
   text("Front of House", width/2, height - gTextOffset);
}

//-- drawTwo() will draw the image at index 1 from the array
foyer = function() {
   image(images[1],width/2, height/2);

   fill(255); 
   text("Foyer", width/2, height - gTextOffset);
}

//-- drawOne() will draw the image at index 2 from the array
dinningRoom = function() {
   image(images[2],width/2, height/2);

   fill(255);
   text("Dining Room", width/2, height - gTextOffset);
}

//-- drawOne() will draw the image at index 3 from the array
kitchen = function() {
   image(images[3],width/2, height/2);

   fill(255);
   text("Kitchen", width/2, height - gTextOffset);
}

//-- drawOne() will draw the image at index 4 from the array
stairs = function() {
   image(images[4],width/2, height/2);

   fill(255);
   text("Stairs", width/2, height - gTextOffset);
}

upstairs = function() {
   image(images[5],width/2, height/2);
   fill(255);
   text("Upstairs Room", width/2, height - gTextOffset);
   
}

roof = function() {
   image(images[6],width/2, height/2);
   fill(255);
   text("Roof", width/2, height - gTextOffset);
   
}


//========= TEMPLATE: add or change interface functions, as you like =========

// Change the drawFunction variable based on your interaction
function keyTyped() {
  if (drawFunction === houseFront){
    if(key === 'e'){
      drawFunction = foyer; 
    }
  }
  if (drawFunction === foyer){
    if(key === 'o'){
      drawFunction = houseFront; 
    }
    if(key === 'd'){
      drawFunction = dinningRoom; 
    }
    if(key === 's'){
      drawFunction = stairs; 
    }
  }

  if (drawFunction === dinningRoom){
    if(key === 'f'){
      drawFunction = foyer; 
    }
    if(key === 'k'){
      drawFunction = kitchen; 
    }
  }

  if (drawFunction === kitchen){
    if(key === 's'){
      drawFunction = stairs; 
    }
    if(key === 'd'){
      drawFunction = dinningRoom; 
    }
  }

  if (drawFunction === stairs){
    if(key === 'f'){
      drawFunction = foyer; 
    }
    if(key === 'k'){
      drawFunction = kitchen; 
    }
    if(key === 'u'){
      drawFunction = upstairs; 
    }
  }

  if (drawFunction === upstairs){
    if(key === 's'){
      drawFunction = stairs; 
    }
    if(key === 'r'){
      drawFunction = roof; 
    }
  }

  if (drawFunction === roof){
    if(key === 'u'){
      drawFunction = upstairs; 
    }
  }
}

