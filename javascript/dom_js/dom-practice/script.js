//                                                                         //
//# JavaScript DOM Selection using getElementById(), getElementsByTagName(), getElementsByClassName()
// const fullPage = document.getElementsByTagName("body")[0];
// fullPage.style.backgroundColor = "#FDF6F0";

// const header = document.getElementById("judul");
// header.style.color = "white";
// header.style.backgroundColor = "#F5C6AA";
// header.style.textAlign = "center";

// const container = document.getElementById("container");
// container.style.backgroundColor = "#F8E2CF";

// const main = document.getElementById("main");
// main.style.backgroundColor = "#FDF6F0";

// const allPar = main.getElementsByTagName("p");
// for (let i = 0; i < allPar.length; i++) {
//   allPar[i].style.textAlign = "center";
//   allPar[i].innerHTML = `Paragraf percobaan ke-${i + 1}`;
// }
// for (par of allPar) {
//   par.style.backgroundColor = "#DAEAF1";
// }

// const aside = document.getElementById("aside");
// aside.style.backgroundColor = "#FDF6F0";

// const p4 = container.getElementsByTagName("p")[3];
// p4.innerHTML = "Paragraf terpisah ke-4";
// p4.setAttribute("class", "textCenter");
// p4.classList.add("plasmaGreen");

// const anchor = aside.getElementsByTagName("a")[0];
// anchor.getAttribute("href"); //: "http://instagram.com/sandhikagalih"
// anchor.setAttribute("href", "http://instagram.com");

// anchor.style.display = "block";
// anchor.setAttribute("class", "link");
// anchor.classList.replace("link", "textCenter");
// anchor.classList.add("bgColor");
// anchor.classList.contains("bgColor"); //: true
// anchor.classList.contains("link"); //: false
// anchor.classList.item(0); //: "textCenter"

// const itemList = aside.getElementsByTagName("ul")[0];
// itemList.style.backgroundColor = "#CDBBA7";
// itemList.setAttribute("class", "textCenter");

// const allItems = itemList.getElementsByTagName("li");
// for (i = 0; i < allItems.length; i++) {
//   allItems[i].innerHTML = `Item list ke-${i + 1}`;
// }

// const item1 = itemList.getElementsByTagName("li")[0];
// item1.classList.toggle("color3");

// const item2 = itemList.getElementsByTagName("li")[1];
// item2.classList.toggle("color2");

// const item3 = itemList.getElementsByTagName("li")[2];
// item3.classList.toggle("color1");

//                                                                         //
//# JavaScript DOM Selection using querySelector()

// const header = document.querySelector("h1#judul");
// header.style.backgroundColor = "#71C9CE";
// header.style.color = "white";
// header.innerHTML = "JavaScript DOM Practice";
// header.style.textAlign = "center";

// const container = document.querySelector("#container");
// container.style.backgroundColor = "#E3FDFD";

// const main = container.querySelector("#main");
// main.style.backgroundColor = "#A6E3E9";

// const mainPar = main.querySelectorAll("p");
// for (let i = 0; i < mainPar.length; i += 1) {
//   mainPar[i].style.backgroundColor = "#CBF1F5";
//   mainPar[i].style.textAlign = "center";
//   mainPar[i].innerHTML = `Percobaan paragraf ke-${i + 1}`;
// }

// const aside = container.querySelector("#aside");
// aside.style.backgroundColor = "#A6E3E9";

// const asidePar = aside.querySelectorAll("p")[0];
// asidePar.style.backgroundColor = "#CBF1F5";
// asidePar.innerHTML = "Percobaan Aside Paragraf";
// asidePar.style.textAlign = "center";

// const asideLink = aside.querySelectorAll("a")[0];
// asideLink.style.backgroundColor = "#E3FDFD";
// asideLink.style.color = "black";
// asideLink.style.display = "block";
// asideLink.style.textAlign = "center";

// const asideList = aside.querySelector("ul");
// asideList.style.backgroundColor = "#E3FDFD";

// const listItems = asideList.querySelectorAll("li");
// for (let i = 0; i < listItems.length; i++) {
//   listItems[i].style.backgroundColor = "#08D9D6";
// }
// for (list of listItems) {
//   list.innerHTML = "Percobaan list item";
//   list.style.textAlign = "center";
// }

//                                                                        //
//# DOM Selection & DOM Manipulation

// const body = document.getElementsByTagName("body")[0];
// body.classList.add("bgColor");

// const mainHeader = document.getElementById("judul");
// mainHeader.classList.add("color1", "textCenter");
// mainHeader.innerHTML = "JS DOM Practice";

