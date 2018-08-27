// Global Vars
    // Array of questions
    const questionArray = [
        {
            question: 'How many times have Trump-owned companies filed for bankruptcy?',
            answer1: '0',
            answer2: '2',
            answer3: '4',
            answer4: '6',
            correctAnswer: '4',
            correctAnswerNum: 'answer3',
            answerPic: 'assets/images/bankrupt.jpg',
        },
        {
            question: 'Which fake piece of art does Trump have at several of his resorts?',
            answer1: 'Fake Mona Lisa',
            answer2: 'Fake Birth of Venus',
            answer3: 'Fake Statue of David',
            answer4: 'Fake Time Magazine Cover Featuring Himself',
            correctAnswer: 'Fake Time Magazine Cover Featuring Himself',
            correctAnswerNum: 'answer4',
            answerPic: 'assets/images/time.jpg',
        },
        {
            question: 'According to Trump, who has a "great personality", is "talented" and "very smart"? ',
            answer1: 'Kim Jong Un',
            answer2: 'Stephen Hawking',
            answer3: 'Albert Einstein',
            answer4: 'Carl Sagan',
            correctAnswer: 'Kim Jong Un',
            correctAnswerNum: 'answer1',
            answerPic: 'assets/images/kim.jpg',
        },
        {
            question: 'How many times has Trump been sued?',
            answer1: '~350',
            answer2: '~3500',
            answer3: '~35000',
            answer4: '~Never',
            correctAnswer: '~3500',
            correctAnswerNum: 'answer2',
            answerPic: 'assets/images/sued.gif',
        },
        {
            question: 'Which of the following has Trump said?',
            answer1: '"I know Hillary and I think she would make a great president."',
            answer2: '"Hillary will be a disaster as a president."',
            answer3: 'Neither.',
            answer4: 'Both.',
            correctAnswer: 'Both.',
            correctAnswerNum: 'answer4',
            answerPic: 'assets/images/twotrumps.jpg',
        },
        {
            question: 'How many cans of Diet Coke does Trump drink per week?',
            answer1: '~20',
            answer2: '~85',
            answer3: '~400',
            answer4: 'None, he only drinks the tears of snowflakes.',
            correctAnswer: '~85',
            correctAnswerNum: 'answer2',
            answerPic: 'assets/images/dietcoke.jpg',
        },
        {
            question: 'Who cuts the hair of Trump to this day?',
            answer1: 'His first wife',
            answer2: 'His second wife',
            answer3: 'His third wife',
            answer4: 'His daughter-wife',
            correctAnswer: 'His third wife',
            correctAnswerNum: 'answer3',
            answerPic: 'assets/images/melania.jpg',
        },
        {
            question: 'How many hours of TV does Trump watch each day?',
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
    // Var to count which question is to be displayed next
    let questionCount = 0;
    // Scorekeeping
    let guessedWrong = 0;
    let guessedRight = 0;
    let timesUp = 4;
    // interval for timers
    let intervalID = 0;
    let displayTime = 0;
    






// Global functions


// Function for the timer. time = a time in seconds, cb = a function to run on completion, display = true/false, whether to display, target = optional, where to display
const countdown = function(time, cb, display, target) {
    if (display) {document.querySelector(target).textContent = ':' + time + 's remaining.'};
    intervalID = setInterval(function(){
        time--
        console.log(timesUp);
        if (display) {document.querySelector(target).textContent = ':' + time + 's remaining.'};
        if (!time) {
            clearInterval(intervalID);
            cb();
        }
    }, 1000);
}
    // set interval to 30 seconds
    // if timer = 0
        // increment timesUp
        // send 'too slow' to 'rightWrong'
    // run the function that goes to the result screen


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

    if (incrementer === 'timesUp') {timesUp++};
    if (incrementer === 'guessedWrong') {guessedWrong++};
    if (incrementer === 'guessedRight') {guessedRight++};
    // check to see if we asked all the questions
    if (questionCount === questionArray.length) {
        // go to gameover screen
        toGameOver();
    } else {
        // start a timer for 5s to send us to the next question
        countdown(1, nextQuestion, false);
    }
};
  

// Function to load the next question
const nextQuestion = function() {    
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
    countdown(1, () => {toResult('Time Is Up!!', 'timesUp')}, true, '#timer');
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
    document.getElementById(currentObject['correctAnswerNum']).classList.add('theAnswer');
    // assign 'The correct answer was ' + .theAnswer
    document.getElementById('correctAnswer').textContent = 'The correct answer was ' + currentObject['correctAnswer'] + '!'
    
    // set the img src to .answerPic
    document.getElementById('answerPic').src = currentObject['answerPic'];
    // increment questionCount
    questionCount++;
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
    document.querySelector("#guessedRight").textContent = 'Incorrect Answers: ' + guessedWrong;
    document.querySelector("#guessedRight").textContent = 'Failed To Answer:  ' + timesUp;

}


// Function to start a mid-round timer
    // start a timer for 5 seconds, if questionCount = array.length - 1, send to end screen, else run next question function
    //// Remove the .theAnswer class from the previous right answer
    // document.querySelector('.theAnswer').classList.remove('theAnswer');


// When the start button is pressed
const startGame = function() {
    // show the timer
    document.querySelector('#timer').classList.remove('invis');
    // load next question function
    nextQuestion();
}
    
// When the restart button is pressed
    // clear global variables
    // hide gameover screen
    // load next question function


// When the user clicks an answer
    // run the function that goes to the result screen
    
    // if the clicked item has .theAnswer        
        // remove .theAnswer
        // change text content of rightWrong to 'you got it'        
        // increment right answer
    // else
        // remove .theAnswer from .theAnswer
        // change text content of rightWrong to 'you got it wrong!'
        // increment wrong answer



    
