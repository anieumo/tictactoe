function Player(marker) {
    this.marker = marker
}

const player1 = new Player("X");
const player2 = new Player("O");

const PlayerPlayarray = [];

const ComputerPlayarray = [];

const Gameboard = ["square0", "square1", "square2", "square3", "square4", "square5", "square6", "square7", "square8"];


function dynamicallycreateBoard() {
    var fragment = document.createDocumentFragment();
    var list = document.getElementById('displaycard');
    Gameboard.forEach((element, i) => {
        element = document.createElement('div');
        element.setAttribute('id', 'theDiv');
        element.style.cssText = 'background-color: white;';
        
        element.addEventListener('click', function() { 
            console.log(i);
            
            if (element.hasChildNodes()) {
                return false;       
            } else {
                const displaya = document.createTextNode(player1.marker);
                element.appendChild(displaya);
                PlayerPlayarray.push(i);
            }
            console.log("player array " + PlayerPlayarray);
            computerPlay();
            gameover();
            });
        fragment.appendChild(element)
        list.appendChild(fragment);
    });
};
dynamicallycreateBoard();


function computerPlay() {
    let spers = document.querySelectorAll('#theDiv');
    let spers_array = [...spers];
    let sper = spers_array[Math.floor(Math.random() * spers_array.length)];

    do {
        spers_array[Math.floor(Math.random() * spers_array.length)];
    }
    while (sper.hasChildNodes());

        console.log(spers_array.indexOf(sper));
        const displayb = document.createTextNode(player2.marker);
        sper.appendChild(displayb);
        ComputerPlayarray.push(spers_array.indexOf(sper));
        console.log("computer array " + ComputerPlayarray);
}

var combo1 = [0, 4, 8];
var combo2 = [2, 4, 6];
var combo3 = [0, 3, 6];
var combo4 = [1, 4, 7];
var combo5 = [2, 5, 8];
var combo6 = [0, 1, 2];
var combo7 = [3, 4, 5];
var combo8 = [6, 7, 8];
//test combo to see if code works// 
let comboarray2 = [0, 4, 8];

const winningCombo = [combo1, combo2, combo3, combo4, combo5, combo6, combo7, combo8];


function gameover() {
    let newarray = [];
    
    winningCombo.forEach((element, i) => {
    var newll = element.filter(x => PlayerPlayarray.includes(x));
    console.log(newll);
    newarray.push(newll)
    });
    console.log(newarray);
    newarray.forEach((element, i) => {
            if (newarray[i].length == 3) {
                let result = document.getElementById("result");
                result.innerHTML = "game over"
            } else {
                return false;
            }
    })
}



//this while loop is broken//