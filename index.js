let divContainer = document.createElement("div");
divContainer.style.maxWidth = "800px";
divContainer.style.maxHeight = "800px";
divContainer.style.backgroundColor = "red";
divContainer.style.display = "flex";
divContainer.style.flexWrap = "wrap";
divContainer.style.margin = "auto";

for (let row = 0; row < 16; row++) {
  let rowDivs = document.createElement("div");

  rowDivs.style.display = "flex";
  rowDivs.style.flexGrow = "1";

  for (let col = 0; col < 16; col++) {
    let colDivs = document.createElement("div");
    colDivs.style.display = "flex";
    colDivs.style.flexGrow = "1";

    colDivs.style.width = "40px";
    colDivs.style.height = "40px";
    colDivs.style.backgroundColor = "black";
    colDivs.style.margin = "1px";
    rowDivs.appendChild(colDivs);
  }

  divContainer.appendChild(rowDivs);
}
document.body.appendChild(divContainer);
