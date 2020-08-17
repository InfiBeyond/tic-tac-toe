// HTML elements
const statusDiv = document.querySelector(".status");
const resetDiv = document.querySelector(".reset");
const cellDivs = document.querySelectorAll(".game-cell");

// game variables
let gameIsLive = true;
let xIsNext = true;

// event Handlers
const handleReset = (e) => {

};
const handleCellClick = (e) => {
    const classList = e.target.classList;
    const location = classList[1];

    if(classList[2] == "x" || classList[2] == "o")
    {
        return;
    }
    if(xIsNext)
    {
        classList.add('x');
        xIsNext = !xIsNext;
    }
    else
    {
        classList.add('o');
        xIsNext = !xIsNext;
    }

};

// event listeners
resetDiv.addEventListener('click', handleReset);

for (const cellDiv of cellDivs){
    cellDiv.addEventListener('click', handleCellClick);
}


