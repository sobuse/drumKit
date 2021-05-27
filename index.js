//dectecting button press

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for ( var i = 0; i < numberOfDrumButtons; 1++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function (){

        var buttonInnerHTML = this.buttonInnerHTML;

        makeSound(buttonInnerHTML);

   
      
           //break;
        });      //default:
   }
   document.addEventListener("keypress", function(){

    makeSound(event.key)
});
   
    
}
 
// detecting key board press
function makeSound (key){
    switch (key) {
        case "w":
         var tom1 = new Audio("sounds/tom-1.mp3");
         audio.play();
            break;
 
            case "a":
                var tom2 = new Audio("sounds/tom-2.mp3");
                audio.play();
                break;
 
 
            default: console.log(buttonInnerHTML);
           
}
//});
 //}

// this.style.color="white";www
