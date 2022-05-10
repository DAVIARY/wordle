function Board(){
    let board = document.getElementById("board");
    for(let i=0; i < 6; i++){
      let row = document.createElement("div")
      row.className="row"
      for(let u=0; u < 5; u++){
        let box = document.createElement("div")
        box.className = "letter-Box"
        row.appendChild(box);
      }
      
      board.appendChild(row)
    }
    
  } 