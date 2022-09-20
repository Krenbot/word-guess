var startBtn = document.querySelector('.start-button')
var wordBlanksEl = document.querySelector('.word-blanks')
var words = ["javascript", "variable", "function", "object", "python", "localstorage", "timeout", "interval"]
var word
var validChars = "abcdefghijklmopqrstuvwxyz"


function handleKeydown(event){
    console.log(event.key)
    if (validChars.includes(event.key)){
        //keep track of char that was guessed
        //re-render word blanks
    }
}

function renderCharacters(){
var string = ""
    for (var i = 0; i < words.length; i++){
    //if we have guessed the character
        //push the character into our string
    //if we have guessed the character
        //concat char into string
    //else 
        //push an _ into string
        string += '_ '
        console.log(string)
    }
    //set textContent of wordBlanksEl to be string
    wordBlanksEl.textContent = string.trim()
}


function startRound(){
    //get random words from array
    var randomIndex = Math.floor(Math.random() * words.length)
    word = words[randomIndex]
    console.log(word)
    renderCharacters()
}



startBtn.addEventListener("click", startRound)
document.addEventListener('keydown', handleKeydown)


//score variable
//time left variable