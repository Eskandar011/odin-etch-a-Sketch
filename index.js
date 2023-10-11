let size = 16;
let color = "black";
const selectBtn = document.querySelector(".select");
const resetBtn = document.querySelector(".btn-reset");

selectBtn.addEventListener("click", () => {
 clearBoard();
 size = getSize();
 createBoard(size);
});

resetBtn.addEventListener("click", () => {
 clearBoard();
});

function getSize() {
 let size = prompt("Give size of board");
 return size === ""
  ? alert("You don't enter any value")
  : size < 0 || size > 100
  ? alert("Please enter a value between 1 to 100")
  : size;
}

function createBoard(size) {
 let board = document.querySelector(".board");
 const pMessage = document.querySelector("#message");
 if (pMessage) board.removeChild(pMessage);

 board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
 board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

 let numDivs = size * size;

 for (let i = 0; i < numDivs; i++) {
  let div = document.createElement("div");
  div.className = "pixel";
  div.addEventListener("mouseover", setColorDiv);
  board.insertAdjacentElement("beforeend", div);
 }
}

function clearBoard() {
 let pixels = document.querySelectorAll(".pixel");
 pixels.forEach((pixel) => (pixel.style.backgroundColor = "white"));
}

function setColorDiv() {
 if (color === "random") {
  this.style.backgroundColor = `hsla(${Math.random() * 360},100%,50%)`;
 } else {
  this.style.backgroundColor = "black";
 }
}

function setColor(colorChoice) {
 color = colorChoice;
}
