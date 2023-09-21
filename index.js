let home = document.querySelector(".home");
let withbox = document.querySelector(".box");
let botgame = document.querySelector(".botgame");
let multigame = document.querySelector(".multigame");
let backbtn = document.querySelector(".back");

let loader = document.querySelector(".loader");

window.addEventListener("load", () => {
  home.style.display = "block";
  withbox.style.display = "none";
  loader.style.left = "-1000px";
});

botgame.addEventListener("click", () => {

  setTimeout(() => {
    loader.style.left = "0";
    home.style.display = "none";
  }, 200);

  setInterval(() => {
    loader.style.left = "-1000px";
    withbox.style.display = "block";
    backbtn.style.display = "block";
    home.style.display = "none";
    withbox.style.transition = "all 2s";
    home.style.transition = "all 2s";
  }, 5750);
});

backbtn.addEventListener("click",()=>{
  home.style.display = "block";
  withbox.style.display = "none";
  backbtn.style.display = "none";
})

//-----------------------------------//
//---------- bot game ---------------//
//-----------------------------------//

let snake = document.querySelector("#snake");
let water = document.querySelector("#water");
let gun = document.querySelector("#gun");
let choosebox = document.querySelector(".choose");

let bguser = document.querySelector(".us1");
let bgbot = document.querySelector(".us2");

let button = document.querySelector("button");

let userchoosed = document.querySelector(".userchoosed");
let botchoosed = document.querySelector(".botchoosed");

let userpointsdisplay = document.querySelector(".userpoints");
let botpointsdisplay = document.querySelector(".botpoints");

let display = document.querySelector(".display");

let choose;
let random;
let userpoints = 0;
let botpoints = 0;

setTimeout(() => {
  userchoosed.innerHTML = "User Turn";
  bguser.style.backgroundColor = "green";
  bgbot.style.backgroundColor = "red";
  bguser.style.transition = "all .3s";
  bgbot.style.transition = "all .3s";
}, 1000);

snake.addEventListener("click", () => {
  choose = 1;
  userchoosed.innerHTML = "User chooses Snake";
  random = Math.floor(Math.random() * 3) + 1;
  botchoosed.innerHTML = "Bot Turn";

  setTimeout(() => {
    bguser.style.backgroundColor = "red";
    bgbot.style.backgroundColor = "green";
    bguser.style.transition = "all .3s";
    bgbot.style.transition = "all .3s";
  }, 300);

  setTimeout(() => {
    if (random == 1) {
      botchoosed.innerHTML = "Bot chooses Snake";
    } else if (random == 2) {
      botchoosed.innerHTML = "Bot chooses water";
    } else {
      botchoosed.innerHTML = "Bot chooses gun";
    }

    setTimeout(() => {
      if (choose == 1 && random == 1) {
        display.innerHTML = "Match Tied";
      } else if (choose == 1 && random == 2) {
        display.innerHTML = "User got point";
        userpoints += 1;
        console.log(userpoints);
        userpointsdisplay.innerHTML = userpoints;
      } else {
        display.innerHTML = "Bot got point";
        botpoints += 1;
        console.log(botpoints);
        botpointsdisplay.innerHTML = botpoints;
      }
    }, 500);
  }, 1000);
  setTimeout(() => {
    userchoosed.innerHTML = "User Turn";
    bguser.style.backgroundColor = "green";
    bgbot.style.backgroundColor = "red";
    bguser.style.transition = "all .3s";
    bgbot.style.transition = "all .3s";
  }, 2500);
});

water.addEventListener("click", () => {
  choose = 2;
  userchoosed.innerHTML = "User chooses water";
  random = Math.floor(Math.random() * 3) + 1;
  botchoosed.innerHTML = "Bot Turn";
  setTimeout(() => {
    bguser.style.backgroundColor = "red";
    bgbot.style.backgroundColor = "green";
    bguser.style.transition = "all .3s";
    bgbot.style.transition = "all .3s";
  }, 300);

  setTimeout(() => {
    if (random == 1) {
      botchoosed.innerHTML = "Bot chooses Snake";
    } else if (random == 2) {
      botchoosed.innerHTML = "Bot chooses water";
    } else {
      botchoosed.innerHTML = "Bot chooses gun";
    }

    setTimeout(() => {
      if (choose == 2 && random == 2) {
        display.innerHTML = "Match Tied";
      } else if (choose == 2 && random == 3) {
        display.innerHTML = "User got point";
        userpoints += 1;
        console.log(userpoints);
        userpointsdisplay.innerHTML = userpoints;
      } else {
        display.innerHTML = "Bot got point";
        botpoints += 1;
        console.log(botpoints);
        botpointsdisplay.innerHTML = botpoints;
      }
    }, 500);
  }, 1000);
  setTimeout(() => {
    userchoosed.innerHTML = "User Turn";
    bguser.style.backgroundColor = "green";
    bgbot.style.backgroundColor = "red";
    bguser.style.transition = "all .3s";
    bgbot.style.transition = "all .3s";
  }, 2500);
});

gun.addEventListener("click", () => {
  choose = 3;
  userchoosed.innerHTML = "User chooses gun";
  random = Math.floor(Math.random() * 3) + 1;
  botchoosed.innerHTML = "Bot Turn";
  setTimeout(() => {
    bguser.style.backgroundColor = "red";
    bgbot.style.backgroundColor = "green";
    bguser.style.transition = "all .3s";
    bgbot.style.transition = "all .3s";
  }, 300);
  setTimeout(() => {
    if (random == 1) {
      botchoosed.innerHTML = "Bot chooses Snake";
    } else if (random == 2) {
      botchoosed.innerHTML = "Bot chooses water";
    } else {
      botchoosed.innerHTML = "Bot chooses gun";
    }

    setTimeout(() => {
      if (choose == 3 && random == 3) {
        display.innerHTML = "Match Tied";
      } else if (choose == 3 && random == 1) {
        display.innerHTML = "User got point";
        userpoints += 1;
        console.log(userpoints);
        userpointsdisplay.innerHTML = userpoints;
      } else {
        display.innerHTML = "Bot got point";
        botpoints += 1;
        console.log(botpoints);
        botpointsdisplay.innerHTML = botpoints;
      }
    }, 500);
  }, 1000);
  setTimeout(() => {
    userchoosed.innerHTML = "User Turn";
    bguser.style.backgroundColor = "green";
    bgbot.style.backgroundColor = "red";
    bguser.style.transition = "all .5s";
    bgbot.style.transition = "all .5s";
  }, 2500);
});

button.addEventListener("click", () => {
  button.innerHTML = "Resetting";
  snake.style.cursor = "not-allowed";
  water.style.cursor = "not-allowed";
  gun.style.cursor = "not-allowed";

  setTimeout(() => {
    userchoosed.innerHTML = "user chooses";
    botchoosed.innerHTML = "bot chooses";
    userpointsdisplay.innerHTML = "0";
    botpointsdisplay.innerHTML = "0";
    userpoints = 0;
    botpoints = 0;
    display.innerHTML = " ";
    display.style.transition = "all .5s";
    button.innerHTML = "Reset";
    button.style.transition = "all .5s";
    snake.style.cursor = "pointer";
    water.style.cursor = "pointer";
    gun.style.cursor = "pointer";
  }, 2000);
});
