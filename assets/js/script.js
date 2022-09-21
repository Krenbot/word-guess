var startBtn = document.querySelector('.start-button')
var wordBlanksEl = document.querySelector('.word-blanks')
var scoreEl = document.querySelector('.score')

var words = ["javascript", "variable", "function", "object", "python", "localstorage", "timeout", "interval"]
var word
var validChars = "abcdefghijklmnopqrstuvwxyz"
var guessedCharacters = []
var score = 0

function checkWord (){
    console.log(word, wordBlanksEl)
    //compare word and empty word
}


function handleKeydown(event){
    if (validChars.includes(event.key)) {
        //keep track of char that was guessed
        guessedCharacters.push(event.key)
        //re-render word blanks.textcontent
        renderCharacters()
    }
}

function renderCharacters(){
var string = ""
    for (var i = 0; i < word.length; i++){
        var letter = word[i]
    //if we have guessed the character
        if (guessedCharacters.includes(letter) ) {
        //push the character into our string - adds letter that we're currently on into the string
            string += letter + ' '
         } else { 
        //push an _ into string
            string += '_ '
        }
    //if we have guessed the character
        //concat char into string
    }
    //set textContent of wordBlanksEl to be string
    wordBlanksEl.textContent = string.trim()
    checkWord()
}

function startRound(){
    guessedCharacters = []
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