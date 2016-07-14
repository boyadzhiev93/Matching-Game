"use strict";
var numberOfFaces = 3;
function generateFaces() {
    var   topPosition = Math.floor(Math.random()*401);
    var	leftPosition =  Math.floor(Math.random()*401);
    var	count = 0;
    var	theLeftSide = document.getElementById("leftSide");
    numberOfFaces += count;
    alert(numberOfFaces);
    while (count < numberOfFaces) {
        var createFace = document.createElement("img");
        createFace.src = "http://home.cse.ust.hk/~rossiter/mooc/matching_game/smile.png";
        createFace.style.top = topPosition + "px";
        createFace.style.left = leftPosition + "px";
        theLeftSide.appendChild(createFace);
        count++;
        topPosition = Math.floor(Math.random()*395);
        leftPosition =  Math.floor(Math.random()*395);
    }
    numberOfFaces += count
    count = 0
    var theRightSide = document.getElementById("rightSide"),
        cloneLeftSide = theLeftSide.cloneNode(true);
    cloneLeftSide.removeChild(cloneLeftSide.lastChild);
    theRightSide.appendChild(cloneLeftSide);

    var theBody = document.getElementsByTagName("body")[0];
    theBody.onclick = function gameOver() {
        alert("Game Over!");
        theBody.onclick = null;
        theLeftSide.lastChild.onclick = null;
    }
    theLeftSide.lastChild.onclick = function nextLevel(event){
        while (theLeftSide.firstChild) {
            theLeftSide.removeChild(theLeftSide.firstChild);
        }

        while (theRightSide.firstChild) {
            theRightSide.removeChild(theRightSide.firstChild);
        }
    event.stopPropagation();
    generateFaces();
  }
}
