var pos = 0;
const pacArray = [
    ['./images/PacMan1.png', './images/PacMan2.png'],
    ['./images/PacMan3.png', './images/PacMan4.png'],
  ];

var direction = 0;
var focus = 0;
var PacManisMoving = false;
var IdMoving = 0;

function Run() {
    let img = document.getElementById("PacMan");
    let imgWidth = img.width
 
    focus = (focus + 1) % 2;
    direction = checkPageBounds(direction, imgWidth);
    img.src = pacArray[direction][focus];

    if (direction) {
        pos -= 20;
        img.style.left = pos + "px";
    } else {
        pos += 20;
        img.style.left = pos + 'px';
    }

    // Use setTimeout to call Run every 300 millesecs
    IdMoving = setTimeout(Run, 300);    
}


function CheckisRunning()
{
    clearTimeout(IdMoving);
 
}

function GetStarted()
{
    Run();

}

/* Reverse direction on hitting page bounds thiis function is call to check if the Pac Man has reached the 
screen edge. in this case I am assuiming the screen is 1,720 px wide. notice that I am not using any function to automatically measure the width of the
screen. */
function checkPageBounds(direction, imgWidth) {
       
    let img = document.getElementById("PacMan");
    let position = 0;
    position = parseInt(img.style.left);
    if (position >= 1720)
    {
        direction = 1
    }
    else if (position <= 0)
    {
        direction = 0;
    }
    return direction;
}