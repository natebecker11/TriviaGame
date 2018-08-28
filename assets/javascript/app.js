// Global Vars
    // Array of questions
    const questionArray = [
        {
            question: 'How Many Times Have Trump-Owned Companies Filed For Bankruptcy?',
            answer1: '0',
            answer2: '2',
            answer3: '4',
            answer4: '6',
            correctAnswer: '4',
            correctAnswerNum: 'answer3',
            answerPic: 'assets/images/bankrupt.jpg',
        },
        {
            question: 'Which Fake Piece Of Art Does Trump Have At Several Of His Resorts?',
            answer1: 'Fake Mona Lisa',
            answer2: 'Fake Birth of Venus',
            answer3: 'Fake Statue of David',
            answer4: 'Fake Time Magazine Cover Featuring Himself',
            correctAnswer: 'Fake Time Magazine Cover Featuring Himself',
            correctAnswerNum: 'answer4',
            answerPic: 'assets/images/time.jpg',
        },
        {
            question: 'According To Trump, Who Has A "Great Personality", Is "Talented" And "Very Smart"? ',
            answer1: 'Kim Jong Un',
            answer2: 'Stephen Hawking',
            answer3: 'Albert Einstein',
            answer4: 'Carl Sagan',
            correctAnswer: 'Kim Jong Un',
            correctAnswerNum: 'answer1',
            answerPic: 'assets/images/kim.jpg',
        },
        {
            question: 'How Many Times Has Trump Been Sued?',
            answer1: '~350',
            answer2: '~3500',
            answer3: '~35000',
            answer4: '~Never',
            correctAnswer: '~3500',
            correctAnswerNum: 'answer2',
            answerPic: 'assets/images/sued.gif',
        },
        {
            question: 'Which Of The Following Has Trump Said?',
            answer1: '"I Know Hillary And I Think She Would Make A Great President."',
            answer2: '"Hillary Will Be A Disaster As A President."',
            answer3: 'Neither.',
            answer4: 'Both.',
            correctAnswer: 'Both.',
            correctAnswerNum: 'answer4',
            answerPic: 'assets/images/twotrumps.jpg',
        },
        {
            question: 'How Many Cans Of Diet Coke Does Trump Drink Per Week?',
            answer1: '~20',
            answer2: '~85',
            answer3: '~400',
            answer4: 'None, He Only Drinks The Tears Of Snowflakes.',
            correctAnswer: '~85',
            correctAnswerNum: 'answer2',
            answerPic: 'assets/images/dietcoke.jpg',
        },
        {
            question: 'Who Cuts The Hair Of Trump To This Day?',
            answer1: 'His First Wife',
            answer2: 'His Second Wife',
            answer3: 'His Third Wife',
            answer4: 'His Daughter-Wife',
            correctAnswer: 'His Third Wife',
            correctAnswerNum: 'answer3',
            answerPic: 'assets/images/melania.jpg',
        },
        {
            question: 'How Many Hours Of TV Does Trump, Our President, Watch Each Day?',
            answer1: '1-2',
            answer2: '3-4',
            answer3: '5-8',
            answer4: '10-14',
            correctAnswer: '5-8',
            correctAnswerNum: 'answer3',
            answerPic: 'assets/images/trumptv.jpg',
        },
    
    ]

    // Array of text areas to fill
    const textAreas = ['question', 'answer1', 'answer2', 'answer3', 'answer4']
    // Variables to count which question is to be displayed next
    let questionCount = 0;
    // Scorekeeping
    let guessedWrong = 0;
    let guessedRight = 0;
    let timesUp = 0;
    // interval for timers
    let intervalID = 0;
    let displayTime = 0;
    // Sound clips
    let geniusClip = document.querySelector('#geniusClip');
    let wrongClip = document.querySelector('#wrongClip');






// Global functions



// Function for the timer. time = a time in seconds, cb = a function to run on completion, display = true/false, whether to display, target = optional, where to display
const countdown = function(time, cb, display, target) {
    if (display) {document.querySelector(target).textContent = time + 's Remaining.'};
    intervalID = setInterval(function(){
        time--        
        if (display) {document.querySelector(target).textContent = time + 's Remaining.'};
        if (!time) {
            clearInterval(intervalID);
            cb();
        };
    }, 1000);
}
 


