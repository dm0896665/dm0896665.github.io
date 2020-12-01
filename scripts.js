/*
	Name: Dylan Mackey
	Date: 11/30/2020
	Assignment: Great Race
	Filename: scripts.js
*/

/* Running Scripts */
var running;
var index1 = 0;
var index2 = 0;

document.getElementById('light').addEventListener('click', function()
{
    if(document.getElementById('light').src.match(/\w*red.png/))
    {
        document.getElementById('light').src = "green.png";

        running = setInterval(run, 5.5);
    }
});

function run()
{
    if(index1 < 1120)
    {
        index1 += Math.floor(Math.random() * 4);
        document.getElementById("r1").style.left =  index1 + "px";
    }
    else
    {
        clearInterval(running);
        var w;
        if(index1 > index2)
            w = 1;
        else
            w = 2;
        document.getElementById('r1').src = "blank.png";
        document.getElementById('r2').src = "blank.png";
        index1 = 0;
        index2 = 0;
        declareWinner(w);
    }
    if(index2 < 1120)
    {
        index2 += Math.floor(Math.random() * 4);
        document.getElementById("r2").style.left =  index2 + "px";
    }
    else
    {
        clearInterval(running);
        var w;
        if(index1 > index2)
            w = 1;
        else
            w = 2;
        document.getElementById('r1').src = "blank.png";
        document.getElementById('r2').src = "blank.png";
        index1 = 0;
        index2 = 0;
        declareWinner(w);
    }
}

function declareWinner(winner)
{
    if(winner == 1)
    {
        document.getElementById('winner').src = "1w.png";
        document.getElementById('loser').src = "2l.png";
    }
    else
    {
        document.getElementById('winner').src = "2w.png";
        document.getElementById('loser').src = "1l.png";
    }
}


document.getElementById('standings').addEventListener('click', function()
{
    if(document.getElementById('light').src.match(/\w*green.png/))
    {
        document.getElementById('light').src = "red.png";
        document.getElementById('winner').src = "winBlank.png";
        document.getElementById('loser').src = "loseBlank.png";
        document.getElementById('r1').src = "one.png";
        document.getElementById('r2').src = "two.png";
        document.getElementById("r1").style.left =  index1;
        document.getElementById("r2").style.left =  index2;
    }
});