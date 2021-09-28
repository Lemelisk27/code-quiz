// Sets variables
var timeEl = document.querySelector(".time");
var questEl = document.querySelector(".quest");
var instructEl = document.querySelector(".instruct");
var btnsEl = document.querySelector(".btns")
var scoreList = document.querySelector("#score-list")
var secondsLeft = 75;
var stbtn = document.querySelector(".start")
var hiscoreBtn = document.querySelector(".hiScore")
var buttonEl1 = document.createElement("button")
var buttonEl2 = document.createElement("button")
var buttonEl3 = document.createElement("button")
var buttonEl4 = document.createElement("button")
var submitbtn = document.createElement("button")
var nameInput = document.createElement("input")
var response = document.querySelector(".response")
var newBtn = document.querySelector(".newBtn")
var score = 0
var isWon = false
var questionOne = "How many miliseconds are in a day?"
var answerOne = ["86,400,000", "60,000", "2", "1,000,000,000"]
var questionTwo = "What is the command to upload changes to GitHub?"
var answerTwo = ["git push", "git pull", "git commit", "get add"]
var questionThree = "What is NOT an example of a semantic element in HTML?"
var answerThree = ["div", "figcaption", "nav", "time"]
var questionFour = "In Javascript, the correct way to inclose data in a string is with:"
var answerFour = ["Quotation Marks", "Parentheses", "Curly Brackets", "Square Brackets"]

var highScores = []

// gets the scores from local storage
function init() {
    var storedHighScores = JSON.parse(localStorage.getItem("highScores"))
    if (storedHighScores !== null) {
        highScores = storedHighScores
    }
}

// runs the high score function
init()

// adds the event listener for the high scores button
hiscoreBtn.addEventListener("click", function (event) {
    event.preventDefault()
    viewHighScores()
})

// creates the buttons needed for the quiz
function btncre() {
    buttonEl1.setAttribute("style", "width: 25%; margin: 1rem; border-radius: 8px; height: 5rem; padding-left: 1rem; color: var(--light); background: linear-gradient(90deg, var(--firstdark), var(--seconddark), var(--firstdark))")
    buttonEl1.setAttribute("data-state", "1")
    buttonEl1.setAttribute("data-number", "1")
    buttonEl1.setAttribute("class", "btn")
    buttonEl1.textContent = "Button 1"
    buttonEl2.setAttribute("style", "width: 25%; margin: 1rem; border-radius: 8px; height: 5rem; padding-left: 1rem; color: var(--light); background: linear-gradient(90deg, var(--firstdark), var(--seconddark), var(--firstdark))")
    buttonEl2.setAttribute("data-state", "1")
    buttonEl1.setAttribute("data-number", "2")
    buttonEl2.setAttribute("class", "btn")
    buttonEl2.textContent = "Button 2"
    buttonEl3.setAttribute("style", "width: 25%; margin: 1rem; border-radius: 8px; height: 5rem; padding-left: 1rem; color: var(--light); background: linear-gradient(90deg, var(--firstdark), var(--seconddark), var(--firstdark))")
    buttonEl3.setAttribute("data-state", "1")
    buttonEl1.setAttribute("data-number", "3")
    buttonEl3.setAttribute("class", "btn")
    buttonEl3.textContent = "Button 3"
    buttonEl4.setAttribute("style", "width: 25%; margin: 1rem; border-radius: 8px; height: 5rem; padding-left: 1rem; color: var(--light); background: linear-gradient(90deg, var(--firstdark), var(--seconddark), var(--firstdark))")
    buttonEl4.setAttribute("data-state", "1")
    buttonEl1.setAttribute("data-number", "4")
    buttonEl4.setAttribute("class", "btn")
    buttonEl4.textContent = "Button 4"
    btnsEl.append(buttonEl1)
    btnsEl.append(buttonEl2)
    btnsEl.append(buttonEl3)
    btnsEl.append(buttonEl4)
}

