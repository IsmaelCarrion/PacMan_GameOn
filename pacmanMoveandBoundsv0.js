// pos is the PacMan image position variable- it is set to 0 initially
var pos = 0;
//pageWidth is the width of the webpage. This is later used to calculate when Pac-Man needs to turn around. 
let pageWidth = window.innerWidth;
//PacManisMoving is variable used to store the id of the setInterval
var PacManisMoving = true;
var IdMoving = 0;

//This array contains all the PacMan movement images
const pacArray = [
  ['./images/PacMan1.png', './images/PacMan2.png'],
  ['./images/PacMan3.png', './images/PacMan4.png'],
];

// this variable defines what direction should PacMan go into:
// 0 = left to right
// 1 = right to left (reverse)
var direction = 0;

// This variable helps determine which PacMan image should be displayed. It flips between values 0 and 1
var focus = 0;

// This function is called on mouse click. Every time it is called, it updates the PacMan image, position and direction on the screen.
function Run() {

  let img = document.getElementById('PacMan');
  let imgWidth = img.width;
  focus = (focus + 1) % 2;
  direction = checkPageBounds(direction, imgWidth, pos, pageWidth);
  img.src = pacArray[direction][focus];
  if (direction) {
    pos -= 20;
    img.style.left = pos + 'px';
  } else {
    pos += 20;
    img.style.left = pos + 'px';
  }
}

//controls if the Pac Mam moves or stop when clicked
function CheckisRunning()
{
  if (PacManisMoving)
  {
    PacManisMoving = false;
    clearInterval(IdMoving);
  }else if (!PacManisMoving)
  {
    PacManisMoving = true;
    IdMoving = setInterval(Run,300);
  }

}

IdMoving = setInterval(Run,300);

// This function determines the direction of PacMan based on screen edge detection. 
function checkPageBounds(direction, imgWidth, pos, pageWidth) {
  //
  // TODO: Complete this to reverse direction upon hitting screen edge
  //
    let limit = pageWidth-imgWidth;

    if ((pos >= limit) && (direction ==0))
    {
        direction = 1
    }
    else if ((pos <= 0) && (direction ==1))
    {
        direction = 0;
    }
    return direction;
}

function CheckisRunning()
{
    clearTimeout(IdMoving);
 
}

function GetStarted()
{
    Run();
    IdMoving = setInterval(Run,300);

}