// Function to go to the result screen, with a parameter for what text to display in the result header and a parameter for which score total to increment
const toResult = function(text, incrementer) {
    // hide the questionDiv elements
    document.querySelectorAll('.questionDiv').forEach(function(element) {
        element.classList.add('invis');
    });
    // show the resultDiv elements
    document.querySelectorAll('.resultDiv').forEach(function(element) {
        element.classList.remove('invis');
    });
    // send the text to the result header
    document.querySelector('#rightWrong').textContent = text;
    // remove .theAnswer class from last round's answer
    document.querySelector('.theAnswer').classList.remove('theAnswer');
    // Increment the appropriate scoreboard
    if (incrementer === 'timesUp') {timesUp++};
    if (incrementer === 'guessedWrong') {guessedWrong++};
    if (incrementer === 'guessedRight') {guessedRight++};
    // Alt increment method, non-functional
    // incrementer++

    // start a timer for 5s to send us to the next question
    countdown(5, nextQuestion, false);
};
  
// Function to play a sound clip
var playMusic = function(song) {
    song.currentTime = 0;
    song.play();
}

// Function to load the next question
const nextQuestion = function() {
    clearInterval(intervalID);
    // check to see if we asked all the questions
    if (questionCount === questionArray.length) {
        // go to gameover screen
        toGameOver();
        
    } else {
        // Hide the startDiv
        document.querySelector('#startDiv').classList.add('invis');
        // Hide the resultDiv elements
        document.querySelectorAll('.resultDiv').forEach(function(element) {
            element.classList.add('invis');
        });
        // Show the questionDiv elements
        document.querySelectorAll('.questionDiv').forEach(function(element) {
            element.classList.remove('invis');
        });
        // run timer function for 30s, set to go to results after its up, and display to the #timer div
        countdown(30, () => {toResult('Time Is Up!!', 'timesUp')}, true, '#timer');
        // alt increment method, non-functional
        // countdown(1, () => {toResult('Time Is Up!!', timesUp)}, true, '#timer');
        // Get the question object from the question array
        let currentObject = questionArray[questionCount];
        // function to fill boxes from the question object
        const boxFiller = function(box) {
            document.getElementById(box).textContent = currentObject[box];
        };
        // Fill the question and answers boxes
        textAreas.forEach(function(element) {
            boxFiller(element);
        });
        // Assign theAnswer class to .theAnswer
        document.getElementById(currentObject['correctAnswerNum'])
            .classList.add('theAnswer');
        // assign 'The correct answer was ' + .theAnswer
        document.getElementById('correctAnswer')
            .textContent = 'The Correct Answer Was ' + currentObject['correctAnswer'] + '!'
        
        // set the img src to .answerPic
        document.getElementById('answerPic')
            .src = currentObject['answerPic'];
        // Increment question counter in order to move onto the next question
        questionCount++;
    }
}


// Function to load the gameover screen
const toGameOver = function() {
    // hide the resultDiv
    document.querySelectorAll('.resultDiv').forEach(function(element) {
        element.classList.add('invis');
    });    

    // show the gameoverdiv
    document.querySelectorAll('.gameOverDiv').forEach(function(element) {
        element.classList.remove('invis');
    });
    // hide the timer
    document.querySelector('#timer').classList.add('invis');    
    // send guessedRight, guessedWrong, timesUp to ''''''
    document.querySelector("#guessedRight").textContent = 'Correct Answers:   ' + guessedRight;
    document.querySelector("#guessedWrong").textContent = 'Incorrect Answers: ' + guessedWrong;
    document.querySelector("#timesUp").textContent = 'Failed To Answer:  ' + timesUp;

}




// When the start button is pressed
const startGame = function() {
    // show the timer
    document.querySelector('#timer').classList.remove('invis');
    // load next question function
    nextQuestion();
}
    
// When the restart button is pressed
const restartGame = function() {
    // clear global variables
    questionCount = 0;    
    guessedWrong = 0;
    guessedRight = 0;
    timesUp = 0;    
    displayTime = 0;
    clearInterval(intervalID);
    // hide gameover screen
    document.querySelectorAll('.gameOverDiv').forEach(function(element) {
        element.classList.add('invis');
    });    
    // start a new game
    startGame();
}


// When the user clicks an answer
const answerClick = function (e) {
    clearInterval(intervalID);
    // if the clicked item has .theAnswer
    if (e.target.classList.contains('theAnswer')) {
        //send text the result header, increment guessed right, call Result screen
        toResult('You Got It!!!', 'guessedRight');
        // play genius clip
        playMusic(geniusClip);
    }
    // else
    else {
        toResult('Sorry, You Were Incorrect!', 'guessedWrong');
        //play wrong clip
        playMusic(wrongClip);
    }        
}

