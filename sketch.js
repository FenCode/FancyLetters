var startXA = 0;
var startYA = 0;
var startXB = 0;
var startYB = 0;
var maxC1;
var randomR1;
var randomG1;
var randomB1;
var maxC2;
var randomR2;
var randomG2;
var randomB2;
var maxC3;
var randomR3;
var randomG3;
var randomB3;
var thickness1;
var thickness2;
var thickness3;
var noiseSeed1;
var noiseSeed2;
var words;
var factor = 6;
var backgroundC;

function setup() {
	createCanvas(640, 480);
	stroke(255);
	backgroundC = Math.floor(random(0,256));
	maxC1 = 256;
	randomR1 = Math.floor(random(maxC1));
	randomG1 = Math.floor(random(maxC1 - randomR1));
	randomB1 = maxC1 - randomR1 - randomG1;
	randomR1 = roundColor(randomR1);
	randomG1 = roundColor(randomG1);
	randomB1 = roundColor(randomB1);
	maxC2 = 512;
	randomR2 = Math.floor(random(maxC2));
	randomG2 = Math.floor(random(maxC2 - randomR2));
	randomB2 = maxC2 - randomR2 - randomG2;
	randomR2 = roundColor(randomR2);
	randomG2 = roundColor(randomG2);
	randomB2 = roundColor(randomB2);
	maxC3 = 128;
	randomR3 = Math.floor(random(maxC3));
	randomG3 = Math.floor(random(maxC3 - randomR3));
	randomB3 = maxC3 - randomR3 - randomG3;
	randomR3 = roundColor(randomR3);
	randomG3 = roundColor(randomG3);
	randomB3 = roundColor(randomB3);
	thickness1 = random(200, 300);
	thickness2 = random(100, 200);
	thickness3 = random(80, 150);
	noiseSeed1 = random()*1000;
	noiseSeed2 = random()*1000;
	noFill();

	r1Slider = createSlider(0, 255, randomR1);
	r1Slider.position(-width * 2, -length * 2);
	g1Slider = createSlider(0, 255, randomG1);
	g1Slider.position(-width * 2, -length * 2);
	b1Slider = createSlider(0, 255, randomB1);
	b1Slider.position(-width * 2, -length * 2);

	r2Slider = createSlider(0, 255, randomR2);
	r2Slider.position(-width * 2, -length * 2);
	g2Slider = createSlider(0, 255, randomG2);
	g2Slider.position(-width * 2, -length * 2);
	b2Slider = createSlider(0, 255, randomB2);
	b2Slider.position(-width * 2, -length * 2);

	r3Slider = createSlider(0, 255, randomR3);
	r3Slider.position(-width * 2, -length * 2);
	g3Slider = createSlider(0, 255, randomG3);
	g3Slider.position(-width * 2, -length * 2);
	b3Slider = createSlider(0, 255, randomB3);
	b3Slider.position(-width * 2, -length * 2);
}

