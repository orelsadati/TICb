var block_0 = document.getElementById("block_0");
var block_1 = document.getElementById("block_1");
var block_2 = document.getElementById("block_2");
var block_3 = document.getElementById("block_3");
var block_4 = document.getElementById("block_4");
var block_5 = document.getElementById("block_5");
var block_6 = document.getElementById("block_6");
var block_7 = document.getElementById("block_7");
var block_8 = document.getElementById("block_8");

var buttonRestart = document.getElementById("restart");

var winnerX = document.getElementById("winnerX");
var winnerO = document.getElementById("winnerO");
var flag = 0;
/* x = 0;*/
/* o = 1;*/

var CounterTurn = 0;

var CounterWinX = 0;
var CounterWinO = 0;

buttonRestart.addEventListener("click", () => {
    RestartGame();
});

block_0.addEventListener("click", () => {

    if(block_0.innerHTML == ""){

        if(flag==0){
        block_0.innerHTML ="X";
        flag =1;
        CounterTurn++;
        
        Check_winnerX();
        }
        else{
            block_0.innerHTML ="O";
            flag = 0;
            CounterTurn++;

            Check_winnerO();
        }
        CheckDraw()
    }
});

block_1.addEventListener("click", () => {

    if(block_1.innerHTML == ""){

        if(flag==0){
        block_1.innerHTML ="X";
        flag =1;
        CounterTurn++;

        Check_winnerX();
        }
        else{
            block_1.innerHTML ="O";
            flag = 0;
            CounterTurn++;

            Check_winnerO();
        }
        CheckDraw()
    }

});

block_2.addEventListener("click", () => {

    if(block_2.innerHTML == ""){

        if(flag==0){
        block_2.innerHTML ="X";
        flag =1;
        CounterTurn++;

        Check_winnerX();
        }
        else{
            block_2.innerHTML ="O";
            flag = 0;
            CounterTurn++;

            Check_winnerO();
        }
        CheckDraw()
    }

});

block_3.addEventListener("click", () => {

    if(block_3.innerHTML == ""){

        if(flag==0){
        block_3.innerHTML ="X";
        flag =1;
        CounterTurn++;

        Check_winnerX();
        }
        else{
            block_3.innerHTML ="O";
            flag = 0;
            CounterTurn++;

            Check_winnerO();
        }
        CheckDraw()
    }

});

block_4.addEventListener("click", () => {

    if(block_4.innerHTML == ""){

        if(flag==0){
        block_4.innerHTML ="X";
        flag =1;
        CounterTurn++;

        Check_winnerX();
        }
        else{
            block_4.innerHTML ="O";
            flag = 0;
            CounterTurn++;

            Check_winnerO();
        }
        CheckDraw()
    }

});

block_5.addEventListener("click", () => {
    if(block_5.innerHTML == ""){

        if(flag==0){
        block_5.innerHTML ="X";
        flag =1;
        CounterTurn++;

        Check_winnerX();
        }
        else{
            block_5.innerHTML ="O";
            flag = 0;
            CounterTurn++;

            Check_winnerO();
        }
        CheckDraw()
    }

});

block_6.addEventListener("click", () => {

    if(block_6.innerHTML == ""){

        if(flag==0){
        block_6.innerHTML ="X";
        flag =1;
        CounterTurn++;

        Check_winnerX();
        }
        else{
            block_6.innerHTML ="O";
            flag = 0;
            CounterTurn++;

            Check_winnerO();
        }
        CheckDraw()
    }

});

block_7.addEventListener("click", () => {

    if(block_7.innerHTML == ""){

        if(flag==0){
        block_7.innerHTML ="X";
        flag =1;
        CounterTurn++;

        Check_winnerX();
        }
        else{
            block_7.innerHTML ="O";
            flag = 0;
            CounterTurn++;

            Check_winnerO();
        }
        CheckDraw()
    }

});

block_8.addEventListener("click", () => {

    if(block_8.innerHTML == ""){

        if(flag==0){
        block_8.innerHTML ="X";
        flag =1;
        CounterTurn++;

        Check_winnerX();
        }
        else{
            block_8.innerHTML ="O";
            flag = 0;
            CounterTurn++;

            Check_winnerO();
        }
        CheckDraw()

     
    }

});

