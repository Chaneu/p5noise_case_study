function setup() {
  createCanvas(600, 600);
  background(40);
  // fill(255);

  colorMode(HSB);
  let mainHue = random(0, 360);

  let mountainCount = random(3, 8);
  let mountainHeight = height / mountainCount;

  for (let m = 0; m < mountainCount; m++) {
    mainHue += random(-60, 60);
    if (mainHue > 360) {
      mainHue -= 360;
    } else if (mainHue < 0) {
      mainHue += 360;
    }
    for (let x = 0; x < 4 * width; x++) {
      let posX = x;
      let posY = m * mountainHeight;
      let noiseY = noise(x * 0.01, m * 0.8);
      posY += noiseY * 100 - 50;
      noStroke();
      // fill(255);
      // circle(posX / 4, posY, 3);
      let lineLength = mountainHeight - 10;
      if (x % 6 == 0) {
        for (let i = 0; i < lineLength; i++) {
          let lineY = posY + i;
          let lineNoise = noise(posX * 0.07, lineY * 0.01);
          let dotHue = mainHue + random(-40, 40);
          let dotSat = random(50, 70);
          let dotBri = random(60, 80);
          fill(dotHue, dotSat, dotBri, lineNoise * 0.5);
          if (random(1) > i / lineLength) {
            circle(posX / 4, lineY, lineNoise * 5);
          }
        }
      }
      fill("#f1f1f1");
      circle(posX / 4, posY, 4);
      // circle(posX / 4, posY + 10, 3);
      // circle(posX / 4, posY + 16, 2);
      // circle(posX / 4, posY + 24, 1);
    }
  }

  let frameThickness = 18;
  rect(0, 0, width, frameThickness);
  rect(0, height, width, -frameThickness);
  rect(0, 0, frameThickness, height);
  rect(width, 0, -frameThickness, height);
}

function draw() {}
