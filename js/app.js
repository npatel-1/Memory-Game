document.addEventListener('DOMContentLoaded', function(){
  // card is getting called from HTML
  let card = document.getElementsByClassName("card");
  // the array cards is going to hold cards
  // spread operator(...) will display all the items in an array
  // let cards = [...card]

  // card-pack is being called from the HTML where all the cards are being held
  let pack = document.getElementById("card-pack");

  //move variable is being declared
  let tries = 0;
  //this will select the first class and ignore the other with the same class name
  let counter = document.querySelector(".tries");

  //matchcard is being declared and match is being called from the HTML
  let matchCard = document.getElementsByClassName("match");





}) // DOMContentLoaded Close
