var startMario = 0;
var MarioIntervalJump = -1;
var iconJumpInterval = -1;
// boxInfo[0] = interval
// boxInfo[1] = xPos
// boxInfo[2] = yPos
// boxInfo[3] = fill
// boxInfo[4] = Image
// boxInfo[5] = Interact
// boxInfo[6] = iconX
// boxInfo[7] = iconY
var boxInfo = [
  [
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1
  ],
  [
    122.8,
    144.2,
    165.6,
    187.0,
    251.2,
    272.6,
    336.8,
    358.2,
    379.6
  ],
  [
    -40,
    -40,
    -40,
    -40,
    -40,
    -40,
    -40,
    -40,
    -40
  ],
  [
    0,
    255,
    255,
    0,
    255,
    0,
    255,
    0,
    255
  ],
  [
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    122.8,
    144.2,
    165.6,
    187.0,
    251.2,
    272.6,
    336.8,
    358.2,
    379.6
  ],
  [
    -40,
    -40,
    -40,
    -40,
    -40,
    -40,
    -40,
    -40,
    -40
  ]
];

function updateMario() {
  // camera.position.x = x;
  // createVector(0, 0);
  imageMode(CENTER);
  rectMode(CENTER);
  for (var i = 0; i < boxInfo[0].length; i++) {
    fill(boxInfo[3][i]);
    rect(boxInfo[1][i], boxInfo[2][i], 20, 20, 5);
  }
  if (start) {
    if (startMario === 0) {
      setInterval(() => {
        numImage = (numImage + 1) % run.length;
      }, 150)
    }

    if (MarioIntervalJump != -1) {
      image(MarioJump, x, y - 1, MarioJump.width / 1, MarioJump.height / 1);
    } else {
      image(run[numImage], x, y - 1, run[numImage].width / 1, run[numImage].height / 1);
    }
    startMario++;
    // line(-800, 5, 300, 5);
    line(800, 16, 800, 100);

    // x += 1;
  } else {
    image(stand, x, y - 1, stand.width / 1, stand.height / 1);
  }
  fill(0);
  line(-500, 16, 800, 16);
  fill(255);

  for (var i = 0; i < boxInfo[0].length; i++) {
    if (boxInfo[5][i] == 1) {
      if (boxInfo[4][i] != -1) {
        if (i == 0)
          image(boxInfo[4][i], boxInfo[6][i], boxInfo[7][i], boxInfo[4][i].width / 30, boxInfo[4][i].height / 30);
        if (i == 3)
          image(boxInfo[4][i], boxInfo[6][i], boxInfo[7][i] - 1, boxInfo[4][i].width / 90, boxInfo[4][i].height / 90);
        if (i == 5)
          image(boxInfo[4][i], boxInfo[6][i], boxInfo[7][i] - 1, boxInfo[4][i].width / 60, boxInfo[4][i].height / 60);
        if (i == 7)
          image(boxInfo[4][i], boxInfo[6][i], boxInfo[7][i] - 1, boxInfo[4][i].width / 25, boxInfo[4][i].height / 25);
      }
    }
  }
  if (x > 800) {
    marioFall();
  }
  if (x > 1000) {
    freemove = !freemove;
    TourNum++;
  }
}

function BoxBounce(num) {
  if (boxInfo[4][num] == -1) {
    setTimeout(() => {
      sendIcontoCorner(num);
    }, 1500);
    switch (num) {
      case 0:
        boxInfo[4][0] = loadImage("ResumeRunner/pngs/gmail.png");
        if (iconJumpInterval == -1) {
          iconJump(num);
        }
        break;
      case 3:
        boxInfo[4][3] = loadImage("ResumeRunner/pngs/github.png");
        if (iconJumpInterval == -1) {
          iconJump(num);
        }
        break
      case 5:
        boxInfo[4][5] = loadImage("ResumeRunner/pngs/linkden.png");
        if (iconJumpInterval == -1) {
          iconJump(num);
        }
        break;
      case 7:
        boxInfo[4][7] = loadImage("ResumeRunner/pngs/phone.png");
        if (iconJumpInterval == -1) {
          iconJump(num);
        }
        break
    }
  }
  boxInfo[3][num] = 255;
  let g = 0;
  boxInfo[0][num] = setInterval(() => {
    g++;
    if (g > 10) {
      boxInfo[2][num] += .4;
    } else {
      boxInfo[2][num] -= .4;
    }
    if (g == 20) {
      clearInterval(boxInfo[0][num]);
      boxInfo[0][num] = -1;
    }
  }, 10)
}

function iconJump(i) {

  let g = 0;
  let xPos = boxInfo[1][i];
  let yPos = boxInfo[2][i];
  fill(0);
  // ellipse(0, 0, 10, 10);
  // boom();
  iconJumpInterval = setInterval(() => {
    g++;
    fill(0);
    if (g > 29) {
      // image(boxInfo[4][i], boxInfo[6][i], boxInfo[7][i], boxInfo[4][i].width / 30, boxInfo[4][i].height / 30);
      boxInfo[7][i] += 1;
    } else {
      boxInfo[7][i] -= 1;
    }
    boxInfo[5][i] = 1;
    if (g == 40) {
      clearInterval(iconJumpInterval);
      iconJumpInterval = -1;
    }
  }, 10)
}

function marioJump() {
  let g = 0;
  MarioIntervalJump = setInterval(() => {
    g++;
    if (g > 10) {
      y += 2.3;
    } else if (g == 10) {
      y -= 2.3;
      MarioCheckHead();
    } else {
      y -= 2.3;
    }
    if (g == 20) {
      clearInterval(MarioIntervalJump);
      MarioIntervalJump = -1;
    }
  }, 10)
}

function marioFall() {
  let g = 0;
  if (MarioIntervalJump == -1) {

    MarioIntervalJump = setInterval(() => {
      g++;
      y += 2;
      if (g == 20) {
        clearInterval(MarioIntervalJump);
        MarioIntervalJump = -1;
      }
    }, 10)
  }
}

function MarioCheckHead() {
  for (let i = 0; i < boxInfo[0].length; i++) {
    if ((x >= (boxInfo[1][i] - 10)) && (x <= (boxInfo[1][i] + 10))) {
      BoxBounce(i);
    }
  }
}

function sendIcontoCorner(num) {
  if (boxInfo[4][num] != -1) {
    let g = 0;
    let tempInterval = setInterval(() => {
      g++;

      if (g == 100) {
        clearInterval(tempInterval);
      }
      boxInfo[6][num] += 3;
      boxInfo[7][num] += 1;
    }, 10);

  }
}