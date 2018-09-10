window.onload = function(){
    //storage
    var numWins = 0
    var numGuesses = 10
    var wrongLetters = []
    var wordList = ["dragonborn", "dwarf", "elf", "gnome", "halfelf", "halforc", "halfling", "human", "tiefling", "barbarian", "bard", "cleric", "druid", "fighter", "monk", "paladin", "ranger", "rogue", "sorcerer", "warlock", "wizard"]
    var currentWord = ""
    var correct = []
    //display
    var disWins = document.getElementById("dis-wins")
    var disNumGuess = document.getElementById("num-guess")
    var disLettersGuessed = document.getElementById("wrong-letters")
    var disCorrect = document.getElementById("reveal")
    //game
    var wordSelect = function(){
        currentWord = wordList[Math.floor(Math.random() * wordList.length)]
        correct = []
        for (var i = 0; i < currentWord.length; i++){
            correct.push("_")
            disCorrect.textContent += correct[i] + " "
        }
    }

    var reset = function(){
        disCorrect.textContent = ""
        wordSelect()
        numGuesses = 10
        wrongLetters = []
        disLettersGuessed.textContent = ""
        disNumGuess.textContent = numGuesses
    }

    var letterCheck = function(guess){
        if (guess.charCodeAt(0) < 97 || guess.charCodeAt(0) > 122 || guess.length > 1) {
            return;
        }
        var counter = 0
        disCorrect.textContent = ""
        for (var i = 0; i < currentWord.length; i++){
            if (guess === currentWord[i]){
                correct[i] = guess
                counter++
            }
            disCorrect.textContent += correct[i] + " "
        }
        if (counter < 1 && wrongLetters.indexOf(guess) === -1){
            wrongLetters.push(guess)
            numGuesses--
            disNumGuess.textContent = numGuesses
            disLettersGuessed.textContent += wrongLetters[wrongLetters.length - 1] + " "
            if (numGuesses < 1){
                reset()
            }
        } else if(correct.indexOf("_") === -1){
            reset()
            numWins++
            disWins.textContent = numWins
        }
    }

    disWins.textContent = numWins
    reset()
   
    document.addEventListener("keyup", function(event){
        letterCheck(event.key.toLowerCase())
    })

}
