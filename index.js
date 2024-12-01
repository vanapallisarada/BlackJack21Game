let player = {
    name : "per",
    chips : 200
}


let sum = 0
let hashblack = false;
let isalive = true;
let message = "";
let messageel = document.getElementById("message-el")
let sumel = document.getElementById("sum-el")
let cardel = document.getElementById("card-el")



let playerel = document.getElementById("player-el")
playerel.textContent= player.name  + ":$"  + player.chips



function getRandomCard(){
    let randomnumber = Math.floor(Math.random()*13)+1
    if (randomnumber > 10){
        return 10
    
    }else if(randomnumber === 1 ){
        return 11
    }
    else{
        return randomnumber
    }
}

function startgame(){
    isalive = true
    let firstcard = getRandomCard()
    let secondcard  = getRandomCard()
    cards = [firstcard,secondcard]
    sum = firstcard +  secondcard
    rendergame();
}






function rendergame(){
    sumel.textContent = "sum : "  +  sum;
    cardel.textContent = "cards:"
    for (let i =0 ; i<cards.length ; i++){
        cardel.textContent += cards[i]+ " "
    }




    if(sum<=20){
        message = "do you want to add a new card";
    
    }else if(sum===21){
        message = "you have got a black jack";
        hashblack = true;
    
    }
    else{
        message = "you are out off the Game"
        isalive =false;
    }
    messageel.textContent = message;

}
function newcard(){
    console.log("are you want to drag a new card")
    if(isalive === true && hashblack === false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        rendergame();

    }

}