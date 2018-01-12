$(document).ready(function () {
    var k = [38, 38, 40, 40, 37, 39, 37, 39],
            n = 0;
    $(document).keydown(function (e) {
        if (e.keyCode === k[n++]) {
            if (n === k.length) {
                alert('\"Nous sommes comme des papillons qui battent des ailes pendant un jour en pensant que c\'est l\'éternité.\" Carl Sagan.');
                n = 0;
                return false;
            }
        } else {
            n = 0;
        }
    });
});