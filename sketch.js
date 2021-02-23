/***********************************************************************************
	SimpleStateMachine - TEMPLATE
	by Scott Kildall

	Template:

	(1) Add your own PNG files in the assets folder. Make sure they match the names ***exactly*** of the existing PNGs.
	(2) Add custom drawing code to drawOne(), drawTwo(), drawThree(), drawFour(), drawFive()
	(3) You can add your own interfaces - keys, mouse events, etc in the Interfaces section

	Also start your localhost before running this, otherwise no PNGs will display

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
// Array of instructions 
var instructions = []; 
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
  images[0] = loadImage('assets/angry.png');
  images[1] = loadImage('assets/calm.png');
  images[2] = loadImage('assets/happy.png');
  images[3] = loadImage('assets/sad.png');
  images[4] = loadImage('assets/scared.png');
  images[5] = loadImage('assets/splash.png');
}

function loadFunctionsArray() {
  functions[0] = drawOne; 
  functions[1] = drawTwo; 
  functions[2] = drawThree; 
  functions[3] = drawFour; 
  functions[4] = drawFive; 
  functions[5] = drawSplash; 
  functions[6] = drawInstructions; 
}

function loadInstructionsArray() {
  instructions[0] = "Press 1 for Angry!"; 
  instructions[1] = "Press 2 for Calm"; 
  instructions[2] = "Press 3 for Happy :)"; 
  instructions[3] = "Press 4 for Sad :(";
  instructions[4] = "Press 5 for Scared"
  instructions[5] = "Press s for a splash of bubbles!"; 
  instructions[6] = "Press i for instructions or click on the bubble screen"; 
}


function loadColors() {
  colors[0] = "#FF0000"; 
  colors[1] = "#008000"; 
  colors[2] = "#FFFF00"; 
  colors[3] = "#0000FF";
  colors[4] = "#800080"; 
  colors[5] = "#4169e1"; 
  colors[6] = "#ae0700"; 
}

// Center drawing, drawFunction will be one for default
function setup() {
  createCanvas(windowWidth, windowHeight);
  // loading all arrays 
  loadFunctionsArray(); 
  loadInstructionsArray(); 
  loadColors(); 

  midX = width/2;
  startY = 60;

  // Center our drawing objects
  imageMode(CENTER);
  textAlign(CENTER);
  textSize(24);

  // set to one for startup
  drawFunction = functions[5];
}

// Very simple, sets the background color and calls your state machine function
function draw() {
  background(192);

  // will call your state machine function
  drawFunction();
}

//========= TEMPLATE: modify these functions, INSIDE the function blocks only =========

//-- drawOne() will draw the image at index 0 from the array
drawOne = function() {
   image(images[0],width/2, height/2);

   fill(colors[0]);
   text("Angry", width/2, height - gTextOffset);
}

//-- drawTwo() will draw the image at index 1 from the array
drawTwo = function() {
   image(images[1],width/2, height/2);

   fill(colors[1]);
   text("Calm", width/2, height - gTextOffset);
}

//-- drawOne() will draw the image at index 2 from the array
drawThree = function() {
   image(images[2],width/2, height/2);

   fill(colors[2]);
   text("Happy", width/2, height - gTextOffset);
}

//-- drawOne() will draw the image at index 3 from the array
drawFour = function() {
   image(images[3],width/2, height/2);

   fill(colors[3]);
   text("Sad", width/2, height - gTextOffset);
}

//-- drawOne() will draw the image at index 4 from the array
drawFive = function() {
   image(images[4],width/2, height/2);

   fill(colors[4]);
   text("Scared", width/2, height - gTextOffset);
}

drawSplash = function() {
   image(images[5],width/2, height/2);
   
}

drawInstructions = function() {
  for( let i = 0; i < instructions.length; i++ ) {
    fill(colors[i]); 
    text( instructions[i], midX, startY + (i * lineHeight) )
  }
}

//========= TEMPLATE: add or change interface functions, as you like =========

// Change the drawFunction variable based on your interaction
function keyTyped() {
  if( key === '1' ) {
  	drawFunction = functions[0];
  }
  else if( key === '2' ) {
  	drawFunction = functions[1];
  }
  else if( key === '3' ) {
  	drawFunction = functions[2];
  }
  else if( key === '4' ) {
  	drawFunction = functions[3];
  }
  else if( key === '5' ) {
  	drawFunction = functions[4];
  }
  else if( key == 's') {
    drawFunction = functions[5]; 
  }
  else if( key == 'i') {
    drawFunction = functions[6]; 
  }
}

function mousePressed() {
  // only change state if we are in splash screen
  if( drawFunction === drawSplash ) {
    drawFunction = functions[6];
  }
}