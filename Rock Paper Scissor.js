const getUserChoice = (userInput) =>{
  userInput = userInput.toLowerCase();
  if(userInput ==='rock' || userInput === 'scissors' || userInput === 'paper' || userInput==='bomb'){
    return userInput;
  }
    else{
      console.log('Error!');
    }
  }
 const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random()*3);
   switch(randomNumber){
     case 0:
       return 'rock';
       break;
     case 1:
       return 'paper';
       break;
     case 2:
       return 'scissors';
       break;
       
   }
 }
 const determineWinner = (userChoice,computerChoice)=>{
   if(userChoice===computerChoice){
     return 'The game was a tie';
   }
   if(userChoice==='rock'){
     if(computerChoice==='paper'){
       return 'You Lose';
     }
     else{
       return 'You Won';
     }
   }
   if(userChoice==='paper'){
      if(computerChoice==='scissors'){
       return 'You Lose';
     }
     else{
       return 'You Won';
     }
   }
   if(userChoice==='scissors')
    {
       if(computerChoice==='rock'){
       return 'You Lose';
     }
     else{
       return 'You Won';
     }
    }
   if(userChoice==='bomb'){
     return 'You Won';
   }
 }
 const playGame =() =>{
   userChoice=getUserChoice('rock');
   console.log(userChoice);
   computerChoice=getComputerChoice('paper');
 console.log(computerChoice);
  console.log(determineWinner(userChoice,computerChoice)); 
 };
playGame();