function draw() {
	background(backgroundC);
	words = document.getElementById("textBox").value;
	stroke(randomR1,randomG1,randomB1);
	writeLetters(words, factor, thickness1);
	stroke(randomR2,randomG2,randomB2);
	writeLetters(words, factor, thickness2);
	stroke(randomR3,randomG3,randomB3)
	writeLetters(words, factor, thickness3);

	if(document.getElementById("radio1").checked)
	{
		r1Slider.position(200, 20);
		g1Slider.position(200, 50);
		b1Slider.position(200, 80);
		randomR1 = r1Slider.value();
		randomG1 = g1Slider.value();
		randomB1 = b1Slider.value();

		r2Slider.position(-width * 2, -length * 2);
		g2Slider.position(-width * 2, -length * 2);
		b2Slider.position(-width * 2, -length * 2);
		r3Slider.position(-width * 2, -length * 2);
		g3Slider.position(-width * 2, -length * 2);
		b3Slider.position(-width * 2, -length * 2);

	}
	else if(document.getElementById("radio2").checked)
	{
		r2Slider.position(200, 20);
		g2Slider.position(200, 50);
		b2Slider.position(200, 80);
		randomR2 = r2Slider.value();
		randomG2 = g2Slider.value();
		randomB2 = b2Slider.value();

		r1Slider.position(-width * 2, -length * 2);
		g1Slider.position(-width * 2, -length * 2);
		b1Slider.position(-width * 2, -length * 2);
		r3Slider.position(-width * 2, -length * 2);
		g3Slider.position(-width * 2, -length * 2);
		b3Slider.position(-width * 2, -length * 2);
	}
	else if(document.getElementById("radio3").checked)
	{
		r3Slider.position(200, 20);
		g3Slider.position(200, 50);
		b3Slider.position(200, 80);
		randomR3 = r3Slider.value();
		randomG3 = g3Slider.value();
		randomB3 = b3Slider.value();

		r1Slider.position(-width * 2, -length * 2);
		g1Slider.position(-width * 2, -length * 2);
		b1Slider.position(-width * 2, -length * 2);
		r2Slider.position(-width * 2, -length * 2);
		g2Slider.position(-width * 2, -length * 2);
		b2Slider.position(-width * 2, -length * 2);
	}

}

function randomizeFeatures()
{
	backgroundC = Math.floor(random(0,256));

	randomR1 = Math.floor(random(maxC1));
	randomG1 = Math.floor(random(maxC1 - randomR1));
	randomB1 = maxC1 - randomR1 - randomG1;
	randomR1 = roundColor(randomR1);
	randomG1 = roundColor(randomG1);
	randomB1 = roundColor(randomB1);
	
	r1Slider.value = randomR1;
	b1Slider.value = randomB1;
	g1Slider.value = randomG1;

	randomR2 = Math.floor(random(maxC2));
	randomG2 = Math.floor(random(maxC2 - randomR2));
	randomB2 = maxC2 - randomR2 - randomG2;
	randomR2 = roundColor(randomR2);
	randomG2 = roundColor(randomG2);
	randomB2 = roundColor(randomB2);

	r2Slider.value = randomR2;
	b2Slider.value = randomB2;
	g2Slider.value = randomG2;

	randomR3 = Math.floor(random(maxC3));
	randomG3 = Math.floor(random(maxC3 - randomR3));
	randomB3 = maxC3 - randomR3 - randomG3;
	randomR3 = roundColor(randomR3);
	randomG3 = roundColor(randomG3);
	randomB3 = roundColor(randomB3);

	r3Slider.value = randomR3;
	b3Slider.value = randomB3;
	g3Slider.value = randomG3;

	thickness1 = random(200, 300);
	thickness2 = random(100, 200);
	thickness3 = random(80, 150);

	noiseSeed1 = random()*1000;
	noiseSeed2 = random()*1000;
}

