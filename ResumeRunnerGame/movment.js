// 122.8,
// 144.2,
// 165.6,
// 187.0,
// 251.2,
// 272.6,
// 336.8,
// 358.2,
// 379.6

function tourMov() {
  if (start) {
    if (TourNum == 0) {
      // console.log("X");
      keyPressedRobot(39);
      if ((x >= 119) && (x <= 124)) {
        keyPressedRobot(32);
      }
      if ((x >= 184) && (x <= 188)) {
        keyPressedRobot(32);
      }
      if ((x >= 269) && (x <= 274)) {
        keyPressedRobot(32);
      }
      if ((x >= 354) && (x <= 359)) {
        keyPressedRobot(32);
      }
    }
    if (x > 530 && x < 531.1) {
      start = false;
      setTimeout(() => {
        start = true;
      }, 3000)
    }


  }
}