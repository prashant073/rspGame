const users=document.getElementById('user-score');
const comps=document.getElementById('comp-score');
const rock=document.getElementById('r');
const paper=document.getElementById('p');
const your =document.getElementById('you');
const oppos =document.getElementById('oppo');
const scissors=document.getElementById('s');
const resultDis=document.getElementById('result');
const lastText=document.getElementById('last');
let uscore=0;
let cscore=0;
//events
     rock.addEventListener('click',()=>{
        your.innerHTML="Rock";
        computerPlay();
        result("Rock");

     });
     
     paper.addEventListener('click',()=>{  
        your.innerHTML="Paper";
        computerPlay();
        result("Paper");
    });
    
     scissors.addEventListener('click',()=>{
        your.innerHTML="Scissors";
        computerPlay();
        result("Scissors");
    });

//generate computer choices
        function computerPlay(){
            select =['Rock','Scissors','Paper'];
            computerChoice=select[Math.floor((Math.random()*3))];
            oppos.innerHTML=computerChoice;
            return computerChoice;
        }

//result  and we will be passing some reference to show this beats this..
       function win(usee,comp){
           uscore++;
           resultDis.innerHTML=`You Win!  ${usee} beats ${comp}`;
        users.innerHTML=uscore;
        resultDis.style.color="rgb(50, 215, 0)";
       }
        
        function lose(usee,comp){
            cscore++;
            resultDis.innerHTML=`You Lost!  ${usee} beats ${comp}`; 
            comps.innerHTML=cscore;
            resultDis.style.color="rgb(255, 60, 0)";
        }
        function tie(usee,comp){
            resultDis.innerHTML=`Tie!  ${usee} &  ${comp}`; 
            resultDis.style.color="yellow";
        }

    
       //Function to refreshpage
       function refreshpage(){
           window.location.reload(true);
       }


//result display and calling function
        function result(U){
        const C=computerPlay();
        const a = U + C;
            switch(a){
                case "RockScissors":
                case "ScissorsPaper":
                case "PaperRock":
                win(U,C);
                    break;

                case "PaperScissors":
                case "RockPaper":
                case "ScissorsRock":
                lose(U,C); 
                    break;

                    case "PaperPaper":
                    case "RockRock":
                    case "ScissorsScissors":
                    tie(U,C); 
                    break;
            }

            if(uscore===5 ||cscore===5){
                lastText.innerHTML="Game Over!";
                lastText.style.color="#cc8813";
                const rem=document.querySelector('.choices');
                const rem1 =document.querySelector('.Score-board');
                const rem3 =document.querySelector('.head');
                rem.remove();
                rem1.remove();
                rem3.remove();
                    
        //buttons for refresh  
        const scoreboard=document.createElement('div');
        const scorelead=document.createElement('h3');
       scorelead.innerHTML=`You  ${uscore} : ${cscore} Opponent `;
       
       //appending 
       const bottom =document.getElementById('last messages');    
       bottom.appendChild(scoreboard);
       bottom.appendChild(scorelead);
       
       if(uscore===5 && cscore<uscore){
          const my=document.createElement('h2');
          my.innerHTML=`Winner!!! You're First to score 5`;
          my.style.color="#16ebe7";
          bottom.appendChild(my);
       }
       else{
        const my2=document.createElement('h2');
        my2.innerText=`You Lost!!! Opponent is first to score 5`;
        my2.style.color="red";
        bottom.appendChild(my2);
       }
       const newgame=document.createElement('button');
       newgame.innerHTML="Play Again!";
       newgame.style.border="hidden";
       bottom.appendChild(newgame);
       //event 
       newgame.addEventListener("click",refreshpage);
       }
        }
        
     
        