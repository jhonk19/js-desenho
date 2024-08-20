function setup() {
    createCanvas(400, 400);
    background("gray");
  }
  
  function draw() {
    stroke("red");
    fill("green");
    
    if (mouseIsPressed) {
      ellipse(mouseX, mouseY, 50, 50);
    }
  }