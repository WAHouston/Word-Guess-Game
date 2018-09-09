window.onload = function(){
//storage
var numWins = 0
var numGuesses = 10
var lettersGuessed = []
var wordList = ["dragonborn", "dwarf", "elf", "gnome", "halfelf", "halforc", "halfling", "human", "tiefling", "barbarian", "bard", "cleric", "druid", "fighter", "monk", "paladin", "ranger", "rogue", "sorcerer", "warlock", "wizard"]
var currentWord = ""
var correct = []
//display
var disWins = document.getElementById("#dis-wins")
var disNumGuess = document.getElementById("#num-guess")
var disLettersGuessed = document.getElementById("#wrong-letters")
var disCorrect = document.getElementById("#reveal")
//game
currentWord = wordList[Math.floor(Math.random() * wordList.length)]
console.log(currentWord)











}