// const container = document.getElementById("container");

// const mainContent = document.getElementById("main");

// //* Adding new <p>> element in the document
// const mainParNew = document.createElement("p");
// //* Adding text into the element <p>
// // const mainParNewText = document.createTextNode("Paragraf percobaan ke-4");
// // mainParNew.appendChild(mainParNewText);
// //* Adding the <p> element into the mainContent
// mainContent.appendChild(mainParNew);

// //* Main paragraph
// const mainPar = mainContent.getElementsByTagName("p");

// for (let i = 0; i < mainPar.length; i++) {
//   mainPar[i].innerHTML = `Paragraf percobaan ke-${i + 1}`;
// }

// for (par of mainPar) {
//   par.classList.add("color1", "textCenter");
// }

// //* Removing anchor element in the mainContent
// const removedLink = mainContent.getElementsByTagName("a")[0];
// mainContent.removeChild(removedLink);

// const asideContent = document.getElementById("aside");

// //* Replacing the <p> element with header2
// const asidePar = asideContent.getElementsByTagName("p")[0];
// const asideHeader = document.createElement("h2");
// const asideHeaderText = document.createTextNode("Header Baru pada Aside");
// asideHeader.appendChild(asideHeaderText);
// asideContent.replaceChild(asideHeader, asidePar);

// //* Aside Header
// asideHeader.classList.add("textCenter", "color1");

// //* uList
// const uList = asideContent.getElementsByClassName("nav")[0];

// //*Adding the <a> element to the asideContent
// const newLink = document.createElement("a");
// const newLinkText = document.createTextNode("Anchor baru pada Aside");
// newLink.appendChild(newLinkText);
// asideContent.insertBefore(newLink, uList);

// //* newLink
// newLink.setAttribute("href", "https://www.instagram.com/");
// newLink.style.display = "block";
// newLink.classList.add("textCenter", "color2");

// //* listItem
// const listItems = uList.getElementsByTagName("li");

// for (let i = 0; i < listItems.length; i++) {
//   listItems[i].innerHTML = `List item ke-${i + 1}`;
// }

// for (items of listItems) {
//   items.classList.add("textCenter", "color1");
// }

// //* Adding new listItem
// const listItem2 = uList.querySelector("li:nth-child(2");

// const newListItem = document.createElement("li");
// const newListItemText = document.createTextNode("List baru diantara list lain");
// newListItem.appendChild(newListItemText);
// uList.insertBefore(newListItem, listItem2);
// newListItem.classList.add("textCenter", "color2");

//                                                                        //
//# Implementation of DOM Selection, Manipulation, and Event Listener

// //* Body
// document.body.classList.add("bgColor");

// //* Main Header
// let mainHeader = document.getElementById("judul");
// mainHeader.classList.add("textCenter", "color1");
// mainHeader.innerText = "JavaScript DOM";

// //* Container
// let container = document.getElementById("container");

// //* Main Content
// let mainContent = document.getElementById("main");
// mainContent.classList.add("textCenter");

// //* Random color regenerate function
// const randomColor = function () {
//   const r = Math.floor(Math.random() * 255);
//   const g = Math.floor(Math.random() * 255);
//   const b = Math.floor(Math.random() * 255);
//   return `rgb(${r}, ${g}, ${b})`;
// };

// //* Regenerate color button
// let colorButton = document.createElement("button");
// colorButton.append("Regenerate random color!");
// mainContent.insertAdjacentElement("afterbegin", colorButton);

// //* Event handler for random color generate
// colorButton.addEventListener("click", () => {
//   const newColor = randomColor();
//   colorButton.style.backgroundColor = newColor;

//   //# Another way
//   // const r = Math.round(Math.random() * 255);
//   // const g = Math.round(Math.random() * 255);
//   // const b = Math.round(Math.random() * 255);
//   // Notes: Choose one option to input the return of random color
//   // colorButton.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
//   // colorButton.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
// });

// //* Main Paragraph
// let mainPar = mainContent.getElementsByTagName("p");
// for (let i = 0; i < mainPar.length; i++) {
//   mainPar[i].classList.add("textCenter");
//   mainPar[i].innerText = `Lorem ipsum dolor sit amet consectetur! - ${i + 1}`;
// }

// //* Removed anchor in Main Content
// let removedLink = mainContent.getElementsByTagName("a")[0];
// removedLink.remove();

// //* Aside Content
// let asideContent = document.getElementById("aside");
// asideContent.classList.add("textCenter");

