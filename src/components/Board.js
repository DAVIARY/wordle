const GUESSES = 6;
let remainingGuesses = GUESSES;
let guessCurrent = [];
let nextLetter = 0;
let word = "react";

//DrawBoard intiazies the board with the number of guesses with 5 letter words
function DrawBoard() {
  let board = document.getElementById("board");

  //Creates the rows
  for (let i = 0; i < GUESSES; i++) {
    let row = document.createElement("div")
    row.className = "row"
  //Creates the boxes
    for (let u = 0; u < 5; u++) {
      let box = document.createElement("div")
      box.className = "box"
      row.appendChild(box);
    }

    board.appendChild(row)
  }
}

DrawBoard()

//Event listener waits for an input from the keyboard to insert it to the board, it has parameters to accept letters only.
document.addEventListener("keyup", (i) => {
  if (remainingGuesses === 0) {
    alert("you lost")
    return
  }

  let key = String(i.key)
  let Keysonly = key.match(/[a-z]/gi)

  //Detects if enter was pressed on the keyboard
  if (key === "Enter") {
    enterword()
  }
  //Detects if backspace was pressed on the keyboard and it's not pointing at index 0
  if (key === "Backspace" && nextLetter !== 0) {
    deleteKey()
    return
  }
  //Detects if letters a-z are pressed
  if (!Keysonly || Keysonly.length > 1) {
    return
  }
  else {
    insert(key)
  }
  console.log(guessCurrent)

})
//enterword function checks if you have less than 5 letters before before cheking it to the answer word. 
function enterword() {
  let inputWord = ""
  let row = document.getElementsByClassName("row")[6 - remainingGuesses]


  //Detects is the words has at least 5 words
  if (guessCurrent.length != 5) {
    console.log("you need more letters")
    alert("you need more letters")
    return
  }
  
  //Checks if the letter it's in the correct spot and if it's in the word
  for (let i = 0; i < 5; i++) {
    let box = row.children[i]
    let possition = word.indexOf(guessCurrent[i])
    if (guessCurrent[i] === word[i]) {
      box.style.backgroundColor = "green"
    }
    if(possition !== -1 && guessCurrent[i] !== word[i]){
      box.style.backgroundColor = "yellow"
    }

  }
  
  //creates a copy of the word you entered
  for (let i of guessCurrent) {
    inputWord += i
  }

  //checks if you got the correct word
  if (inputWord === word) {
    alert("You Won!!!")
    console.log("You Won!!!")
    return
  }
  else {
    remainingGuesses -= 1;
    guessCurrent = [];
    nextLetter = 0;
    console.log("It's not the correct word!!!")
    alert("It's not the correct word!!!")
  }
}

//Extended event listener to the onscreen keyboard to accpet intup for the board.
document.getElementById("keyboard").addEventListener("click", (i) => {
  let box = i.target
  let key = box.textContent
  if (key === "Delete" && guessCurrent != 1) {
    key = "Backspace"
  }
  document.dispatchEvent(new KeyboardEvent("keyup", { 'key': key }))
})

//delect fuction deletes the letters inside the board one by one.
function deleteKey() {
  let row = document.getElementsByClassName("row")[6 - remainingGuesses]
  let box = row.children[nextLetter - 1]
  box.textContent = ""
  box.classList.remove()
  guessCurrent.pop()
  nextLetter -= 1
}


//insert function takes in a letter from the keyboard and interts it into the board.
function insert(key) {
  if (nextLetter === 5) {
    return
  }
  key = key.toLowerCase()
  let row = document.getElementsByClassName("row")[6 - remainingGuesses]
  let box = row.children[nextLetter]
  box.textContent = key
  box.classList.add()
  guessCurrent.push(key)
  nextLetter += 1


}

const Board = () => {


  return (
    <div>
      <h1> </h1>
    </div>
  )

}



export default DrawBoard; 