window.alert("Hello, Welcome to Rock Paper Sissors!!!");

let min = Math.ceil(1);
let max = Math.floor(3);
let cpuChoose;
let ties = 0;
let wins = 0;
let loses = 0;
let playAgain = true;
while(playAgain){
let picked = window.prompt("Type R, P, or S and see who wins.");
let cpuPicked = Math.floor(Math.random() * (max - min) + min);
if(cpuPicked == 1){
    cpuChoose = "R";
}
else if(cpuPicked == 2){
    cpuChoose = "P";
}
else {
    cpuChoose = "S";
}

window.alert("Cpu picked " + cpuChoose);

if(picked.toUpperCase() === cpuChoose){
    window.alert("Its a tie!!!");
    ties++;
}
else if(picked.toUpperCase() == "R" &&  cpuChoose == "S"){
    window.alert("You win!!!");
    wins++;
}
else if(picked.toUpperCase() == "P" && cpuChoose == "R"){
    window.alert("You win!!!");
    wins++;
}
else if(picked.toUpperCase() == "S" && cpuChoose == "P"){
    window.alert("You win!!!");
    wins++;
}
else {
    window.alert("You lose!!!");
    loses++;
}

window.alert("Wins: " + wins + " Ties: " + ties + " Loses: " + loses);
playAgain = window.confirm("Would you like to play again?");
}