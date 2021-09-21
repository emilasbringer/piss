const maintext = document.querySelector("#maintext");
const playerinput = document.querySelector("#playerinput");
const leftroundcounter = document.querySelector("#rrl");
const rightroundcounter = document.querySelector("#rrr");
const hotbar1 = document.querySelector("#lefthotbar");
const hotbar2 = document.querySelector("#righthotbar");
var leftgamewindow = document.querySelector("#leftboxshower");
var rightgamewindow = document.querySelector("#rightboxshower");
var leftplayerwindow = document.querySelector("#lpw");
var rightplayerwindow = document.querySelector("#rpw");
var pressedkeyp1 = [false,false,false,false,false];
var pressedkeyp2 = [false,false,false,false,false];
var picture = ["url('images/schnoze.png')","url('images/cow.png')","url('images/xbox.png')","url('images/finger.png')","url('images/burger.png')"];
var hotbaritems = [document.querySelector("#one"),document.querySelector("#two"),document.querySelector("#three"),document.querySelector("#four"),document.querySelector("#five"),document.querySelector("#six"),document.querySelector("#seven"),document.querySelector("#eight"),document.querySelector("#nine"),document.querySelector("#ten")];
var start = false;
var gamelength = 20;
var winner = 0;
var leftcounter = 0;
var rightcounter = 0;
var gameorderarr=[];
var timepenaltyleft = 0;
var timepenaltyright = 0;
var hiddenHotbar = false;
playerinput.focus();

function uniKeyCode(event) {
    var key = event.keyCode;
    if(key == 13) {getInput();}
    if(start) {
        if (timepenaltyleft < 1) {
            for(var i = 0; i < pressedkeyp1.length; i++){hotbaritems[i].style.border = "4px solid #313131";}
            if(key == 81)   {pressedkeyp1[0] = true;    pressedkeyp1[1] = false;    pressedkeyp1[2] = false;    pressedkeyp1[3] = false;    pressedkeyp1[4] = false;    if(pressedkeyp1[0] && gameorderarr[leftcounter] == 0) {hotbaritems[0].style.border = "4px solid #07fc13";} else {hotbaritems[0].style.border = "4px solid red"; timepenaltyleft = 3;}}
            if(key == 87)   {pressedkeyp1[0] = false;   pressedkeyp1[1] = true;     pressedkeyp1[2] = false;    pressedkeyp1[3] = false;    pressedkeyp1[4] = false;    if(pressedkeyp1[1] && gameorderarr[leftcounter] == 1) {hotbaritems[1].style.border = "4px solid #07fc13";} else {hotbaritems[1].style.border = "4px solid red"; timepenaltyleft = 3;}}
            if(key == 69)   {pressedkeyp1[0] = false;   pressedkeyp1[1] = false;    pressedkeyp1[2] = true;     pressedkeyp1[3] = false;    pressedkeyp1[4] = false;    if(pressedkeyp1[2] && gameorderarr[leftcounter] == 2) {hotbaritems[2].style.border = "4px solid #07fc13";} else {hotbaritems[2].style.border = "4px solid red"; timepenaltyleft = 3;}}
            if(key == 82)   {pressedkeyp1[0] = false;   pressedkeyp1[1] = false;    pressedkeyp1[2] = false;    pressedkeyp1[3] = true;     pressedkeyp1[4] = false;    if(pressedkeyp1[3] && gameorderarr[leftcounter] == 3) {hotbaritems[3].style.border = "4px solid #07fc13";} else {hotbaritems[3].style.border = "4px solid red"; timepenaltyleft = 3;}}
            if(key == 84)   {pressedkeyp1[0] = false;   pressedkeyp1[1] = false;    pressedkeyp1[2] = false;    pressedkeyp1[3] = false;    pressedkeyp1[4] = true;     if(pressedkeyp1[4] && gameorderarr[leftcounter] == 4) {hotbaritems[4].style.border = "4px solid #07fc13";} else {hotbaritems[4].style.border = "4px solid red"; timepenaltyleft = 3;}}    
    }
        if (timepenaltyright < 1) {  
            for(var i = 0; i < pressedkeyp2.length; i++){hotbaritems[i+5].style.border = "4px solid #313131";}          
            if(key == 78)   {pressedkeyp2[0] = true;    pressedkeyp2[1] = false;    pressedkeyp2[2] = false;    pressedkeyp2[3] = false;    pressedkeyp2[4] = false;    if(pressedkeyp2[0] && gameorderarr[rightcounter] == 0) {hotbaritems[5].style.border = "4px solid #07fc13";} else {hotbaritems[5].style.border = "4px solid red"; timepenaltyright = 3;   console.log("timepenalty right!");}}
            if(key == 77)   {pressedkeyp2[0] = false;   pressedkeyp2[1] = true;     pressedkeyp2[2] = false;    pressedkeyp2[3] = false;    pressedkeyp2[4] = false;    if(pressedkeyp2[1] && gameorderarr[rightcounter] == 1) {hotbaritems[6].style.border = "4px solid #07fc13";} else {hotbaritems[6].style.border = "4px solid red"; timepenaltyright = 3;   console.log("timepenalty right!");}}
            if(key == 188)  {pressedkeyp2[0] = false;   pressedkeyp2[1] = false;    pressedkeyp2[2] = true;     pressedkeyp2[3] = false;    pressedkeyp2[4] = false;    if(pressedkeyp2[2] && gameorderarr[rightcounter] == 2) {hotbaritems[7].style.border = "4px solid #07fc13";} else {hotbaritems[7].style.border = "4px solid red"; timepenaltyright = 3;   console.log("timepenalty right!");}}
            if(key == 190)  {pressedkeyp2[0] = false;   pressedkeyp2[1] = false;    pressedkeyp2[2] = false;    pressedkeyp2[3] = true;     pressedkeyp2[4] = false;    if(pressedkeyp2[3] && gameorderarr[rightcounter] == 3) {hotbaritems[8].style.border = "4px solid #07fc13";} else {hotbaritems[8].style.border = "4px solid red"; timepenaltyright = 3;   console.log("timepenalty right!");}}
            if(key == 189)  {pressedkeyp2[0] = false;   pressedkeyp2[1] = false;    pressedkeyp2[2] = false;    pressedkeyp2[3] = false;    pressedkeyp2[4] = true;     if(pressedkeyp2[4] && gameorderarr[rightcounter] == 4) {hotbaritems[9].style.border = "4px solid #07fc13";} else {hotbaritems[9].style.border = "4px solid red"; timepenaltyright = 3;   console.log("timepenalty right!");}}
        }
    }
}

