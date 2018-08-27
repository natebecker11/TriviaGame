// Global Vars
    // Array of questions
    const questionArray = [
        {
            question: '',
            answer1: '',
            answer2: '',
            answer3: '',
            answer4: '',
            correctAnswer: '',
            answerPic: '',
        },
        {
            question: '',
            answer1: '',
            answer2: '',
            answer3: '',
            answer4: '',
            correctAnswer: '',
            answerPic: '',
        },
        {
            question: '',
            answer1: '',
            answer2: '',
            answer3: '',
            answer4: '',
            correctAnswer: '',
            answerPic: '',
        },
        {
            question: '',
            answer1: '',
            answer2: '',
            answer3: '',
            answer4: '',
            correctAnswer: '',
            answerPic: '',
        },
        {
            question: '',
            answer1: '',
            answer2: '',
            answer3: '',
            answer4: '',
            correctAnswer: '',
            answerPic: '',
        },
        {
            question: '',
            answer1: '',
            answer2: '',
            answer3: '',
            answer4: '',
            correctAnswer: '',
            answerPic: '',
        },
        {
            question: '',
            answer1: '',
            answer2: '',
            answer3: '',
            answer4: '',
            correctAnswer: '',
            answerPic: '',
        },
        {
            question: '',
            answer1: '',
            answer2: '',
            answer3: '',
            answer4: '',
            correctAnswer: '',
            answerPic: '',
        },
    
    ]

    // Var to count which question is to be displayed next
    let questionCount = 0;
    // Scorekeeping
    let guessedWrong = 0;
    let guessedRight = 0;
    let timesUp = 0;
    






// Global functions


// Function to load the next question
    // Hide the startDiv
    // Show the questionDiv
    // start a timer for 30 seconds,
    // send the time to the timerbox
    // Get the question from the question array    
    // Assign .question to the question box
    // Assign answer 1-4 to answer 1-4
    // Assign theAnswer class to .theAnswer
    // assign 'The correct answer was ' + .theAnswer
    // set the img src to .answerPic
    // increment questionCount

// Function to load the gameover screen
    // hide the resultDiv
    // show the gameoverdiv
    // send guessedRight, guessedWrong, timesUp to ''''''

// Function to start a mid-round timer
    // start a timer for 5 seconds, if questionCount = array.length - 1, send to end screen, else run next question function

// Function to go to the result screen
    // hide the questionDiv
    // show the resultDiv
    // clear the interval


// Function to start the 30-second timer
    // set interval to 30 seconds
    // if timer = 0
        // increment timesUp
        // send 'too slow' to 'rightWrong'
    // run the function that goes to the result screen



// When the start button is pressed
    // load next question function

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



    
