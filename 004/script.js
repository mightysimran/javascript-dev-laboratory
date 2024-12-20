let random_number = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#submit")
const input = document.querySelector("#input")
const previousGuesses = document.querySelector("#prevg")
const remainingGuesses = document.querySelector("#remg")
const lowOrHigh = document.querySelector("#low-or-high")
const freshStart = document.querySelector("#resp")

const p = document.createElement("p")

let prevg = []
let attempts = 1
let initGame = true 

if(initGame){
   submit.addEventListener("click", function(e){
    e.preventDefault();
    const guess = parseInt(input.value)
    // console.log(guess)
    validate(guess)
   }) 
}

function validate(guess){
    if(!guess){
        alert("Enter something in the input field.")
    }
    else if(isNaN(guess)){
        alert("Enter a valid number.")
    }else if (guess < 1){
        alert("The number must be greater than zero.")
    }else if(guess > 100){
        alert("The number must be less than or equal to hundred.")
    }else{
        prevg.push(guess)
        if(attempts === 11){
            display(guess)
            printm(`The random number was ${random_number}`)
            end()
        }
        else{
            display(guess)
            main(guess)
        }
    }
}
function main(guess){
    if(guess === random_number){
        printm(`You guessed it right!`)
        end()
    }else if(guess < random_number){
        printm(`Number is too low!`)
    }else if(guess > random_number){
        printm(`Number is too high!`)
    }
}

function display(guess){
    input.value = ""
    previousGuesses.innerHTML += `${guess}, `
    attempts++
    remainingGuesses.innerHTML = `${11-attempts}`
}

function printm(message){
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function end(){
    input.value = ""
    input.setAttribute("disabled", '')
    submit.setAttribute("disabled", "")
    p.classList.add('button')
    p.innerHTML = `<button id='start'>Play again!</button>`
    freshStart.appendChild(p)
    initGame = false
    start()
}

function start(){
    const startbtn = document.querySelector("#start")
    startbtn.addEventListener("click", function(e){
        random_number = parseInt(Math.random() * 100 + 1)
        prevg = []
        attempts = 1

        printm("")
        previousGuesses.innerHTML = ""
        remainingGuesses.innerHTML = `${11-attempts}`
        input.removeAttribute("disabled")
        submit.removeAttribute("disabled")
        freshStart.removeChild(p)

        initGame = true
    })
}
