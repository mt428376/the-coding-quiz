var questions  = [
    {
        q: "Commonly used data types DO NOT include",
       ans: {
            a: "Strings",
            b: "Booleans",
            c: "Alerts",
            d: "Numbers"
       },  
    },
 { q2: "The condition is an if / else statement is enclosed within___.",
       answer: {   a:"quotes",
              b: " curly brackets" ,
              c: "square brackets" ,
              d:  "parenthesis"
   },
             q3: "Arrays in Javascript can be used to store__.",
             ans:  { a: "Numbers and strings",
                     b: "other Arrays ",
                     c: "booleans",
                     d: " All of the above"
                  }
             },
             
           { q4:" String values must be enclosed within___when being assigned to variables.",
            
                    ans: { a: "commas",
                           b: " curly brackets",
                           c: " quotes",
                           d: " parenthesis"


                    }

                
             },

 {  q5: " A very useful tool used during development and debugging for printing content to the debugger is:",
        ans: { a:"Javascript", 
              b: "bash",
              c:"for loops",
              d: "console",

        }

},
          

      
    



         


    
        
        
    
            

      


        
    

]
var questionsAsked = []
var i = 0


var startBtn = $('#startQuiz')

startBtn.on("click", function(){
    // hide intro div
    $('#intro').addClass('invisible')
    // start the quiz
    startingquiz()
        // start the timer
        // display q 1
        function displayquestion1() 








    ) 
  






}
// function that starts the timer

// function that displays questions to the page
function startingquiz(){
    if (questionsAsked.length >= questions.length /* or if there is no time left on the clock*/) {
        // call a function that ends the game 
            // stop the clock
            // calculate score
            // allow user to enter initials
            // go to high score page
    } else {
        // display question at i, and answers at i
        $("#question").text(questions[i].q)
        // after q is answered, increase i

        questions[i].ans.forEach(answer => {
            const ansBtn = $('button')
            // give the button classes
var answerbutton = document.createElement("button");
answerbutton.textContent = questions[questionsNum].answer


        })
     


    }

}
