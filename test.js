function Bird() {
	this.y = width / 2;
	this.x = 25;

	this.show = function() {
		fill(255);
		ellipse(this.x, this.y, 15, 15);
	}
}

var bird;

function setup() {
	createCanvas(400, 600);
	bird = new Bird();
}

function draw() {
	background(0);
	bird.show();
}