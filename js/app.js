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
  function shuffle(array) {
    var currentIndex = array.length;
    var temporaryValue;
    var randomIndex;
    //this will shuffle the cards, so that they are in different places
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    //this will return the shuffled array
    return array;
};

console.log(shuffle(openCards));






}) // DOMContentLoaded Close
