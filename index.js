var randomnum1=Math.floor(Math.random()*6)+1;

randomDiceimage="dice"+ randomnum1 +".png";
randomDicesource="images/" + randomDiceimage;
var dice_1=document.querySelectorAll("img")[0];
dice_1.setAttribute("src", randomDicesource);

var randomnum2=Math.floor(Math.random()*6)+1;
randomDiceimage_2="dice"+ randomnum2 + ".png";
randomDicesource_2="images/" + randomDiceimage_2;

var dice_2=document.querySelectorAll("img")[1];
dice_2.setAttribute("src", randomDicesource_2);


if(randomnum1>randomnum2){
document.querySelector("h1").innerHTML="🏅Player 1 won";
}
else if(randomnum1<randomnum2){
    document.querySelector("h1").innerHTML="🏅Player 2 won";
}
else{
    document.querySelector("h1").innerHTML="🫱🏻‍🫲🏼Tie";
}