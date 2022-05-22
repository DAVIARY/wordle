function DrawBoard(){
    let board = document.getElementById("board");
    
    for(let i=0; i < 6; i++){
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

  const Board = () => {
    
    
    return(
    <div>
          <h1> </h1>
    </div>
  )

  }



export default Board; 