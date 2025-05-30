let userscore=0;
let compscore=0;


const choices= document.querySelectorAll(".choice");
const result= document.querySelector("#result");
const userScore=document.querySelector("#user-score");
const compScore=document.querySelector("#comp-score");
const compchoice=()=>{
    const options=["rock","paper","scissor"];
    const randidx=Math.floor(Math.random()*3);
    return options[randidx];
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userscore++;
        userScore.innerText=userscore;
        
        result.innerText=`you win! your ${userChoice} beats ${compChoice}` ;
        result.style.backgroundColor="green";
        
    }
    else{
        // console.log("you lose");
        compscore++;
        compScore.innerText=compscore;
        result.innerText=`you lose! ${compChoice} beats your ${userChoice}`;
        result.style.backgroundColor="red";
    }
}
const playGame=(userChoice)=>{
    
   const compChoice= compchoice();
  

   if(userChoice===compChoice){
    
    result.innerText=`Match Draw! you both choose ${userChoice}`;
    result.style.backgroundColor="black";
   }
   else{
    let userWin=true;
    if(userChoice==="rock"){
        userWin= compChoice==="paper"? false:true;
    }
    else if(userChoice==="paper"){
        userWin=compChoice==="scissor"?false:true;
    }
    else{
        userWin=compChoice==="rock"?false:true;
    }
    showWinner(userWin,userChoice,compChoice);
   }
   
}

choices.forEach((choice)=>{
 
    choice.addEventListener("click",()=>{
        const userChoice= choice.getAttribute("id");
        // console.log("choice was clicked");
        playGame(userChoice);
    });


});


