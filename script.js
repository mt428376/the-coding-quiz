var questions = [
    {
        q: "Commonly used data types DO NOT include",
        ans: [
            "Strings",
            "Booleans",
            "Alerts",
            "Numbers"
        ],
correct: "Alerts",
    }, 
    
{
    q: "The condition is an if / else statement is enclosed within___.",
        ans: [
             "quotes",
                 " curly brackets",
                     "square brackets",
                         "parenthesis"

        ],
    correct: "quotes ",
},
    {
        q: "Arrays in Javascript can be used to store__.",
            ans: [
                 "Numbers and strings",
                     "other Arrays ",
                        "booleans",
                             " All of the above"
            ],
    },
    correct: "All of the above",

    {
        q: " String values must be enclosed within___when being assigned to variables.",

            ans: [
                 "commas",
                     " curly brackets",
                         " quotes",
                            " parenthesis"


            ],


    },
    correct: "parenthesis"

    {
        q: " A very useful tool used during development and debugging for printing content to the debugger is:",
            ans: [
                "Javascript",
                     "bash",
                        "for loops",
                             "console",

            ],

    },
    correct: "console"
          

      
    



         


    
        
        
    
            

      


        
    

]
    var questionsAsked = []
    var i = 0


    var startBtn = $('#startQuiz')

    startBtn.on("click", function () {

        // hide intro div
        $('#intro').addClass('invisible')
        // start the quiz
        startingquiz()
        // start the timer
        // display q 1

    }



    )





    quizQuestions.classList.remove("d-none")
    nextQuestion.classList.remove("d-none")
    console.log(nextQuestion.title)





    var questionNumber = {0};
    // function that starts the timer

    // function that displays questions to the page
    function startingquiz() {
        if (questionsAsked.length >= questions.length /* or if there is no time left on the clock*/) {
            // call a function that ends the game 
            // stop the clock
            // calculate score
            // allow user to enter initials
            // go to high score page
        } else {
            // display question at i, and answers at i
            for (var i = 0; i < questions.length; i++)
              
            // after q is answered, increase i
            btnScore.addEventListener("click", function () {
                let name = document.getElementById("inputScore").value
                scorePage(name, count)
            }

        }

    }














