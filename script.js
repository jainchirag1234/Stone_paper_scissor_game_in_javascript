let userScore=0;
let computerScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const computerScorePara=document.querySelector("#computer-score");


let genComputerChoice=()=>{
    let options=["rock","paper","scissors"];
    // Math.random();
     const randIdx=Math.floor(Math.random()*3);
     return options[randIdx];

}
const drawgame=()=>{
    console.log("game was draw");
    msg.innerText="Game was Draw. Play again.";
    msg.style.backgroundColor="darkblue";


}
const showWinner=(userWin,userChoice,computerChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("you win");
        msg.innerText=`you win! Your ${userChoice} beats ${computerChoice}` ;
        msg.style.backgroundColor="green";

    }else{
        computerScore++;
        computerScorePara.innerText=computerScore;
        console.log("you lose");
        msg.innerText=`you lost! ${computerChoice} beats Your ${userChoice}` ;
        msg.style.backgroundColor="red";
        
    }
}

const playgame=(userChoice)=>{
    console.log("user choice=",userChoice);
    const computerChoice=genComputerChoice();
    console.log("computer choice=",computerChoice);

    if(userChoice==computerChoice){
        //Draw game
        drawgame();
    }else{
        let userWin=true;
        if(userChoice ==="rock"){
            //scissors,paper
            userWin=computerChoice ==="paper"?false:true;
        }else if(userChoice === "paper"){
            //rock,scissors
           userWin= computerChoice ==="scissors"?false:true;
        }else {
            //rock,paper
            userWin=computerChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,computerChoice);
    }
};

choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        // console.log("choice was clicked",userChoice);
        playgame(userChoice);

    })
})