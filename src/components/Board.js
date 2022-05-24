 const GUESSES = 6;
let remainingGuesses = GUESSES;
let guessCurrent = [];
let nextLetter = 0;

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
//Extended event listener to the onscreen keyboard to accpet intup for the board.
  document.getElementById("keyboard").addEventListener("click", (i) =>{
    let box = i.target
    let key = box.textContent
    if (key === "Del" && guessCurrent != 1){
      key = "Backspace"
    }
    document.dispatchEvent(new KeyboardEvent("keyup", {'key': key}))
  })

  //delect fuction deletes the letters inside the board one by one.
  function deleteKey(){
    let row = document.getElementsByClassName("row")[6 - remainingGuesses]
    let box = row.children[nextLetter - 1]
    box. textContent = ""
    box.classList.remove("F-box")
    guessCurrent.pop()
    nextLetter -=1
  }



  function insert(key){
    if (nextLetter === 5) {
      return
    }
    key = key.toLowerCase()
    let row = document.getElementsByClassName("row")[6 - remainingGuesses]
    let box = row.children[nextLetter]
    box.textContent = key
    box.classList.add("F-box")
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