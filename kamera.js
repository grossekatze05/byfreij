var img;
var x = 0;
var y = 0;

function setup() {
	c = createCanvas(1000, 500);
	background(0);

	// activate webcam
	img = createCapture(VIDEO); // selfie camera
	//img = createCapture({ audio: false, video: { facingMode: { exact: "environment" } }}); // backside camera
	img.size(1280, 720);
	img.hide();
}

function draw() {
	//background(255);
	//image(img, mouseX, 0);

	// Pixel in Speicher laden
	img.loadPixels();
	img.updatePixels();

	
	// a one pixel wide column of the current webcam image
	// at the current position x
	var line = img.get(img.width/2, 0, 1, img.height);
	
	// move to the next position x
	translate(x, 0);
	
	//rotate(sin(millis()/1000.0));
	
	// colorize the line
	//tint(x/2, 0, 100);
	//tint(255, 0, 100);
	
	//filter(BLUR, 3);
	
	// show line image at position
	image(line, 0, 0);
	//image(line, 0, 0, 2, height); // Scale -> Pixelize / Speed
	
	//noTint();
	
	// increment the position x or set to zero (at the end)
	if (x < width)
		x += 1; // += 2 -> Spationierung / Speed
		else {
            x = 0;
            saveCanvas(c, 'screenshot', 'jpg');
        }
	
	// a one pixel wide row of the current webcam image
	// at the current position y
	/*
	var line = img.get(0, y, img.width, 1);
	image(line, 0, 0);
	translate(0, y);

	if (y < img.height)
		y += 1;
	else
		y = 0;
		*/
}

function mousePressed()
{
	saveCanvas(c, 'screenshot', 'jpg');
}







// rotate(sin(millis()/1000.0));
// translate(random(width), 0);
// translate(width/2+sin(millis()/1000.0)*width/2, 0);