// Timer function
function setTime () {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = "Timer: " + secondsLeft;
        if(secondsLeft >= 0) {
            if(isWon && secondsLeft > 0) {
                clearInterval(timerInterval)
            }
        }
        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            lost()
        }
    }, 1000)
}

// Starts the quiz
stbtn.addEventListener("click",
function first(event) {
    event.preventDefault()
    setTime()
    instructEl.textContent = ""
    stbtn.remove()
    hiscoreBtn.textContent = ""
    btncre()
    for (let i = answerOne.length -1; i > 0; i--) {
        let j = Math.floor(Math.random() * i)
        let k = answerOne[i]
        answerOne[i] = answerOne[j]
        answerOne[j] = k
    }
    questEl.textContent = questionOne
    buttonEl1.textContent = answerOne[0]
    buttonEl2.textContent = answerOne[1]
    buttonEl3.textContent = answerOne[2]
    buttonEl4.textContent = answerOne[3]
    ans1()
})

var buttonEl = document.getElementsByClassName("btns");

//Sets the eventListener for the first answer
function ans1 () {
    buttonEl[0].addEventListener("click", function ans1b(event) {
        event.preventDefault()
        if (event.target.innerHTML === "86,400,000" && event.target.dataset.state === "1") {
            response.textContent = "Correct"
            second()
        }
        else if (event.target.innerHTML !== "86,400,000" && event.target.dataset.state === "1") {
            response.textContent = "Wrong"
            if (secondsLeft > 15) {
                secondsLeft = secondsLeft - 15
                second()
            }
            else {
                lost()
            }
        }
        else if (event.target.innerHTML === "git push" && event.target.dataset.state === "2") {
            response.textContent = "Correct"
            third()
        }
        else if (event.target.innerHTML !== "git push" && event.target.dataset.state === "2") {
            response.textContent = "Wrong"
            if (secondsLeft > 15) {
                secondsLeft = secondsLeft - 15
                third()
            }
            else {
                lost()
            }
        }
        else if (event.target.innerHTML === "div" && event.target.dataset.state === "3") {
            response.textContent = "Correct"
            forth()
        }
        else if (event.target.innerHTML !== "div" && event.target.dataset.state === "3") {
            response.textContent = "Wrong"
            if (secondsLeft > 15) {
                secondsLeft = secondsLeft - 15
                forth()              
            }
            else {
                lost()
            }
        }
        else if (event.target.innerHTML === "Quotation Marks" && event.target.dataset.state === "4") {
            response.textContent = "Correct"
            won()
        }
        else {
            if (secondsLeft > 15) {
                secondsLeft = secondsLeft - 15
                won()              
            }
            else {
                lost()
            }
        }
    });
}

// second question
function second() {
    for (let i = answerTwo.length -1; i > 0; i--) {
        let j = Math.floor(Math.random() * i)
        let k = answerTwo[i]
        answerTwo[i] = answerTwo[j]
        answerTwo[j] = k
    }
    questEl.textContent = questionTwo
    buttonEl1.textContent = answerTwo[0]
    buttonEl2.textContent = answerTwo[1]
    buttonEl3.textContent = answerTwo[2]
    buttonEl4.textContent = answerTwo[3]
    buttonEl1.setAttribute("data-state", "2")
    buttonEl2.setAttribute("data-state", "2")
    buttonEl3.setAttribute("data-state", "2")
    buttonEl4.setAttribute("data-state", "2")
}

// third question
function third() {
    for (let i = answerThree.length -1; i > 0; i--) {
        let j = Math.floor(Math.random() * i)
        let k = answerThree[i]
        answerThree[i] = answerThree[j]
        answerThree[j] = k
    }
    questEl.textContent = questionThree
    buttonEl1.textContent = answerThree[0]
    buttonEl2.textContent = answerThree[1]
    buttonEl3.textContent = answerThree[2]
    buttonEl4.textContent = answerThree[3]
    buttonEl1.setAttribute("data-state", "3")
    buttonEl2.setAttribute("data-state", "3")
    buttonEl3.setAttribute("data-state", "3")
    buttonEl4.setAttribute("data-state", "3")
}