// //* New Header in Aside Content
// let newHeader = document.createElement("h2");
// newHeader.append("Header Manipulation");
// newHeader.classList.add("color1");

// //* Replaced Paragraph in Aside Content
// let removedPar = asideContent.getElementsByTagName("p")[0];
// removedPar.replaceWith(newHeader);

// //* List Container
// let listContainer = asideContent.getElementsByTagName("ul")[0];
// listContainer.style.listStyle = "none";

// //* List Item
// let listItems = listContainer.getElementsByTagName("li");

// //* Regenerate button Red
// let buttonRed = document.createElement("button");
// let buttonTextRed = document.createTextNode("Regenerate Red item");
// buttonRed.appendChild(buttonTextRed);
// buttonRed.setAttribute("type", "button");

// asideContent.insertBefore(buttonRed, listContainer);

// //* Regenerate button Blur
// let buttonBlue = document.createElement("button");
// let buttonTextBlue = document.createTextNode("Regenerate Blue item");
// buttonBlue.appendChild(buttonTextBlue);
// buttonBlue.setAttribute("type", "button");

// asideContent.insertBefore(buttonBlue, buttonRed);

// //* Regenerate Red item function
// function newRedItem() {
//   let newItems = document.createElement("li");
//   newItems.append("Manipulated Red Item");
//   newItems.style.backgroundColor = "#EB455F";
//   newItems.style.color = "white";
//   listContainer.appendChild(newItems);
// }

// //* Regenerate Blue item function
// function newBlueItem() {
//   let newItems = document.createElement("li");
//   newItems.append("Manipulated Blue Item");
//   newItems.style.backgroundColor = "#2B3467";
//   newItems.style.color = "white";
//   listContainer.appendChild(newItems);
// }

// //* Event handler for regenerate new items
// // Notes: If you use the separate function for addEventListener take a note that the function expression cannot be used
// buttonRed.addEventListener("click", newRedItem);

// buttonBlue.addEventListener("click", newBlueItem);

//                                                                        //
//# Implementation of DOM Selection, Manipulation, and Event Listener

//# Body setting
document.body.classList.add("bgColor");

//# Main Header
const mainHeader = document.getElementById("judul");
mainHeader.classList.add("textCenter", "color1");
mainHeader.innerText = "JS DOM Manipulation";

//# Main Content
const mainContent = document.getElementById("main");
mainContent.classList.add("textCenter");

//* Generate Paragraph Button
const newParBtn = document.createElement("a");
newParBtn.append("Generate Paragraph");
newParBtn.setAttribute("class", "button");
newParBtn.style.display = "block";
mainContent.insertAdjacentElement("afterbegin", newParBtn);

//* Unmanipulated Paragraph
const unmanipulatedPar = mainContent.getElementsByClassName("p1")[0];
unmanipulatedPar.innerText = "Unmanipulated Paragraph";

//* Generate new paragraph
newParBtn.addEventListener("click", () => {
  const newPar = document.createElement("p");
  newPar.append("New Paragraph");

  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);
  newPar.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  mainContent.appendChild(newPar);

  const colorValue = r + g + b;
  if (colorValue < 300) {
    newPar.style.color = "white";
  } else {
    newPar.style.color = "black";
  }
});

//* Removing the Anchor in Main Content
const removedAnchor = document.getElementById("removedLink");
removedAnchor.remove();

//# Aside Content
const asideContent = document.getElementById("aside");
asideContent.classList.add("textCenter");

//* Aside Header
const asideHeader = document.createElement("h2");
asideHeader.append("Aside Header");

//* Replacing the Paragraph
const replacedPar = asideContent.getElementsByTagName("p")[0];
replacedPar.replaceWith(asideHeader);

//# Adding new Color Custom Container
const colorNav = document.createElement("div");
const colorNavPar = document.createElement("p");
colorNavPar.append("Custom the Header Color!");
colorNavPar.classList.add("noSpace");
colorNav.classList.add("colorNav");

//* Navigation control for coloring the Aside Header
for (let i = 0; i < 3; i++) {
  const colorSlider = document.createElement("input");
  colorSlider.setAttribute("type", "range");
  colorSlider.setAttribute("min", "0");
  colorSlider.setAttribute("max", "255");
  colorNav.appendChild(colorSlider);
}

//* Event Listener for the slider
const colorNavValue = colorNav.querySelectorAll("input");

