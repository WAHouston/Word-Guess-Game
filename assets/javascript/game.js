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
        }
        console.log(correct)
    }

    var reset = function(){
        wordSelect()
        numGuesses = 10
        wrongLetters = []
    }

    var letterCheck = function(guess){
        var counter = 0
        for (var i = 0; i < currentWord.length; i++){
            if (guess === currentWord[i]){
                correct[i] = guess
                counter++
            }
        }
        if (counter < 1 && wrongLetters.indexOf(guess) === -1){
            wrongLetters.push(guess)
            numGuesses--
            if (numGuesses < 1){
                reset()
            }
            console.log(wrongLetters)
        } else{
            console.log(correct)
        }
    }
    
    document.addEventListener("keyup", function(event){
        letterCheck(event.key.toLowerCase())
    })

    wordSelect()










}
