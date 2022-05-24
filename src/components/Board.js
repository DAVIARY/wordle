 const GUESSES = 6;
let remainingGuesses = GUESSES;
let guessCurrent = [];
let nextLetter = 0;
let word = "react";

//DrawBoard intiazies the board with the number of guesses with 5 letter words
function DrawBoard(){
    let board = document.getElementById("board");
    
    for(let i=0; i < GUESSES; i++){
      let row = document.createElement("div")
      row.className="row"
      
      for(let u=0; u < 5; u++){
        let box = document.createElement("div")
        box.className = "box"
        row.appendChild(box);
      }
      
      board.appendChild(row) 
    }  
  }

  DrawBoard()

  //Event listener waits for an input from the keyboard to insert it to the board, it has parameters to accept letters only.
  document.addEventListener("keyup", (i) =>{
    if(remainingGuesses === 0){
      return
    }

    let key = String(i.key)
    let Keysonly = key.match(/[a-z]/gi)
    
    if(key === "Enter"){
      enterword()
    }
    
    if(key === "Backspace" && nextLetter!==0 ){
      deleteKey()
      return
    }
    
    if(!Keysonly || Keysonly.length > 1){
      return
    }
    else{
      insert(key)
    }
    console.log(guessCurrent)

  })

function enterword(){
  let correctword = ""
  
  if(guessCurrent.length != 5){
    console.log("you need more letters")
    return
  }
for(const i of guessCurrent){
  correctword += i
}
  if(correctword === word){
    console.log(guessCurrent.toString)
    console.log("you won!!!")
    return
  }
}

//Extended event listener to the onscreen keyboard to accpet intup for the board.
  document.getElementById("keyboard").addEventListener("click", (i) =>{
    let box = i.target
    let key = box.textContent
    if (key === "Delete" && guessCurrent != 1){
      key = "Backspace"
    }
    document.dispatchEvent(new KeyboardEvent("keyup", {'key': key}))
  })

  //delect fuction deletes the letters inside the board one by one.
  function deleteKey(){
    let row = document.getElementsByClassName("row")[6 - remainingGuesses]
    let box = row.children[nextLetter - 1]
    box. textContent = ""
    box.classList.remove("previous-box")
    guessCurrent.pop()
    nextLetter -=1
  }


//insert function takes in a letter from the keyboard and interts it into the board.
  function insert(key){
    if (nextLetter === 5) {
      return
    }
    key = key.toLowerCase()
    let row = document.getElementsByClassName("row")[6 - remainingGuesses]
    let box = row.children[nextLetter]
    box.textContent = key
    box.classList.add("previous-box")
    guessCurrent.push(key)
    nextLetter +=1


  }

  const Board = () => {
    
    
    return(
    <div>
          <h1> </h1>
    </div>
  )

  }



export default Board; 