for (let i = 0; i < colorNavValue.length; i++) {
  colorNavValue[i].addEventListener("input", function () {
    const r = colorNavValue[0].value;
    const g = colorNavValue[1].value;
    const b = colorNavValue[2].value;

    asideHeader.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

    if (r > 150 || g > 150 || b > 150) {
      asideHeader.style.color = "black";
    } else {
      asideHeader.style.color = "white";
    }
  });
}

colorNav.insertAdjacentElement("afterbegin", colorNavPar);
asideHeader.insertAdjacentElement("afterend", colorNav);

//# Adding notes to the Aside Content
const notesListContainer = document.createElement("form");

const notesListPar = document.createElement("p");
notesListPar.innerText = "Take a notes here!";
notesListPar.classList.add("noSpace");

const notesListInput = document.createElement("input");
notesListInput.classList.add("notesInput");

const notesListSubmitBtn = document.createElement("button");
notesListSubmitBtn.innerText = "Submit";
notesListSubmitBtn.classList.add("submitBtn");

notesListContainer.insertAdjacentElement("afterbegin", notesListPar);
notesListPar.after(notesListInput);
notesListInput.after(notesListSubmitBtn);
colorNav.insertAdjacentElement("afterend", notesListContainer);

//* Adding event handling to the container
notesListContainer.addEventListener("click", (clicked) => {
  if (clicked.target.className == "submitBtn") {
    const notesListItem = document.createElement("li");
    notesListItem.classList.add("notesList");
    notesListItem.style.listStyle = "none";
    notesListItem.append(notesListInput.value);

    if (notesListInput.value == "") {
      alert("Please input the notes!");
    } else {
      const removeBtn = document.createElement("span");
      removeBtn.classList.add("noSpace", "removeBtn");
      removeBtn.append("x");
      notesListItem.appendChild(removeBtn);
      removeBtn.style.visibility = "hidden";

      notesListContainer.appendChild(notesListItem);
    }

    notesListInput.value = "";
    clicked.preventDefault();
  }
});

notesListContainer.addEventListener("mouseover", (hoveredItem) => {
  if (hoveredItem.target.classList.contains("notesList")) {
    const removeBtn = hoveredItem.target.querySelector(".removeBtn");
    if (removeBtn) {
      removeBtn.style.visibility = "visible";
    }
  }
});

let removeBtnTimeout;

notesListContainer.addEventListener("mouseout", (hoveredItem) => {
  if (hoveredItem.target.classList.contains("notesList")) {
    removeBtnTimeout = setTimeout(() => {
      const removeBtn = hoveredItem.target.querySelector(".removeBtn");
      if (removeBtn) {
        removeBtn.style.visibility = "hidden";
      }
    }, 1000); // Adjust the timeout duration as needed (in milliseconds)
  }
});

notesListContainer.addEventListener("click", (clicked) => {
  if (clicked.target.classList.contains("removeBtn")) {
    const notesListItem = clicked.target.parentElement;
    notesListItem.remove();
  }
});

//# List Container
const listContainer = document.getElementsByClassName("nav")[0];
const listContainerPar = document.createElement("p");
listContainerPar.append("Add new list!");
listContainerPar.classList.add("noSpace");

listContainer.style.listStyle = "none";

//* Adding Dark button
const itemDarkBtn = document.createElement("a");
itemDarkBtn.append("Add Dark Item");
itemDarkBtn.classList.add("button");
itemDarkBtn.style.padding = "8px";
itemDarkBtn.style.margin = "8px";

//* Adding Light button
const itemLightBtn = document.createElement("a");
itemLightBtn.append("Add Light Item");
itemLightBtn.classList.add("button");
itemLightBtn.style.padding = "8px";
itemLightBtn.style.margin = "8px";

listContainer.insertAdjacentElement("afterbegin", listContainerPar);
listContainerPar.after(itemDarkBtn);
itemDarkBtn.after(itemLightBtn);

//* Event Listener for add new item
itemDarkBtn.addEventListener("click", () => {
  const newItem = document.createElement("li");
  newItem.append("New Dark Item");
  listContainer.appendChild(newItem);

  const r = Math.round(Math.random() * 80);
  const g = Math.round(Math.random() * 80);
  const b = Math.round(Math.random() * 80);

  newItem.style.color = "white";
  newItem.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

itemLightBtn.addEventListener("click", () => {
  const newItem = document.createElement("li");
  newItem.append("New Light Item");
  listContainer.appendChild(newItem);

  const r = Math.ceil(Math.random() * (255 - 220) + 220);
  const g = Math.ceil(Math.random() * (255 - 220) + 220);
  const b = Math.ceil(Math.random() * (255 - 220) + 220);

  newItem.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});
