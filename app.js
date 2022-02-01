console.log('Hi')

const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
 

//use a while loop(s) to accomplish tasks
//use prompt (which stores a user input and uses it later on)

  ////////////////
  play: function() {
    //console.log(this.prevGuesses)
    this.secretNum = Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
    console.log(this.secretNum)
    do{
      this.getGuess()
      this.render()
    } while (this.prevGuesses != this.secretNum)  
  },
  ///////////////////
  getGuess: function(){
    let guess
    do{
      guess = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}.`))
      this.prevGuesses.push(guess)
    } while (isNaN(guess) || guess < this.smallestNum || guess > this.biggestNum)
    return guess

  },
///////////////////////
  render: function(){
    if(this.secretNum === this.prevGuesses[this.prevGuesses.length - 1])
    {alert(`Look who finally got it in ${this.prevGuesses.length} guesses...What, ya want an award or something? Go play outside.`)
  } else if (this.prevGuesses[this.prevGuesses.length - 1] >= this.secretNum){
    alert(`Nope, too high.`)
    } else {
    alert(`Nope, too low.`)
    }
  }
}   

game.play()
console.log(game.secretNum)

