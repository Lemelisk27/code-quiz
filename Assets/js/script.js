var timeEl = document.querySelector(".time");
var questEl = document.querySelector(".quest");
var instructEl = document.querySelector(".instruct");
var btnsEl = document.querySelector(".btns")
var secondsLeft = 75;
var buttonEl = document.querySelector(".startbtn")
var buttonEl1 = document.createElement("button")
var buttonEl2 = document.createElement("button")
var buttonEl3 = document.createElement("button")
var buttonEl4 = document.createElement("button")
var questionOne = "How many miliseconds are in a day?"
var answerOne = ["86,400,000", "60,000", "2", "1,000,000,000"]

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
}

function setTime () {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = "Timer: " + secondsLeft;
        if(secondsLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000)
}

buttonEl.addEventListener("click",
function quiz() {
    setTime()
    instructEl.textContent = ""
    buttonEl.remove()
    btncre()
    btnsEl.append(buttonEl1)
    btnsEl.append(buttonEl2)
    btnsEl.append(buttonEl3)
    btnsEl.append(buttonEl4)
    questEl.textContent = questionOne
    for (let i = answerOne.length -1; i > 0; i--) {
        let j = Math.floor(Math.random() * i)
        let k = answerOne[i]
        answerOne[i] = answerOne[j]
        answerOne[j] = k
    }
    buttonEl1.textContent = answerOne[0]
    buttonEl2.textContent = answerOne[1]
    buttonEl3.textContent = answerOne[2]
    buttonEl4.textContent = answerOne[3]
    console.log(answerOne)
})

// buttonEl.addEventListener("click", quiz())

