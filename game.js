let scores,roundScore,activePlayer,gamePlaying;
newGame();

 //On clicking roll dice button
RollBtn=document.querySelector('.btn-roll');
RollBtn.addEventListener('click',function(){
    if(gamePlaying){
        //Random Value
    let dice=Math.ceil(Math.random()*6);
    
    diceImg=document.querySelector('.dice');

    //Changing image of dice according to the random number
    diceImg.src='./dice-'+dice+'.png';
    diceImg.style.display='block';

   //Adding that random number top the current score , 
    if(dice!==1){
        roundScore=roundScore+dice;
        document.querySelector('#current-'+activePlayer).textContent=roundScore;
    }

    // but if its 1 , then change the value of current score to 0
    else{
        
        nextPlayer();
        }
    }
    
});

holdBtn=document.querySelector('.btn-hold');
holdBtn.addEventListener('click',function(){
    if(gamePlaying){
        //Add current score to global score
    scores[activePlayer]+=roundScore;
    document.getElementById('score-'+activePlayer).textContent=scores[activePlayer];
    
    //Check if player won the game
    if(scores[activePlayer]>=100){
        document.querySelector('#name-'+activePlayer).textContent='Winner!';
        diceImg.style.display='none';
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
        gamePlaying=false;

    }
    else{
        //Update the UI
    nextPlayer();
        }
    }
});

document.querySelector('.btn-new').addEventListener('click',function(){
    newGame();
});
function newGame(){
    gamePlaying =true;
    scores=[0,0];
    roundScore=0;
    activePlayer=0;
    document.querySelector('.dice').style.display='none';
    
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');


    document.querySelector('#name-0').textContent='Player-1'
    document.querySelector('#name-1').textContent='Player-2'
    document.getElementById('score-0').textContent='0';
    document.getElementById('score-1').textContent='0';
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
  
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    
}

function nextPlayer(){
  //1.Current score ==0
  document.getElementById('current-0').textContent='0';
  document.getElementById('current-1').textContent='0';

  //2.Active Player Change
  activePlayer===1?activePlayer=0:activePlayer=1;
  roundScore=0;
  
  //3.Toggle active class
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  //4.Disply image = none
  diceImg.style.display='none';
}
