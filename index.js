//to add eventlistener to a button

// function handleClick(){
//     alert("I got clicked");
// }

// document.querySelectorAll("button").addEventListener("click",handleClick);
// an event listener is a function that detect an event such as a click and perform action in this case it gives an alert. We can see that in the eventlistener parameters the function handle click is called without parenthesis it is because if we add parenthesis it will show a pop up as soon aswe open the website so we are waiting for click to happen then call the function

//to add event listener to all the buttons 

var numberOfButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    })
}


//to add event listener to key presses event on keyboard
document. addEventListener("keypress",function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);

});

function makeSound(key){
    switch (key) {
        case "w":
            var audioTom1 = new Audio('sounds/tom-1.mp3');
            audioTom1.play();
            break;
        case "a":
            var audioTom2 = new Audio('sounds/tom-2.mp3');
            audioTom2.play();
            break;
        case "s":
            var audioTom3 = new Audio('sounds/tom-3.mp3');
            audioTom3.play();
            break;
        case "d":
            var audioTom4=new Audio('sounds/tom-4.mp3');
            audioTom4.play();
            break;
        case "j":
            var audioSnare=new Audio('sounds/snare.mp3');
            audioSnare.play();
            break;
        case "k":
            var audioCrash=new Audio('sounds/crash.mp3');
            audioCrash.play();
            break;
        case "l":
            var audioKickBass=new Audio('sounds/kick-bass.mp3');
            audioKickBass.play();
            break;

        default:console.log(buttonInnerHTML);
    }
}

function buttonAnimation(currentkey){
    var activeButton=document.querySelector("."+currentkey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}

