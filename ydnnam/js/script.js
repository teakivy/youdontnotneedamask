// var reason = ""
// document.getElementById("reason").innerHTML = 5 + 6;


function newReason() {
  document.getElementById("reason").innerHTML = response();
}

function response() {
  var responces = [
                   "Facebook posts are NOT medical advice",
                   "Its the facts m8",
                   "KAREN",
                   "You are anti-vaxx",
                   "Vaccines are illegal",
                   "Its your body, your choice",
                   "Tin foil hats havent worked yet",
                   "You need your 3am Walmart pop-tart",
                   "Walmart says so",
                   "FACEBOOK IS NOT REAL",
                   "Your body, your choice",
                   "Yes",
                   "Coronavirus is fake",
                   "\"Boomer Remover\" Should leave your mom alive",
                   "meme very good",
                   "You need your essential oils",
                   "mmm yes water solve corona",
                   "It saves lives, need i say more?",
                   "You should let the government control your body",
                   "Birds are drones",
                   "YOU CANT CONTROL ME",
                   "DOGGO NEEDS MASK",
                   "You wouldn't want to do it 1800's style without a leg would you?",
                   "You aint stupid",
                   "You're intimidated by others who know more than you",
                   "You're not a facebook certified disease expert",
                   "you're ignorant and don't care about other people... ok maybe some"
                  ]
  var rnum = randomNum(responces.length);
  console.log("Responce: " + responces[rnum])
  return responces[rnum];
}
function randomNum(max) {
  var rnum = Math.floor(Math.random() * max);
  console.log("Random Number: " + rnum)
  return rnum;
}
