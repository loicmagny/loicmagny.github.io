"use strict";

var array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var delay = function delay(ms) {
  return new Promise(function (res) {
    return setTimeout(res, ms);
  });
};

$('#rainMaker').click(function () {
  console.log('click');

  if ($('#rainMaker').attr('value') == 'off') {
    $('#rainMaker').attr('value', 'on');
    console.log('non');
    matrixRain(array);
  } else if ($('#rainMaker').attr('value') == 'on') {
    $('#rainMaker').attr('value', 'off');
    console.log('oui');
    matrixRain();
  }
});

function display() {}

var matrixRain = function matrixRain() {
  var columns, x, i;
  return regeneratorRuntime.async(function matrixRain$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log('ça part');
          display();
          columns = Math.round(window.innerWidth / 12);
          console.log(columns);
          $('#rain').css('height', '100vh');
          $('#rain').css('width', '100vw');
          x = 0;

        case 7:
          if (!(x < columns)) {
            _context.next = 22;
            break;
          }

          console.log(x);
          $('#rain').append('<div class="row">' + '<div class="col s2" id="drop_' + x + '">' + '</div>' + '</div>');
          i = 0;

        case 11:
          if (!(i < array.length)) {
            _context.next = 19;
            break;
          }

          $('#drop_' + i + '').append('<span class="droplets" id="droplet_' + i + '">' + array[Math.floor(Math.random() * array.length)] + '' + '</span>');
          $('.droplets').css({
            position: 'absolute',
            top: 0,
            width: '40px',
            height: '40px',
            margin: '0.5rem',
            color: 'green'
          }).appendTo(document.body).animate({
            top: '100vh',
            // for instance
            overflow: 'hidden !important'
          }, 2000); // if ($('#droplet_' + i + '').offset().top() > $(document.body).height()) {
          // 	console.log('caché');
          // 	$('.droplets').hide();
          // }
          // $(').appendTo({ bottom: '100px' }, 'slow');

          _context.next = 16;
          return regeneratorRuntime.awrap(delay(320));

        case 16:
          i++;
          _context.next = 11;
          break;

        case 19:
          x++;
          _context.next = 7;
          break;

        case 22:
        case "end":
          return _context.stop();
      }
    }
  });
}; // // Initialising the canvas
// var canvas = document.querySelector('#rain'),
// 	ctx = canvas.getContext('2d');
// // Setting the width and height of the canvas
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
// // Setting up the letters
// var letters =
// 	'ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ';
// letters = letters.split('');
// // Setting up the columns
// var fontSize = 10,
// 	columns = canvas.width / fontSize;
// // Setting up the drops
// var drops = [];
// for (var i = 0; i < columns; i++) {
// 	drops[i] = 1;
// }
// // Setting up the draw function
// function draw() {
// 	ctx.fillStyle = 'rgba(0, 0, 1, .1)';
// 	ctx.fillRect(0, 0, canvas.width, canvas.height);
// 	for (var i = 0; i < drops.length; i++) {
// 		var text = letters[Math.floor(Math.random() * letters.length)];
// 		ctx.fillStyle = '#0f0';
// 		ctx.fillText(text, i * fontSize, drops[i] * fontSize);
// 		drops[i]++;
// 		if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
// 			drops[i] = 0;
// 		}
// 	}
// }
// // Loop the animation
// setInterval(draw, 33);