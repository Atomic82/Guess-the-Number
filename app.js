

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
    console.log(this.prevGuesses)
    do{
      this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
   this.getGuess()
      console.log(this.prevGuesses)
      //getGuess.push()
      if (this.prevGuesses[this.prevGuesses.length - 1] === this.secretNum){
        console.log('ya got it')
      } else {
        console.log('no stupid, guess again lol') 
      } 
    } while (this.prevGuesses != this.secretNum)
    
       
  },
  ///////////////////
  getGuess: function(){
    let guess
    do{
      guess = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}.`))
      this.prevGuesses.push(guess)
    } while (isNaN(guess))
    return guess
    //console.log(this.prevGuesses)
  },
///////////////////////
  render: function(){
    if(this.secretNum === this.prevGuesses.length - 1)
    {alert(`Congrats, You eventually guessed correctly in ${prevGuesses.length}...What, ya want an award or something? Go play outside.`)
  } else if (this.prevGuesses >= this.secretNum){
    console.log(`Nope, too high.`)
    } else {
    console.log(`Nope, too low.`)
    }
  }
}   

game.play()
console.log(game.secretNum)

//You need a function which you invoke/call (method)