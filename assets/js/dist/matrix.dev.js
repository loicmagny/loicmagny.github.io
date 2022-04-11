"use strict";

// Initialising the canvas
var canvas = document.querySelector('canvas'),
    ctx = canvas.getContext('2d'); // Setting the width and height of the canvas

canvas.width = window.innerWidth;
canvas.height = window.innerHeight; // Setting up the letters

var letters = 'ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvwxyz0123456789';
letters = letters.split(''); // Setting up the columns

var fontSize = 12,
    columns = canvas.width / fontSize; // Setting up the drops

var drops = [];

for (var i = 0; i < columns; i++) {
  drops[i] = 1;
} // Setting up the draw function


function draw() {
  var alpha = $('#alpha').val() / 100;
  var red = $('#red').val();
  var green = $('#green').val();
  var blue = $('#blue').val();
  fontSize = $('#fontSize').val();
  fontColor = $('#fontColor').val();
  ctx.fillStyle = 'rgba(' + red + ',' + green + ',' + blue + ',' + alpha + ')';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (var i = 0; i < drops.length; i++) {
    var text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillStyle = '' + fontColor + '';
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    drops[i]++;

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
      drops[i] = 0;
    }
  }
} // Loop the animation


setInterval(draw, 30);