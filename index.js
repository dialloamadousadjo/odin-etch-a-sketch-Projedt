const divButton = document.createElement("div");
divButton.style.display = "flex";
divButton.style.justifyContent = "center";
const buttonPopup = document.createElement("button");
buttonPopup.textContent = "CREATE A NEW GRID";
divButton.appendChild(buttonPopup);
buttonPopup.addEventListener("click", function () {
  let userPromptValue = parseInt(
    prompt("enter a number of square for the grid")
  );
  if (userPromptValue >= 1 && userPromptValue <= 100) {
    makegrid(userPromptValue);
  } else {
    prompt("Please enter a valid number!");
  }
});

document.body.appendChild(divButton);
let divContainer = document.createElement("div");
divContainer.style.width = "964px";
divContainer.style.height = "964px";
divContainer.style.display = "flex";
divContainer.style.flexWrap = "wrap";
divContainer.style.margin = "auto";
divContainer.id = "divContainer";

//Create the 16x16 grid
function makegrid(total) {
  const colDivSize = 964 / total - 1;
  //clear the existing grid
  divContainer.innerHTML = "";
  for (let row = 0; row < total; row++) {
    let rowDivs = document.createElement("div");

    rowDivs.style.display = "flex";
    rowDivs.style.flexGrow = "1";

    for (let col = 0; col < total; col++) {
      let colDivs = document.createElement("div");
      colDivs.style.display = "flex";
      colDivs.style.flexShrink = "1";

      colDivs.style.minWidth = colDivSize + "px";
      colDivs.style.minHeight = colDivSize + "px";
      colDivs.style.margin = "1px";

      colDivs.addEventListener("mouseenter", function () {
        changecolor(colDivs);
      });

      rowDivs.appendChild(colDivs);
    }

    divContainer.appendChild(rowDivs);
  }
  return document.body.appendChild(divContainer);
}

function changecolor(div) {
  return (div.style.backgroundColor = `rgb(${cellRandomColor()}, ${cellRandomColor()}, ${cellRandomColor()})`);
}

function cellRandomColor() {
  const randomcolor = Math.floor(Math.random() * 256);
  return randomcolor;
}
