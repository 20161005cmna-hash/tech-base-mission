function omikujishow() {

    var omikuji = new Array('大吉','中吉','小吉');

    var number1 = Math.random();

    var number2 = number1 * 3;

    var number = Math.floor(number2);

    var message = omikuji[number];

    var object = document.getElementById("omikuji");

    object.innerText = message;

    var colors = new Array('pink','lightblue','purple');
    object.style.color=colors[number];

    var images = new Array('IMG_4558.JPG','IMG_4561.JPG','IMG_4562.JPG');
    var image = document.getElementById("omikujiImage");
    image.src=images[number];

    var button = document.getElementById("omikujiButton");
    button.innerText="もう一度引く";
}