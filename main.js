var img;
var capture; 
var W = 1080, H = 720;

function setup(){

    createCanvas(W, H);
    // uncomment to use HSC color mode, otherwise defaults to RGB
    //colorMode(HSB, 100);

    // uncomment to enable webcam feed
    //capture = createCapture(VIDEO);
    //capture.size(W, H);
    //capture.hide();

    img = loadImage('assets/test.jpg');  
}

function draw(){

    background(255);

    //image(capture, 0, 0, W, H); 

    image(img, 0, 0, W, H);

    fill(0, 102, 153);
    textSize(32);
    textAlign(LEFT);
    text('HELLO P5', 50, 50);

}

