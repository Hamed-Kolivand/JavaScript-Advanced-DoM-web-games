
    $('.drum').click(function(){
        var buttonLetter = this.innerHTML;
        playsound(buttonLetter);
        addAnimation(buttonLetter);
    });

$(document).keydown(function(event){
   playsound(event.key);
   addAnimation(event.key);
});

function playsound (key){
    switch(key){
        case 'w': 
        var audio = new Audio('./sounds/crash.mp3');
        audio.play();
        break;
        case 'a': 
        var audio = new Audio('./sounds/kick-bass.mp3');
        audio.play();
        break;
        case 's': 
        var audio = new Audio('./sounds/snare.mp3');
        audio.play();
        break;
        case 'd': 
        var audio = new Audio('./sounds/tom-1.mp3');
        audio.play();
        break;
        case 'j': 
        var audio = new Audio('./sounds/tom-2.mp3');
        audio.play();
        break;
        case 'k': 
        var audio = new Audio('./sounds/tom-3.mp3');
        audio.play();
        break;
        case 'l': 
        var audio = new Audio('./sounds/tom-4.mp3');
        audio.play();
        break;
    }
}

function addAnimation(currentkey){
   var active_btn = document.querySelector("." + currentkey);
   
   active_btn.classList.add("pressed");

   setTimeout(function() 
   {active_btn.classList.remove("pressed"), 100});
}



   