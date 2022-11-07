import { Rectangle, RectangleType } from "./rectangle.js";

const rectHeightInput = document.getElementById(
  "rect-height"
) as HTMLInputElement;
const rectWidthInput = document.getElementById(
  "rect-width"
) as HTMLInputElement;
const rectDrawButton = document.getElementById("btn-draw") as HTMLButtonElement;
const rectBoxDiv = document.getElementById("rect-box") as HTMLDivElement;

const rectangles: Rectangle[] = [];

rectDrawButton.addEventListener("click", () => {
  //height, width from the inputs
  const height = Number(rectHeightInput.value);
  const width = +rectWidthInput.value;
  const rect = new Rectangle(height, width);
  //create the box div:
  const rectDiv = document.createElement("div");
  rectDiv.style.backgroundColor = "blueviolet";
  rectDiv.style.width = `${width}px`;
  rectDiv.style.height = `${height}px`;
  rectDiv.innerText = rect.toString();

  rectDiv.addEventListener("click", () => {
    rectDiv.remove();
    //find the index of the current box in the rectnalges[] array
    let index = rectangles.findIndex((b) => b.timeStamp === rect.timeStamp);
    rectangles.splice(index, 1);
    localStorage.setItem("rectangles", JSON.stringify(rectangles));
  });
  //add the box div:
  rectBoxDiv.appendChild(rectDiv);
  rectangles.push(rect);
  localStorage.setItem("rectangles", JSON.stringify(rectangles));
});

function init() {
  //read the string from disk:
  const str = localStorage.getItem("rectangles") ?? "[]";

  //parse: convert string to Object literal array:
  const arrFromDisk: RectangleType[] = JSON.parse(str); //RectangleType[]

  //Rectangle Objects (NOT Literal)
  for (const o of arrFromDisk) {
    const rect = new Rectangle(o.width, o.height);
    rect.timeStamp = o.timeStamp;
    //rectangles.push(rect);
    //draw
     const rectDiv = document.createElement("div");
     rectDiv.style.backgroundColor = "blueviolet";
     rectDiv.style.width = `${o.width}px`;
     rectDiv.style.height = `${o.height}px`;
     rectDiv.innerText = rect.toString();

     rectDiv.addEventListener("click", () => {
       rectDiv.remove();
       //find the index of the current box in the rectnalges[] array
       let index = rectangles.findIndex((b) => b.timeStamp === rect.timeStamp);
       rectangles.splice(index, 1);
       localStorage.setItem("rectangles", JSON.stringify(rectangles));
     });
     //add the box div:
     rectBoxDiv.appendChild(rectDiv);
     rectangles.push(rect);
     localStorage.setItem("rectangles", JSON.stringify(rectangles));
  }
}

init();