// forth question
function forth() {
    for (let i = answerFour.length -1; i > 0; i--) {
        let j = Math.floor(Math.random() * i)
        let k = answerFour[i]
        answerFour[i] = answerFour[j]
        answerFour[j] = k
    }
    questEl.textContent = questionFour
    buttonEl1.textContent = answerFour[0]
    buttonEl2.textContent = answerFour[1]
    buttonEl3.textContent = answerFour[2]
    buttonEl4.textContent = answerFour[3]
    buttonEl1.setAttribute("data-state", "4")
    buttonEl2.setAttribute("data-state", "4")
    buttonEl3.setAttribute("data-state", "4")
    buttonEl4.setAttribute("data-state", "4")
}

// function for if the player loses
function lost () {
    questEl.textContent = "You have lost, the game is over."
    response.textContent = ""
    buttonEl1.remove()
    buttonEl2.remove()
    buttonEl3.remove()
    buttonEl4.remove()
    var newGame = document.createElement("button")
    newGame.setAttribute("style", "width: 25%; border-radius: 8px; height: 3.5rem; padding-left: 1rem; color: var(--light); background: linear-gradient(90deg, var(--firstdark), var(--seconddark), var(--firstdark))")
    newGame.textContent = "Start Over"
    scoreList.append(newGame)
    newGame.addEventListener("click", function () {
        location.reload()
    })
}

// function for if the player wins
function won () {
    score = secondsLeft
    isWon = true
    questEl.textContent = "You have won! Your score is: " + score + "!"
    response.textContent = "Please enter your name:"
    buttonEl1.remove()
    buttonEl2.remove()
    buttonEl3.remove()
    buttonEl4.remove()
    newBtn.append(nameInput)
    nameInput.setAttribute("type", "text")
    nameInput.setAttribute("id", "name-text")
    nameInput.setAttribute("style", "height: 3rem; margin: auto")
    newBtn.append(submitbtn)
    submitbtn.setAttribute("style", "width: 15%; margin: auto; border-radius: 8px; height: 3.5rem; padding-left: 1rem; color: var(--light); background: linear-gradient(90deg, var(--firstdark), var(--seconddark), var(--firstdark))")
    submitbtn.textContent = "Submit"
    console.log(nameInput.value)
    submitbtn.addEventListener("click", function () {
        highScores.push("Name: " + nameInput.value + " - " + score )
        localStorage.setItem("highScores", JSON.stringify(highScores))
        location.reload()
    })
}

// function to view high scores
function viewHighScores () {
    instructEl.textContent = ""
    questEl.textContent = "Highscores!"
    stbtn.remove()
    for (let i = 0; i < highScores.length; i++) {
        var newScores = highScores[i];
        
        var li = document.createElement("li");
        li.textContent = newScores;
        li.setAttribute("data-index", i);
        li.setAttribute("style", "margin: 1rem");
        scoreList.append(li);
    }
    var resetBtn = document.createElement("button")
    resetBtn.setAttribute("style", "width: 25%; border-radius: 8px; height: 3.5rem; padding-left: 1rem; color: var(--light); background: linear-gradient(90deg, var(--firstdark), var(--seconddark), var(--firstdark))")
    resetBtn.textContent = "Reset Scores"
    var newGame = document.createElement("button")
    newGame.setAttribute("style", "width: 25%; border-radius: 8px; height: 3.5rem; padding-left: 1rem; color: var(--light); background: linear-gradient(90deg, var(--firstdark), var(--seconddark), var(--firstdark))")
    newGame.textContent = "Go Back"
    scoreList.append(resetBtn)
    scoreList.append(newGame)
    resetBtn.addEventListener("click", function () {
        storedHighScores = null
        highScores = null
        localStorage.setItem("highScores", JSON.stringify(highScores))
        location.reload()
    })
    newGame.addEventListener("click", function () {
        location.reload()
    })
}