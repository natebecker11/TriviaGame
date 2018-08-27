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



    
