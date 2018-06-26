var img;
var capture; 
var W = 1080, H = 720;
var i = 0, j = 0;

function setup(){

    createCanvas(W, H);
    // uncomment to use HSC color mode, otherwise defaults to RGB
    //colorMode(HSB, 100);

    // uncomment to enable webcam feed
    capture = createCapture(VIDEO);
    capture.size(W, H);
    capture.hide();

    //img = loadImage('assets/test.jpg');  
}

function draw(){

    //background(255);

    image(capture, i*(W/10), j*(H/10), W/10, H/10); 

    if(keyIsDown(RIGHT_ARROW)){
    	i++;
    }

    if(i == 10){
        i = 0;
        j++;
    }
    if(j == 10){
        j = 0;
    }
    
    //image(img, 0, 0, W, H);

    fill(0, 102, 153);
    textSize(32);
    textAlign(LEFT);
    text('HELLO P5', 50, 50);

}

