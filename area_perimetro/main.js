const shape = document.querySelector(".shape");
const height = document.querySelector(".height");
const width = document.querySelector(".width");
const radius = document.querySelector(".radius");
const area = document.querySelector(".area");
const perimeter = document.querySelector(".perimeter");
const btn = document.querySelector(".solution");

function shape() {
  if (shape.value === "circle") {
    const areaValue = Math.PI * radius.value ** 2;
    const perimeterValue = 2 * Math.PI * radius.value;
    area.value = areaValue.toFixed(3);
    perimeter.value = perimeterValue.toFixed(3);
  } else if (shape.value === "square") {
    const areaValue = Math.PI * radius.value ** 2;
    const perimeterValue = 2 * Math.PI * radius.value;
    area.value = areaValue.toFixed(3);
    perimeter.value = perimeterValue.toFixed(3);
  }
}

btn.addEventListener("click", shape);
