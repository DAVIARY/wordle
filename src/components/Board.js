const GUESSES = 6;
let remainingGuesses = GUESSES;
let guessCurrent = [];
let nextLetter = 0;


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

  document.addEventListener("keyup", (i) =>{
    if(remainingGuesses ===0){
      return
    }

    let key = String(i.key)

  })

  function insert(key){
    if (nextLetter === 5) {
      return
    }
    key = key.toLowerCase()
    let row = document.getElementsByClassName("row")[6 - remainingGuesses]
    let box = row.children[nextLetter]
    box.textContent = key
    box.classList.add("box")
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