maintext.innerHTML = "How many rounds would you like to play?";

function getInput() {
    var txtinput = document.getElementById("playerinput").value;
    if(txtinput == "hidden") {hotbar1.style.display = "none"; hotbar2.style.display = "none";}
    else {
    if (!start) {
        gamelength = txtinput;
        start = true;
        startGame();
    }
}
}

function startGame() {
    for (i=0;i<gamelength;++i) {
        gameorderarr[i]= Math.floor(Math.random() * (4 + 1)); 
        while(gameorderarr[i] == gameorderarr[i-1]) {gameorderarr[i]= Math.floor(Math.random() * (4 + 1));}
    } 
    maintext.style.display = "none";
    playerinput.style.display = "none";
    rightroundcounter.innerHTML = gameorderarr.length;
    leftroundcounter.innerHTML = gameorderarr.length;
    leftgamewindow.style.backgroundImage = picture[gameorderarr[leftcounter]];
    rightgamewindow.style.backgroundImage = picture[gameorderarr[rightcounter]];
    startImageChanger();
}

function startImageChanger() {
    console.log(gameorderarr);
setInterval(() => {
    if (pressedkeyp1[gameorderarr[leftcounter]]) {
        console.log("playerlefthitbutton");
        leftcounter++;
        if (leftcounter > gamelength-1) {winner = 1;}
        newRoundLeft();
    }

    if (pressedkeyp2[gameorderarr[rightcounter]]) {
        console.log("playerrighthitbutton");
        rightcounter++; 
        if (rightcounter > gamelength-1) {winner = 2;}
        newRoundRight();
    }

    if (leftcounter < rightcounter) {
        rrl.style.color = "red";
        rrr.style.color = "#07fc13";
        
    }
    else {
        rrl.style.color = "#07fc13";
        rrr.style.color = "red";
    }

}, 30);
setInterval(() => {
    if(timepenaltyleft>0) {timepenaltyleft--};
    if(timepenaltyright>0){timepenaltyright--};
}, 1000);
}

function newRoundLeft() {
    console.log("newroundleft");
    if(winner == 1) {
        maintext.style.display = "block";
        maintext.innerHTML = "Player 1 wins";
        leftplayerwindow.style.background = "#07fc13";
        rightplayerwindow.style.background = "red";
        leftgamewindow.style.background = "#07fc13";
        rightgamewindow.style.background = "red";
        
    }
    console.log("winner ="+winner);
    leftgamewindow.style.backgroundImage = picture[gameorderarr[leftcounter]];
    leftroundcounter.innerHTML = gameorderarr.length - leftcounter;
}

function newRoundRight() {
    if(winner == 2) {
        maintext.style.display = "block";
        maintext.innerHTML = "Player 2 wins";
        rightplayerwindow.style.background = "#07fc13";
        rightgamewindow.style.background = "#07fc13";
        leftgamewindow.style.background = "red";
        leftplayerwindow.style.background = "red";    
    }
    rightgamewindow.style.backgroundImage = picture[gameorderarr[rightcounter]];
    rightroundcounter.innerHTML = gameorderarr.length - rightcounter;
}



