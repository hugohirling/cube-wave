function setup() {
  createCanvas(800, 800, WEBGL);
}

var angle = 0;

function draw() {
  background(255);
  
  ortho(-width, width, height, -height,0, height*3);
  orbitControl();
  rotateX(0.2);
  rotateY(-0.8);
  
  //box(100,200,100);
  
  var boxCount = 10;
  var boxWidth = width/boxCount;
  var spacerWidth = 1;
  
  var lengthCube = boxCount*boxWidth + (boxCount-1)*spacerWidth;
  translate(+lengthCube/2, 0, +lengthCube/2);
  translate(-boxWidth-spacerWidth, 0, -boxWidth-spacerWidth);
  
  
  for(let z=0; z < boxCount; z++) {
    translate(-lengthCube, 0, -boxWidth+spacerWidth);
    for(let x=0; x < boxCount; x++) {
      var d = dist((x+0.5)*boxWidth, (z+0.5)*boxWidth, width/2, height/2);
      var offset = map(d, 0,dist(0,0,width/2, height/2), -1, 1);
      var boxHeight = float(map(sin(angle+offset),-1, 1, boxWidth*2, height/1.5));
      translate(boxWidth+spacerWidth, 0,0);
      normalMaterial();
      box(boxWidth, boxHeight, boxWidth); 
    }
  }
  
  angle += 0.05;
}