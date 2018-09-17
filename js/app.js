document.addEventListener('DOMContentLoaded', function(){
  // card is getting called from HTML
  let card = document.getElementsByClassName("card");

  // card-pack is being called from the HTML where all the cards are being held
  let pack = document.getElementById("card-pack");

  //move variable is being declared
  let tries = 0;
  //this will select the first class and ignore the other with the same class name
  let counter = document.querySelector(".tries");

  //matchcard is being declared and match is being called from the HTML
  let matchCard = document.getElementsByClassName("match");

  //closes the icon in the modal when message pops up
  let closeicon = document.querySelector(".close");

  //this declares the modal and it called from HTML
  let modal = document.getElementById("popup1")

  //array for opened cards that have been clicked on
  var openCards = [];
  // declaring the variables
  function shuffle(cardArray) {
    var currentIndex = cardArray.length;
    var temporaryValue;
    var randomIndex;
    //this will shuffle the cardArrays, so that they are in different places
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = cardArray[currentIndex];
        cardArray[currentIndex] = cardArray[randomIndex];
        cardArray[randomIndex] = temporaryValue;
    }
    //this will return the shuffled array
    return cardArray;
};
//cards are shuffled when the page reloads
document.body.onload = startGame();
//the function to restart the game
function startGame(){
  //this is where the cards will be stored
  let tempArray = [];
  // console.log(card);
  //loop is created for the lists
  for (var i = 0; i < 16; i++) {
    //cardEl is declared and an list element is created
    const cardEl = document.createElement('li');
    //list is then given a class and id
    cardEl.setAttribute('class','card');
    cardEl.setAttribute('id',`card-${i}`);
    //cardel is then pushed into tempArray
    tempArray.push(cardEl);
    // card[i].innerHTML = i;
  }
  //tempArray is then shuffled
  shuffledArray = shuffle(tempArray);
  //shuffledArray is then displayed shuffled
  for (var i = 0; i < shuffledArray.length; i++) {
    //the lists in the html will then return the id
    shuffledArray[i].innerHTML = shuffledArray[i].id;
    //the pack will then add the list
<<<<<<< HEAD
    pack.appendChild(shuffledArray[i])
  }

=======
    console.log(pack);
    pack.appendChild(shuffledArray[i]);

  }

>>>>>>> matching-cards
  console.log(tempArray);
}
//reset the moves
moves = 0;
counter.innerHTML = moves;
//reset the time
second = 0;
minutes = 0;
var timer = document.querySelector(".time");
timer.innerHTML = "0 mins 0 secs";
<<<<<<< HEAD

//toggles open and show class to display opencards
var displayCard = function(){
  this.classList.toggle("open");
  this.classList.toggle("show");
  this.classList.toggle("disabled");
}

// opened cards are added to openCards list and is then checked to see if cards match
function cardOpen() {
  openCards.push(this);
  var length = openCards.length;
  if (length === 2) {
    // run match fuction
  }
=======

//toggles open and show class to display opencards
var displayCard = function(){
  this.classList.toggle("open");
  this.classList.toggle("show");
  this.classList.toggle("disabled");
}

// opened cards are added to openCards list and is then checked to see if cards match
function cardOpen() {
  openCards.push(this);
  var length = openCards.length;
  if (length === 2) {
    moveCounter();
    if (openCards[0].type === openCards[1].type) {
        matched();
    } else {
        unmatched();
    }
  }
};

//this is for when cards match
function matched(){
  openCards[0].classList.add("match");
  openCards[1].classList.add("match");
  openCards[0].classList.remove("show", "open");
  openCards[1].classList.remove("show", "open");
  openCards = [];

}

//this is for when cards don't match
function unmatched(){
  openedCards[0].classList.add("unmatched");
  openedCards[1].classList.add("unmatched");
  disable();
  setTimeout(function(){
    openedCards[0].classList.remove
  })
>>>>>>> matching-cards
}

// $('.btnRestart').click(function() {
//   //window.location.reload(true);
//   history.go(0);
// });
//
// window.onload = function() {
//   $('.card').text($.now());
// };

}) // DOMContentLoaded Close
