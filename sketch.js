let x = 100;
let y = 200;

function setup() {
  let canvas = createCanvas(400,400);
  canvas.parent("project");
  background(220);
}

function draw() {
  if (mouseIsPressed) {
    if (keyCode == LEFT_ARROW) {
     x--; 
    } else if (keyCode == RIGHT_ARROW) {
      x++;
    } else if (keyCode == UP_ARROW) {
      y--;
    } else if (keyCode == DOWN_ARROW) {
      y++;
    }
  }
  ellipse(x, y, 50);
}

function mouseIsPressed() {
background(220)
}
  