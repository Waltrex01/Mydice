
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = 'dice' + randomNumber1 + '.png';

var randomImage = 'images/' + randomDiceImage;

var image1 = document.querySelectorAll('img')[0];
image1.setAttribute('src', randomImage);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = 'images/dice' + randomNumber2 + '.png';

var image2 = document.querySelectorAll('img')[1];
image2.setAttribute('src', randomDiceImage2);