// HTML elements
const statusDiv = document.querySelector(".status");
const resetDiv = document.querySelector(".reset");
const cellDivs = document.querySelectorAll(".game-cell");

// game variables
let gameIsLive = true;
let xIsNext = true;

// functions
const checkGameStatus = () => {
    const topLeft = cellDivs[0].classList[2];
    const topMiddle = cellDivs[1].classList[2];
    const topRight = cellDivs[2].classList[2];
    const middleLeft = cellDivs[3].classList[2];
    const middleMiddle = cellDivs[4].classList[2];
    const middleRight = cellDivs[5].classList[2];
    const bottomLeft = cellDivs[6].classList[2];
    const bottomMiddle = cellDivs[7].classList[2];
    const bottomRight = cellDivs[8].classList[2];
};

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
        checkGameStatus();
    }
    else
    {
        classList.add('o');
        xIsNext = !xIsNext;
        checkGameStatus();
    }

};

// event listeners
resetDiv.addEventListener('click', handleReset);

for (const cellDiv of cellDivs){
    cellDiv.addEventListener('click', handleCellClick);
}


