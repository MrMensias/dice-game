let dice1 = document.getElementById("dice1")
let dice2 = document.getElementById("dice2")
let title = document.getElementById("title")
let audio = new Audio("./dice-142528.mp3")
let button = document.querySelector(".play-btn")

let diceConfigurations = [
    [5],[4,6],[1,5,9],[1,3,7,9],[1,3,5,7,9],[1,3,4,6,7,9]
]


function diceNumGen(){
    let player1 = Math.floor(Math.random()*6) + 1
    let player2 = Math.floor(Math.random()*6) + 1
    console.log([player1,player2])

    return [player1,player2]
}

async function restartDice(){
    document.querySelectorAll(".dot").forEach(element=>element.classList.remove("active"))
}


function rollDice(){
    audio.play()
    restartDice()
    let game = diceNumGen()
    diceConfigurations[game[0]-1].forEach(value=>dice1.querySelector(`#num${value}`).classList.add("active"))
    diceConfigurations[game[1]-1].forEach(value=>dice2.querySelector(`#num${value}`).classList.add("active"))
    if(game[0]>game[1]){
        title.innerText = "Player 1 Win."
    }else if(game[0]==game[1]){
        title.innerText = "Tie."
    }else{
        title.innerText = "Player 2 Win."       
    }
    button.disabled = true
    setTimeout(()=>{
        button.disabled = false
     },2000
    )

}