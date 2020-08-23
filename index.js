var totalBtn = document.querySelectorAll(".drum").length;
var audio = [];

for (var i = 0; i < totalBtn; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", assignClick);
}
function assignClick() {
    var selectInnerHtml = this.innerHTML;
    makeSound(selectInnerHtml);
    addAnimation(selectInnerHtml);
}

document.addEventListener("keypress", respondToKey);
function respondToKey(event) {
    makeSound(event.key);
    addAnimation(event.key);
}

function makeSound(key) {
    switch (key) {
        case "w":
            audio[0] = new Audio('sounds/crash.mp3');
            audio[0].play();
            break;
        case "a":
            audio[1] = new Audio('sounds/snare.mp3');
            audio[1].play();
            break;
        case "s":
            audio[2] = new Audio('sounds/kick-bass.mp3');
            audio[2].play();
            break;
        case "d":
            audio[3] = new Audio('sounds/tom-1.mp3');
            audio[3].play();
            break;
        case "j":
            audio[4] = new Audio('sounds/tom-2.mp3');
            audio[4].play();
            break;
        case "k":
            audio[5] = new Audio('sounds/tom-3.mp3');
            audio[5].play();
            break;
        case "l":
            audio[6] = new Audio('sounds/tom-4.mp3');
            audio[6].play();
            break;
        default: console.log(key);
    }
}

                  //  or

// switch (key) {
//         case "w":
//           var tom1 = new Audio("sounds/tom-1.mp3");
//           tom1.play();
//           break;

//         case "a":
//           var tom2 = new Audio("sounds/tom-2.mp3");
//           tom2.play();
//           break;

//         case "s":
//           var tom3 = new Audio('sounds/tom-3.mp3');
//           tom3.play();
//           break;

//         case "d":
//           var tom4 = new Audio('sounds/tom-4.mp3');
//           tom4.play();
//           break;

//         case "j":
//           var snare = new Audio('sounds/snare.mp3');
//           snare.play();
//           break;

//         case "k":
//           var crash = new Audio('sounds/crash.mp3');
//           crash.play();
//           break;

//         case "l":
//           var kick = new Audio('sounds/kick-bass.mp3');
//           kick.play();
//           break;


//         default: console.log(key);

//       }
//     }
function addAnimation(key) {
    document.querySelector("." + key).classList.add("pressed");
    setTimeout(function () {
        document.querySelector("." + key).classList.remove("pressed");
    }, 100);
}
