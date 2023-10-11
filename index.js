let size = 16;

const selectBtn = document.querySelector(".select");
selectBtn.addEventListener("click", () => {
 size = getSize();
 createBoard(size);
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
 board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
 board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

 let numDivs = size * size;

 for (let i = 0; i < numDivs; i++) {
  let div = document.createElement("div");
  board.insertAdjacentElement("beforeend", div);
 }
}
