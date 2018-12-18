function updatePackman() {
  rectMode(CENTER);
  fill(255);
  rect(camera.position.x, camera.position.y, (windowWidth / camera.zoom) - 4, (windowHeight / camera.zoom) - 4);
}