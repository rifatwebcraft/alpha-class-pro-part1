// function play(){
//     // step1: hidden home section
//     const homeSection = document.getElementById('home');
//     homeSection.classList.add('hidden');

//     // step2: show play ground section
//     const playSection = document.getElementById('play-ground');
//     playSection.classList.remove('hidden');
// }

function handleKeyboardButtonPress(event){
    const playerPressed = event.key ;
    console.log('player pressed', playerPressed);
    // game over immedietly if i want
    if(playerPressed === 'Escape'){
        gameOver();
    }
    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    // console.log(expectedAlphabet, playerPressed);
    
    // checked match or not
    if(playerPressed === expectedAlphabet){
        console.log('you got a point');

        const currentScore = getTextElementValueById('current-score');
        const updateScore = currentScore + 1 ;
        setTextElementValueById('current-score', updateScore)


        // ------------------------------------------
    //    update score
    // 1.get the current score
    // const currentScoreElement = document.getElementById('current-score');
    // const currentScoreText = currentScoreElement.innerText;
    // const currentScore = parseInt(currentScoreText);
    // console.log(currentScore);
    // // 2,increase the score by 1
    // const newScore = currentScore + 1;
    // //3. show the update score
    // currentScoreElement.innerText = newScore;

        // next-round
        removeBackgroundColorId(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('you missed you lost a life')

        const currentLifeNumber = getTextElementValueById('current-life');
        const newLife = currentLifeNumber - 1 ;
        setTextElementValueById('current-life', newLife);

        if(newLife === 0){
            gameOver();
        }


        // ------------------------------------
        //1 get current life number
        // const currentLifeNumber = document.getElementById('current-life');
        // const currentLifeText = currentLifeNumber.innerText;
        // const currentLife = parseInt(currentLifeText);
        // // 2 reduce the life count
        // const newLife = currentLife - 1;
        // // show the update life number
        // currentLifeNumber.innerText = newLife;
    }
}
// capture keyboard keypress
document.addEventListener('keyup', handleKeyboardButtonPress)

function continueGame (){
    // get a random alphabet
    const alphabet = getARandomAlphabet();
    // console.log('your random alphabet is', alphabet)

    // set the random alphabet to the screen
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet ;

    // set backgroundcolor
    addBackgroundColorById(alphabet);
}


function play(){
    // only play playgroud hide other element
    hideElementById('home');
    hideElementById('final-score')
    showElementById('play-ground');

    // reseet score and life
    setTextElementValueById('current-life', 5)
    setTextElementValueById('current-score', 0)
    continueGame();
}
function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');

    // update final score
    const lastscore = getTextElementValueById('current-score');
    console.log(lastscore);
    setTextElementValueById('game-score', lastscore)

    // clear the last selected alphabet highlight
    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorId(currentAlphabet);
}