

    //  <h2>First to reach 5 point will be ther winner!</h2>
    //  <div class =score-board>
    //      <h3 id="you">You</h3>
    //      <span id="score_point">0:0</span>
    //      <h3 id="computer">computer</h3>
    //  </div>
    //  <h2 id="result">Rocks beats scisscors. You won!!</h2>
    //  <button id="r">rock</button>
    //  <button id="p">paper</button>
    //  <button id="s">Scisscors</button>
let userchoice;
  const r =document.querySelectorAll('button');
   r.forEach(item=>item.addEventlistener('click',(e)=>{
    console.log("u clickd me");
    // console.log(userchoice);  
    // console.log("hello");
   }))
   console.log("hello");
 
//  function handle(e){
//      userchoice=e.target.id;
//      console.log(userchoice);

//  }







// function computerPlay(){
//     let ran=['rock','paper','scissors'];
//    let out=ran[Math.floor(Math.random()*ran.length)];
//    return out;
// } 



// //     //single round play
// function playRound(playerSelection,computerSelection){
//      x=playerSelection;
//      y=computerSelection; 
//     if(x=='rock' && y=='scissors' || x=='paper' && y=='rock' ||x=='scissors' && y=='paper')
//      {
        
//          return `You Won! ${x} beats ${y}`;
//      }

//      if(x=='rock' && y=='paper'||x=='paper' && y=='scissors' ||x=='scissors' && y=='rock')
//      {
//          return `You Lost! ${y} beats ${x}`;
//      }
     
//      if(x==y)
//      {
//          return `It's a Tie! ${x} Tie ${y}`;
//      }
     
//  }

//  //Game function to play 5 rounds,record score and declare winner
// function game(){
//     Round =0;
//     scoreComputer =0;
//     playerScore=0;
//     Total = 0;
//     for(i=1;i<=5;i++){      
//         const playerSelection=player();
//         const computerSelection=computerPlay();
//         const lay=playRound(playerSelection,computerSelection);
//         console.log(lay);
//         console.log(Round+=1,"Round");

//     if(x=='rock' && y=='scissors' || x=='paper' && y=='rock' ||x=='scissors' && y=='paper'){ 
//         console.log(playerScore=playerScore+1,'player');
//         console.log(scoreComputer=scoreComputer,'computer');
//      }

//      if(x=='rock' && y=='paper'||x=='paper' && y=='scissors' ||x=='scissors' && y=='rock'){
//         console.log(playerScore=playerScore,'player');
//         console.log(scoreComputer=scoreComputer+1,'computer');     
//      }

//      if(x==y){
//         console.log(playerScore=playerScore,'player');
//         console.log(scoreComputer=scoreComputer,'computer'); 
        
//      }
    

// } 
// if(playerScore>scoreComputer)
//      {
//          console.log(`You Won! ${playerScore}:${scoreComputer}`);
//     }
//     if(playerScore<scoreComputer)
//      {
//          console.log(`You Lost! ${playerScore}:${scoreComputer}`);
//     }
//     if(playerScore===scoreComputer)
//     console.log(`Tie Game:: ${playerScore}:${scoreComputer}`);
// }
//   game();
  

