var random_number = Math.floor(Math.random() * 6) + 1; //1-6

var dice_number = "./images/dice" + random_number + ".png"; //dice 1-6

var dice_image = document.getElementById("dice-img1"); // get-img
dice_image.setAttribute("src", dice_number);  // change-image

var random_number2 = Math.floor(Math.random() * 6) + 1; //1-6

var dice_number2 = "./images/dice" + random_number2 + ".png"; //dice 1-6

var dice_image2 = document.getElementById("dice-img2"); // get-img
dice_image2.setAttribute("src", dice_number2); // change-image


//check whether if each dice is greater than the other or not; or equal!
if(dice_number > dice_number2){
    document.querySelector("h1").innerHTML ="Player 1 wins"; //p1 wins
    
} else if(dice_number < dice_number2){
    document.querySelector("h1").innerHTML ="Player 2 wins"; //p2 wins
}else {
    document.querySelector("h1").innerHTML ="Draw!"; //draw
}
