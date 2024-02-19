
document.addEventListener('DOMContentLoaded',()=>{
    let squares = document.querySelectorAll('.square');

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })
})

function handleClick(event) {

    let square = event.target;
    let position = square.id;

    if (handleMove(position)) {
        setTimeout(()=> {
            alert("O jogo Acabou - O vencedor foi" + " " + playerTime + 
            "A sequência vencedora foi" + " " +winStates);
        }, 10);

    };    
    updateSquare(position);
    
}

function updateSquare(position){
    let square = document.getElementById(position.toString());

        let symbol = board[position];
        square.innerHTML = `<div class='${symbol}'></div>`
        
}

function resetGame() {
    let reset = document.getElementById('reset')
    reset.addEventListener("click",()=> {   
    board = ['','','','','','','','',''];
    playerTime = 0;
    gameOver = 0;       
    let squares = document.querySelectorAll('.o,.x');
         squares.forEach((square) => {
             square.classList.remove('o','x')
        })
    }) 
}

resetGame();
