var drums = document.getElementsByClassName("drum");
var numDrums = drums.length;

//document.getElementById("dm").innerHTML = numDrums;

for (var i=0; i< numDrums; i++) {
  drums[i].addEventListener("click", function ()
  {
    var keyPressed = this.innerHTML;
    makeSound(keyPressed);
    buttonAnimation(keyPressed);
  } );

};

document.addEventListener("keypress", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});


function makeSound (key) {
  switch (key) {
    case "w":
      var cymbal = new Audio("sounds/crash.mp3");
      cymbal.play();
      break;
    case "a":
      var bass = new Audio("sounds/kick-bass.mp3");
      bass.play();
      break;
    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    default:
      alert("No assigned key for "+key);

  }
}


function buttonAnimation(key) {
  var keyName = document.getElementsByClassName(key)[0];
  //var keyName = document.querySelector("."+key);
  console.log(keyName);
  keyName.classList.add("pressed");
  console.log(keyName);
  setTimeout(function() {
  keyName.classList.remove("pressed");
  }, 200);

}
