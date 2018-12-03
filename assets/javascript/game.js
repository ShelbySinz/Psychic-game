// Variables..........

var ComputerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",]; 

var wins = 0;
var losses = 0;
var guesses = 9;

var guessedLetters = [];

 




var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeft = document.getElementById("guesses");


 


//FUNCTIONS.......................



function updateGuessesLeft () {
 
    document.querySelector('#guesses').innerHTML = "Guesses left: " + guesses;
  }


function updateGuessesSoFar() {
  document.querySelector("#wrongGuess").innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
  }






function reset (){
    guesses = 9;
    guessedLetters = [];
        updateGuessesLeft();
        updateGuessesSoFar();
    
      
      }











//MAIN PROCESS...........................




document.onkeyup = function(event) {
    var userguess = event.key.toLowerCase();


    guessedLetters.push(userguess);
        
    var computerGuess = ComputerChoices[Math.floor(Math.random() * ComputerChoices.length)];
   
    var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
   

 if (options.indexOf(userguess) > -1) {
     
    if(userguess === computerGuess){
        wins++;
        alert("YOUR GUESS WAS RIGHT YOU MUST BE PSYCHIC!!");
        reset();
    }

    else if (userguess !== computerGuess){
        guesses--;
        alert ("wrong!!!!!!");
        updateGuessesSoFar();
        

    }


    if (guesses === 0) {
        losses++;
        alert("you lost! " + "The Letter to guess was " + computerGuess);
       reset ();

    }




      

    winsText.textContent =  wins;
    
    guessesLeft.textContent = guesses;

    lossesText.textContent = losses;

} 
};