function writeLetters(words, scale, thickness)
{
	for(var i = 0; i < words.length; i++)
	{
		var letter = words[i].toLowerCase();
		if(letter.match(/[a-z]/i))
		{
			if(words.length == 1)
			{
				startXA = width/2;
				startYA = height/2;
				strokeWeight(thickness);
				this[letter](scale, startXA, startYA);
			}
			else if(words.length < 8)
			{
				noiseSeed(noiseSeed1);
				startXA = (i+1) * width/(words.length + 1) + 10*(1-noise(i));
				startYA = height/2 + 40*(1-noise(i));
				noiseSeed(noiseSeed2);
				strokeWeight(thickness *2/(words.length+1)*(noise(i)+0.5));
				this[letter](scale*2/(words.length+1)*(noise(i)+0.5), startXA, startYA);
			}
			else if(words.length < 16)
			{
				if(i < 8)
				{
					noiseSeed(noiseSeed1);
					startXA = (i+1) * width/(8 + 1) + 10*(1-noise(i));
					startYA = height/3 + 40*(1-noise(i));
					noiseSeed(noiseSeed2);
					strokeWeight(thickness*2/(8+1)*(noise(i)+0.5));
					this[letter](scale*2/(8+1)*(noise(i)+0.5), startXA, startYA);
				}
				else
				{
					noiseSeed(noiseSeed1);
					startXA = (i-8+1) * width/(words.length-8 + 1) + 10*(1-noise(i));
					startYA = height*2/3 + 40*(1-noise(i));
					noiseSeed(noiseSeed2);
					strokeWeight(thickness*2/(words.length-8+1)*(noise(i)+0.5));
					this[letter](scale*2/(words.length-8+1)*(noise(i)+0.5), startXA, startYA);
				}
			}
			else
			{
				if(i < 8)
				{
					noiseSeed(noiseSeed1);
					startXA = (i+1) * width/(8 + 1) + 10*(1-noise(i));
					startYA = height/4 + 40*(1-noise(i));
					noiseSeed(noiseSeed2);
					strokeWeight(thickness*2/(8+1)*(noise(i)+0.5));
					this[letter](scale*2/(8+1)*(noise(i)+0.5), startXA, startYA);
				}
				else if(i < 16)
				{
					noiseSeed(noiseSeed1);
					startXA = (i-8+1) * width/(16-8 + 1) + 10*(1-noise(i*2));
					startYA = height*1/2 + 40*(1-noise(i));
					noiseSeed(noiseSeed2);
					strokeWeight(thickness*2/(16-8+1)*(noise(i)+0.5));
					this[letter](scale*2/(16-8+1)*(noise(i)+0.5), startXA, startYA);
				}
				else
				{
					noiseSeed(noiseSeed1);
					startXA = (i-16+1) * width/(words.length-16 + 1) + 10*(1-noise(i));
					startYA = height*3/4 + 40*(1-noise(i));
					noiseSeed(noiseSeed2);
					strokeWeight(thickness*2/(words.length-16+1)*(noise(i)+0.5));
					this[letter](scale*2/(words.length-16+1)*(noise(i)+0.5), startXA, startYA);
				}
			}
		}
	}
}

function roundColor(color)
{
	if(color > 255)
	{
		color = 255;
	}
	return color;
}

 function a(factor, x, y)
 {
	var x1 = 0;
	var y1 = -30;
	var x2 = -25;
	var y2 = 30;
	line(x + x1*factor, y + y1*factor,
		x + x2*factor, y + y2*factor);
	line(x + x1*factor, y + y1*factor,
		x + (x2 + 50)*factor, y + y2*factor);
	line(x + (((x1+x2)/2 + x2)/2)*factor,
		y + (((y1+y2)/2 + y2)/2)*factor,
		x + (((x1+x2+50)/2 + x2+50)/2)*factor, 
		y + (((y1+y2)/2 + y2)/2)*factor);
}

function b(factor, x, y)
 {
	bezier(x - 25*factor,y -30*factor,
 		x + 25*factor,y - 30*factor,
 		x + 25*factor,y + 0*factor,
 		x - 25*factor,y + 0*factor);
 	bezier(x -25*factor,y + 0*factor,
 		x + 25*1.5*factor,y + 0*factor,
 		x + 25*1.5*factor,y + 30*factor,
 		x -25*factor,y + 30*factor);
 	line(x -25*factor, y - 30*factor,
 		x -25*factor, y + 30*factor);
 }
 function c(factor, x, y)
 {
 	bezier(x + 25*factor,y -30*factor,
	 	x -25*1.5*factor,y -30*1.5*factor,
	 	x -25*1.5*factor,y + 30*1.5*factor,
	 	x + 25*factor,y + 30*factor);
 }
function d(factor, x, y)
{
 	bezier(x - 25*factor,y - 30*factor,
 		x + 25*factor,y - 30*factor,
 		x + 25*factor,y + 30*factor,
 		x - 25*factor,y + 30*factor);
 	line(x - 25*factor, y + 30*factor,
 		x - 25*factor, y - 30*factor);
}
function e(factor, x, y)
{
	line(x - 25*factor, y + 30*factor,
 		x - 25*factor, y - 30*factor);
 	line(x - 25*factor, y - 30*factor,
 		x + 25*factor, y - 30*factor);
 	line(x - 25*factor, y + 0*factor,
 		x + 8*factor, y + 0*factor);
 	line(x - 25*factor, y + 30*factor,
 		x + 25*factor, y + 30*factor);
}

