var colors = ["black", "gray", "white", "red", "orange", "yellow","lime", "green", "blue","teal", "indigo", "violet"];
var currentColor = "black";

var canvas = document.getElementById("canvas");
for (yPos = 0; yPos < 12; yPos++) {
   let rowSection = document.createElement("section");
   for (xPos = 0; xPos < 12; xPos++) {
       let pixelDiv = document.createElement("div");
       pixelDiv.classList.add("pixel");
       pixelDiv.addEventListener("click", paintPixel);
       rowSection.appendChild(pixelDiv);
   }
   canvas.appendChild(rowSection);
}

var paletteContainer = document.createElement("div");
paletteContainer.id = "paletteContainer";
paletteContainer.style.border = "5px solid black";
for (xPos = 0; xPos < colors.length; xPos++) {
   let paletteDiv = document.createElement("div");
   paletteDiv.id = colors[xPos];
   paletteDiv.classList.add("paletteDiv");
   paletteDiv.style.backgroundColor = colors[xPos];
   paletteDiv.addEventListener("click", changeColor);
   paletteContainer.appendChild(paletteDiv);
}
canvas.appendChild(paletteContainer);

function paintPixel(event) {
   event.target.style.backgroundColor = currentColor;
}

function changeColor(event) {
   currentColor = event.target.style.backgroundColor;
   document.querySelectorAll(".paletteDiv").forEach(p => {
       p.classList.remove("selected");
   });
   this.classList.add("selected");
   paletteContainer.style.border = `5px solid ${currentColor}`;
}



var paragraph = document.createElement("p");
paragraph.innerText = "Press button to wipe screen";
paragraph.style.color = "Green";
document.body.appendChild(paragraph);

var button = document.createElement("input");
button.addEventListener("click", buttonClick);
button.type = "button";
button.value = "Click Me";
document.body.appendChild(button);

function buttonClick(event) {
   let allPixelsObject = document.querySelectorAll(".pixel");

   for (p = 0; p < allPixelsObject.length; p++) {
       allPixelsObject[p].style.backgroundColor = "white";
   }

   allPixelsObject.forEach(function (p) {
       p.style.backgroundColor = "white";
   });
   allPixelsObject.forEach(p => {
       p.style.backgroundColor = "white";
   });
}