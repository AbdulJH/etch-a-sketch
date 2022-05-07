const container = document.querySelector(".container");


function createGrid(rows, cols) {
  for (let i=0; i<(16*16); i++) {
    let div = document.createElement("div");
    div.style.cssText = "border: 1px solid black; height: 25px; width: 25px;";
    div.addEventListener("mouseover", function() {
      div.style.backgroundColor = randomColor();
    });
    container.appendChild(div);
    
  }
}
function randomColor() {
  const color = Math.floor(Math.random() * 16777216).toString(16);
  return '#000000'.slice(0, -color.length) + color;

}

createGrid(8,8);


