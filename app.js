//write function that appends either an x or an o to the board

//toggling works
let initGame = function(){
   addListeners(function(result) {
       return checkIfWon(result);
   });
} 

let addListeners = function(callback){
    let amountClicks = 0;
    let currentToggled = [];
    for(var i=0; i<9; i++){
        document.getElementsByTagName("TD")[i].addEventListener("click", function(){
            if(amountClicks % 2 === 0){
                this.innerHTML = "X";
                amountClicks++;
            }
            else{
                this.innerHTML = "O";
                amountClicks++;
            }
            currentToggled.push([this.parentNode.rowIndex, this.cellIndex, this.innerHTML]);
            if(callback(currentToggled)){
                alert("You won");
            }
        })
    }
}
// //returns a boolean value on whether or not there is a winner on each click (Will be placed in initgame inside click handlers)
let checkIfWon = function(toggled){
    let winner = false;
    let negativeDiagonal = []
    let positiveDiagonal = []
    let h1 = []
    let h2 = []
    let h3 = [] 
    let v1 = []
    let v2 = [] 
    let v3 = []
    //needs to be three or more things in the array in order to have a win
    if(toggled.length > 2){
        //start by creating a counter

        for(var i=0; i<toggled.length; i++){
            for(var j=0; j<3; j++){
                if(toggled[i][0] === j && toggled[i][1] === j){
                    positiveDiagonal.push(toggled[i][2]);
                }
            }
            let count = 0
            for(var j=2; j>=0; j--){
                if(toggled[i][0] === j && toggled[i][1] === count){
                    negativeDiagonal.push(toggled[i][2]);
                }
                count++;
            }
            if(toggled[i][0] === 0){
                h1.push(toggled[i][2]);
            }
            if(toggled[i][0] === 1){
                h2.push(toggled[i][2]);
            }
            if(toggled[i][0] === 2){
                h3.push(toggled[i][2]);
            }
            if(toggled[i][1] === 0){
                v1.push(toggled[i][2]);
            }
            if(toggled[i][1] === 1){
                v2.push(toggled[i][2]);
            }
            if(toggled[i][1] === 2){
                v3.push(toggled[i][2]);
            }
        }
    }
    function checkIfSameValues(array){
        let valueCount = 0;

        for(var i=0; i<array.length; i++){
            if(array[i] === 'X'){
                valueCount++;
            }
        }

        return valueCount;
        console.log(valueCount);
    }
    console.log('v1', v1, 'v2', v2, 'v3', v3, 'h1', h1, 'h2', h2, 'h3', h3, 'negativeDiagonal', negativeDiagonal, 'positiveDiagonal', positiveDiagonal);
    let awesomeArray = [negativeDiagonal, positiveDiagonal, h1, h2, h3, v1, v2, v3];
    for(var i=0; i<awesomeArray.length; i++){
        console.log("Checking", checkIfSameValues(awesomeArray[i]));
        if(checkIfSameValues(awesomeArray[i]) === 3){
            winner = true;
            break;
        }
    }
    return winner;
}
//yeahhhhhhhhhhh first try
initGame();
