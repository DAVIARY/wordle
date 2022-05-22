const GUESSES = 6;
let remainingGuesses = GUESSES;


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

    pressedKey = String(i.key)
    
  })

  const Board = () => {
    
    
    return(
    <div>
          <h1> </h1>
    </div>
  )

  }



export default Board; 