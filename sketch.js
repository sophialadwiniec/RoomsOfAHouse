/***********************************************************************************
	RoomsOfAHouse 
	by Sophia Ladwiniec

Here is my dream home - I love cats and dogs and great decor :) 
------------------------------------------------------------------------------------
***********************************************************************************/

// Array of images
var images = [];
// Array of functions
var functions = []; 
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


// Center drawing, drawFunction will be one for default
function setup() {
  createCanvas(800, 600);

  midX = width/2;
  startY = 60;

  // Center our drawing objects
  imageMode(CENTER);
  textAlign(CENTER);
  textSize(24);

  // set to one for startup
  drawFunction = houseFront;
}

// Very simple, sets the background color and calls your state machine function
function draw() {
  background(192);

  // will call your state machine function
  drawFunction();
}


//-- houseFront() will draw the front of the house
houseFront = function() {
   image(images[0],width/2, height/2);

   fill(255); 
   text("Front of House", width/2, height - gTextOffset);
}

//-- foyer will draw the foyer
foyer = function() {
   image(images[1],width/2, height/2);

   fill(255); 
   text("Foyer", width/2, height - gTextOffset);
}

//-- dining room will draw the dining room
diningRoom = function() {
   image(images[2],width/2, height/2);

   fill(255);
   text("Dining Room", width/2, height - gTextOffset);
}

//-- kitchen will draw the kitchen
kitchen = function() {
   image(images[3],width/2, height/2);

   fill(255);
   text("Kitchen", width/2, height - gTextOffset);
}

//-- stairs will draw the stairs
stairs = function() {
   image(images[4],width/2, height/2);

   fill(255);
   text("Stairs", width/2, height - gTextOffset);
}

//-- upstairs will draw the upstairs
upstairs = function() {
   image(images[5],width/2, height/2);
   fill(255);
   text("Upstairs Room", width/2, height - gTextOffset);
   
}

//-- roof will draw the roof 
roof = function() {
   image(images[6],width/2, height/2);
   fill(255);
   text("Roof", width/2, height - gTextOffset);
   
}


// keytyped() changes the room based off the specific room they are in and allows only certain keys to be pressed 
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
      drawFunction = diningRoom; 
    }
    if(key === 's'){
      drawFunction = stairs; 
    }
  }

  if (drawFunction === diningRoom){
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
      drawFunction = diningRoom; 
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

