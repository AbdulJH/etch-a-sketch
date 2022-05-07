const container = document.querySelector(".container");

function createGrid(rows, cols) {
  for (let i=0; i<(16*16); i++) {
    const div = document.createElement("div");
    div.style.cssText = "border: 1px solid black; height: 25px; width: 25px";
    container.appendChild(div);
  }

}
createGrid(8,8);