function f(factor, x, y)
{
	line(x - 25*factor, y + 30*factor,
 		x - 25*factor, y - 30*factor);
 	line(x - 25*factor, y - 30*factor,
 		x + 25*factor, y - 30*factor);
 	line(x - 25*factor, y + 0*factor,
 		x + 8*factor, y + 0*factor);
}
function g(factor, x, y)
{
	bezier(x + 25*factor,y -30*factor,
		x -25*1.5*factor,y -30*factor,
		x -25*1.5*factor,y + 30*factor,
		x + 25*factor,y + 30*factor);
	line(x + 25*factor, y + 0*factor,
 		x + 25*factor, y + 30*factor);
	line(x + 12*factor, y + 0*factor,
 		x + 25*factor, y + 0*factor);
}
function h(factor, x, y)
{
	line(x - 25*factor, y + 30*factor,
 		x - 25*factor, y - 30*factor);
 	line(x - 25*factor, y + 0*factor,
 		x + 25*factor, y + 0*factor);
	line(x + 25*factor, y + 30*factor,
 		x + 25*factor, y - 30*factor);
}
function i(factor, x, y)
{
	line(x + 0*factor, y + 30*factor,
 		x + 0*factor, y - 30*factor);
 	line(x - 25*factor, y - 30*factor,
 		x + 25*factor, y - 30*factor);
	line(x - 25*factor, y + 30*factor,
 		x + 25*factor, y + 30*factor);
}
function j(factor, x, y)
{
 	bezier(x + 25*factor,y + 20*factor,
	 	x +25*factor,y + 30*1.5*factor,
	 	x -25*factor,y + 30*1.5*factor,
	 	x - 25*factor,y + 20*factor);
	line(x + 25*factor,y + 20*factor,
 		x + 25*factor, y - 30*factor);
}
function k(factor, x, y)
{
	line(x - 25*factor, y + 30*factor,
 		x - 25*factor, y - 30*factor);
 	line(x - 25*factor, y + 0*factor,
 		x + 25*factor, y - 28*factor);
	line(x - 25*factor, y + 0*factor,
 		x + 25*factor, y + 28*factor);
}
function l(factor, x, y)
{
	line(x - 25*factor, y + 30*factor,
 		x - 25*factor, y - 30*factor);
 	line(x - 25*factor, y + 30*factor,
 		x + 25*factor, y + 30*factor);
}
function m(factor, x, y)
{
	line(x - 25*factor, y + 30*factor,
 		x - 12.5*factor, y - 30*factor);
	line(x - 12.5*factor, y - 30*factor,
 		x + 0*factor, y + 15*factor);
	line(x + 0*factor, y + 15*factor,
 		x + 12.5*factor, y - 30*factor);
	line(x + 12.5*factor, y - 30*factor,
 		x + 25*factor, y + 30*factor);
}
function n(factor, x, y)
{
	line(x - 25*factor, y + 30*factor,
 		x - 25*factor, y - 30*factor);
 	line(x - 25*factor, y - 30*factor,
 		x + 25*factor, y + 30*factor);
	line(x + 25*factor, y + 30*factor,
 		x + 25*factor, y - 30*factor);
}
function o(factor, x, y)
{
	bezier(x + 25*factor,y + 0*factor,
	 	x +25*factor,y - 30*1.5*factor,
	 	x -25*factor,y - 30*1.5*factor,
	 	x - 25*factor,y + 0*factor);
 	bezier(x + 25*factor,y + 0*factor,
	 	x +25*factor,y + 30*1.5*factor,
	 	x -25*factor,y + 30*1.5*factor,
	 	x - 25*factor,y + 0*factor);
}
function p(factor, x, y)
 {
	bezier(x - 25*factor,y -30*factor,
 		x + 25*1.5*factor,y - 30*factor,
 		x + 25*1.5*factor,y + 10*factor,
 		x - 25*factor,y + 10*factor);
 	line(x -25*factor, y - 30*factor,
 		x -25*factor, y + 30*factor);
 }
 function q(factor, x, y)
{
	bezier(x + 25*factor,y + 0*factor,
	 	x +25*factor,y - 30*1.5*factor,
	 	x -25*factor,y - 30*1.5*factor,
	 	x - 25*factor,y + 0*factor);
 	bezier(x + 25*factor,y + 0*factor,
	 	x +25*factor,y + 30*1.5*factor,
	 	x -25*factor,y + 30*1.5*factor,
	 	x - 25*factor,y + 0*factor);
 	line(x + 6*factor, y + 15*factor,
 		x +25*factor, y + 30*factor);
}
function r(factor, x, y)
 {
	bezier(x - 25*factor,y -30*factor,
 		x + 25*1.5*factor,y - 30*factor,
 		x + 25*1.5*factor,y + 5*factor,
 		x - 25*factor,y + 5*factor);
 	line(x -25*factor, y - 30*factor,
 		x -25*factor, y + 30*factor);
 	line(x -25*factor, y + 5*factor,
 		x +25*factor, y + 30*factor);
 }
 function s(factor, x, y)
 {
	bezier(x + 25*factor,y -30*factor,
 		x - 25*1.5*factor,y - 30*factor,
 		x - 25*1.5*factor,y + 0*factor,
 		x + 0*factor,y + 0*factor);
	bezier(x - 0*factor,y + 0*factor,
 		x + 25*1.5*factor,y + 0*factor,
 		x + 25*1.5*factor,y + 30*factor,
 		x - 25*factor,y + 30*factor);
 }
