let homeScoreBtnOne = document.getElementById("home-score-btn-1")
    let homeScoreEl =document.getElementById("home-score")
    let homeScore = 0

   function increaseHomeScoreOne(){
     homeScore += 1
     homeScoreEl.textContent = homeScore
   }
    function increaseHomeScoreTwo(){
     homeScore += 2
     homeScoreEl.textContent = homeScore
   }
    function increaseHomeScoreThree(){
     homeScore += 3
     homeScoreEl.textContent = homeScore
   }
   
   // Guest team score elements and variables
let guestScoreEl = document.getElementById("guest-score");
let guestScore = 0;

function increaseGuestScoreOne() {
  guestScore += 1;                  
  guestScoreEl.textContent = guestScore;
}

function increaseGuestScoreTwo() {
  guestScore += 2;                 
  guestScoreEl.textContent = guestScore;
}

function increaseGuestScoreThree() {
  guestScore += 3;                  
  guestScoreEl.textContent = guestScore;
}
function NewGame() {
  homeScoreEl.textContent = 0
  guestScoreEl.textContent = 0
  homeScore = 0
  guestScore = 0
}
