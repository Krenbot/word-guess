var startBtn = document.querySelector('.start-button')
var wordBlanksEl = document.querySelector('.word-blanks')
var words = ["javascript", "variable", "function", "object", "python", "localstorage", "timeout", "interval"]
var word
var validChars = "abcdefghijklmopqrstuvwxyz"
var guessedCharacters = []

function handleKeydown(event){
    console.log(event.key)
    if (validChars.includes(event.key)){
        //keep track of char that was guessed
        guessedCharacters.push(event.key)
        //re-render word blanks.textcontent
        renderCharacters()
    }
}

function renderCharacters(){
var string = ""
    for (var i = 0; i < words.length; i++){
        var letter = word[i]
    //if we have guessed the character
    if (guessedCharacters.includes(letter)) {
        //push the character into our string - adds letter that we're currently on into the string
        string += letter
    } else { 
        //push an _ into string
        string += '_ '
    }
       
    //if we have guessed the character
        //concat char into string
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