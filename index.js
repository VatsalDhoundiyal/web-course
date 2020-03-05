//button
var i = document.querySelectorAll(".btn").length;
for(var j=0 ; j<i ; j++){
  document.querySelectorAll(".btn")[j].addEventListener("click", getAudio);
}



//detecting keyboard press
document.addEventListener("keydown",clickkey);
function clickkey(event){

  makeSound(event.key);
  buttonAnimation(event.key);
}

//detecting mouse clicks
function getAudio(){
  var z = this.textContent;
  makeSound(z);
  buttonAnimation(z);
}
function makeSound(key){
  switch(key){
    case "w":{
      var audio = new Audio("sounds/crash.mp3");
      //alert(z);
      audio.play();
      break;
    }
    case "a":{
      var audio = new Audio("sounds/kick-bass.mp3");
      //alert(z);
      audio.play();
      break;
    }
    case "s":{
      var audio = new Audio("sounds/snare.mp3");
      //alert(z);
      audio.play();
      break;
    }
    case "d":{
      var audio = new Audio("sounds/tom-1.mp3");
      //alert(z);
      audio.play();
      break;
    }
    case "j":{
      var audio = new Audio("sounds/tom-2.mp3");
      //alert(z);
      audio.play();
      break;
    }
    case "k":{
      var audio = new Audio("sounds/tom-3.mp3");
      //alert(z);
      audio.play();
      break;
    }
    case "l":{
      var audio = new Audio("sounds/tom-4.mp3");
      //alert(z);
      audio.play();
      break;
    }
    default:{
      alert("error");
    }
  }

}
function buttonAnimation(key){
  var current = document.querySelector("."+key+"_drum");
  current.classList.add("pressed");
  setTimeout(function(){
    current.classList.remove("pressed");
  },100);
}