function t(factor, x, y)
{
	line(x + 0*factor, y + 30*factor,
 		x + 0*factor, y - 30*factor);
 	line(x - 25*factor, y - 30*factor,
 		x + 25*factor, y - 30*factor);
}
function u(factor, x, y)
{
 	bezier(x + 25*factor,y -30*factor,
	 	x +25*1.25*factor,y + 30*1.5*factor,
	 	x -25*1.25*factor,y + 30*1.5*factor,
	 	x - 25*factor,y -30*factor);
}
function v(factor, x, y)
{
	line(x -25*factor, y - 30*factor,
 		x + 0*factor, y + 30*factor);
 	line(x + 0*factor, y + 30*factor,
 		x + 25*factor, y - 30*factor);
}
function w(factor, x, y)
{
	line(x - 25*factor, y - 30*factor,
 		x - 12.5*factor, y + 30*factor);
	line(x - 12.5*factor, y + 30*factor,
 		x + 0*factor, y - 10*factor);
	line(x + 0*factor, y  - 10*factor,
 		x + 12.5*factor, y + 30*factor);
	line(x + 12.5*factor, y + 30*factor,
 		x + 25*factor, y - 30*factor);
}
function x(factor, x, y)
{
	line(x - 25*factor, y - 30*factor,
 		x + 25*factor, y + 30*factor);
	line(x - 25*factor, y + 30*factor,
 		x + 25*factor, y - 30*factor);
}
function y(factor, x, y)
{
	line(x - 25*factor, y - 30*factor,
 		x + 0*factor, y + 5*factor);
	line(x + 25*factor, y - 30*factor,
 		x + 0*factor, y + 5*factor);
	line(x + 0*factor, y + 5*factor,
 		x + 0*factor, y + 30*factor);
}
function z(factor, x, y)
{
	line(x - 25*factor, y - 30*factor,
 		x + 25*factor, y - 30*factor);
 	line(x - 25*factor, y + 30*factor,
 		x + 25*factor, y - 30*factor);
	line(x - 25*factor, y + 30*factor,
 		x + 25*factor, y + 30*factor);
}