function Check_winnerX()
{
    if(block_0.innerHTML == block_1.innerHTML && block_0.innerHTML == block_2.innerHTML && block_0.innerHTML=="X" )
    {
        CounterWinX++;
        winnerX.innerHTML = "WinnerX: " + CounterWinX;
        alert("the winner is X");
        RestartGame()
    }

    if(block_3.innerHTML == block_4.innerHTML && block_3.innerHTML == block_5.innerHTML && block_3.innerHTML=="X" )
    {
        CounterWinX++;
        winnerX.innerHTML = "WinnerX: " + CounterWinX;
        alert("the winner is X");
        RestartGame()
    }

    if(block_6.innerHTML == block_7.innerHTML && block_6.innerHTML == block_8.innerHTML && block_6.innerHTML=="X" )
    {
        CounterWinX++;
        winnerX.innerHTML = "WinnerX: " + CounterWinX;
        alert("the winner is X");
        RestartGame()
    }

    if(block_0.innerHTML == block_3.innerHTML && block_0.innerHTML == block_6.innerHTML && block_0.innerHTML=="X" )
    {
        CounterWinX++;
        winnerX.innerHTML = "WinnerX: " + CounterWinX;
        alert("the winner is X");
        RestartGame()
    }

    if(block_1.innerHTML == block_4.innerHTML && block_1.innerHTML == block_7.innerHTML && block_1.innerHTML=="X" )
    {
        CounterWinX++;
        winnerX.innerHTML = "WinnerX: " + CounterWinX;
        alert("the winner is X");
        RestartGame()
    }

    if(block_2.innerHTML == block_5.innerHTML && block_2.innerHTML == block_8.innerHTML && block_2.innerHTML=="X" )
    {
        CounterWinX++;
        winnerX.innerHTML = "WinnerX: " + CounterWinX;
        alert("the winner is X");
        RestartGame()
    }

    if(block_0.innerHTML == block_4.innerHTML && block_0.innerHTML == block_8.innerHTML && block_0.innerHTML=="X" )
    {
        CounterWinX++;
        winnerX.innerHTML = "WinnerX: " + CounterWinX;
        alert("the winner is X");
        RestartGame()
    }

    if(block_2.innerHTML == block_4.innerHTML && block_2.innerHTML == block_6.innerHTML && block_2.innerHTML=="X" )
    {
        CounterWinX++;
        winnerX.innerHTML = "WinnerX: " + CounterWinX;
        alert("the winner is X");
        RestartGame()
    }

}

function Check_winnerO()
{
    if(block_0.innerHTML == block_1.innerHTML && block_0.innerHTML == block_2.innerHTML && block_0.innerHTML=="O" )
    {
        CounterWinO++;
        winnerO.innerHTML = "WinnerO: " + CounterWinO;
        alert("the winner is O");
        RestartGame()
    }

    if(block_3.innerHTML == block_4.innerHTML && block_3.innerHTML == block_5.innerHTML && block_3.innerHTML=="O" )
    {
        CounterWinO++;
        winnerO.innerHTML = "WinnerO: " + CounterWinO;
        alert("the winner is O");
        RestartGame()
    }

    if(block_6.innerHTML == block_7.innerHTML && block_6.innerHTML == block_8.innerHTML && block_6.innerHTML=="O" )
    {
        CounterWinO++;
        winnerO.innerHTML = "WinnerO: " + CounterWinO;
        alert("the winner is O");
        RestartGame()
    }

    if(block_0.innerHTML == block_3.innerHTML && block_0.innerHTML == block_6.innerHTML && block_0.innerHTML=="O" )
    {
        CounterWinO++;
        winnerO.innerHTML = "WinnerO: " + CounterWinO;
        alert("the winner is O");
        RestartGame()
    }

    if(block_1.innerHTML == block_4.innerHTML && block_1.innerHTML == block_7.innerHTML && block_1.innerHTML=="O" )
    {
        CounterWinO++;
        winnerO.innerHTML = "WinnerO: " + CounterWinO;
        alert("the winner is O");
        RestartGame()
    }

    if(block_2.innerHTML == block_5.innerHTML && block_2.innerHTML == block_8.innerHTML && block_2.innerHTML=="O" )
    {
        CounterWinO++;
        winnerO.innerHTML = "WinnerO: " + CounterWinO;
        alert("the winner is O");
        RestartGame()
    }

    if(block_0.innerHTML == block_4.innerHTML && block_0.innerHTML == block_8.innerHTML && block_0.innerHTML=="O" )
    {
        CounterWinO++;
        winnerO.innerHTML = "WinnerO: " + CounterWinO;
        alert("the winner is O");
        RestartGame()
    }

    if(block_2.innerHTML == block_4.innerHTML && block_2.innerHTML == block_6.innerHTML && block_2.innerHTML=="O" )
    {
        CounterWinO++;
        winnerO.innerHTML = "WinnerO: " + CounterWinO;
        alert("the winner is O");
        RestartGame()
    }
}

function CheckDraw()
{
    if(CounterTurn == 9){

        alert("its draw!");
        RestartGame()
    }

}

function RestartGame()
{
   flag = 0;
   CounterTurn=0;
    block_0.innerHTML= "";
    block_1.innerHTML= "";
    block_2.innerHTML= "";
    block_3.innerHTML= "";
    block_4.innerHTML= "";
    block_5.innerHTML= "";
    block_6.innerHTML= "";
    block_7.innerHTML= "";
    block_8.innerHTML= "";

}