var x = 0;
var y = 0;
var speed = .6;
var start = false;
var freemove = false;
var TourNum = 0;
var run = [];
var numImage = 0;
var stand;
var MarioJump;
var icons = {};
var OverLay;

function preload() {
  run.push(loadImage("ResumeRunnerGame/pngs/run1.png"));
  run.push(loadImage("ResumeRunnerGame/pngs/run2.png"));
  run.push(loadImage("ResumeRunnerGame/pngs/run3.png"));
  stand = loadImage("ResumeRunnerGame/pngs/stand1.png");
  MarioJump = loadImage("ResumeRunnerGame/pngs/jump1.png");
}

function setup() {
  OverLay = new overLay();
  createCanvas(windowWidth, windowHeight - 5);
  imageMode(CENTER);
}

function draw() {
  tourMov();
  camera.on();
  camera.zoom = 5.0;
  camera.position.x = x;
  camera.position.y = 0;
  background(255);
  fill(0);
  switch (TourNum) {
    case 0:
      updateMario();
      break
    case 1:
      updatePackman();
      break
    case 2:
      break;
    case 3:
      break;
  }
  OverLay.display();
  keyPressed();
}

function keyPressed() {
  if (freemove) {
    if (keyIsDown(39)) {
      x += speed * 2;
    }
    if (keyIsDown(37)) {
      x -= speed * 2;
    }
    if (keyIsDown(38)) {
      // y -= speed;
    }
    if (keyIsDown(40)) {
      // y += speed;
    }
    if (keyIsDown(32)) {
      if (MarioIntervalJump == -1) {
        marioJump();
      }
    }
    camera.position.x = x;
    camera.position.y = 0;
  }
}

function keyPressedRobot(key) {
  if (key == 39) {
    x += speed * 2;
  }
  if (key == 37) {
    x -= speed * 2;
  }
  if (key == 38) {
    // y -= speed;
  }
  if (key == 40) {
    // y += speed;
  }
  if (key == 32) {
    if (MarioIntervalJump == -1) {
      marioJump();
    }
  }
  camera.position.x = x;
  camera.position.y = 0;
}