var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for(var i=0;i< numberOfDrumButtons;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",sound);
function sound()
{
    var letter = this.innerHTML;
    if(letter==0){
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play(); 
    }
    else if(letter==1){
        var audio = new Audio("sounds/tom-2.mp3");
    audio.play(); 
    }
    else if(letter==2){
        var audio = new Audio("sounds/tom-3.mp3");
    audio.play(); 
    }
    else if(letter==3){
        var audio = new Audio("sounds/tom-4.mp3");
    audio.play(); 
    }
    else if(letter==4){
        var audio = new Audio("sounds/snare.mp3");
    audio.play(); 
    }

    else if(letter==5){
        var audio = new Audio("sounds/crash.mp3");
    audio.play(); 
    }

    else{
        var audio = new Audio("sounds/kick-bass.mp3");
    audio.play(); 
    }
     
}
}





