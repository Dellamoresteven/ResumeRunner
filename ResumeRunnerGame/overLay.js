// var coins = 0;
class overLay {
  constructor() {
    this.gmail = loadImage("ResumeRunnerGame/pngs/gmail.png");
    this.github = loadImage("ResumeRunnerGame/pngs/github.png");
    this.linkden = loadImage("ResumeRunnerGame/pngs/linkden.png");
    this.phone = loadImage("ResumeRunnerGame/pngs/phone.png");
  }

  display() {
    // tint(255, 127);
    if (boxInfo[4][0] != -1)
      image(this.gmail, camera.position.x - windowWidth * 0.09292265193, camera.position.y - windowHeight * 0.09002265193, this.gmail.width / 50, this.gmail.height / 50);
    if (boxInfo[4][3] != -1)
      image(this.github, camera.position.x - windowWidth * 0.09292265193 + 13, camera.position.y - windowHeight * 0.09002265193, this.github.width / 170, this.github.height / 170);
    if (boxInfo[4][5] != -1)
      image(this.linkden, camera.position.x - windowWidth * 0.09292265193 + 25, camera.position.y - windowHeight * 0.09002265193, this.linkden.width / 120, this.linkden.height / 120);
    if (boxInfo[4][7] != -1)
      image(this.phone, camera.position.x - windowWidth * 0.09292265193 + 37, camera.position.y - windowHeight * 0.09002265193, this.phone.width / 49, this.phone.height / 49);
  }
}