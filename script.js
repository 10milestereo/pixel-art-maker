let sWidth = 60;
let sHeight = 50;
var test = 0;
let currentColor = "black";
let tempAvg = "";
let anotherTest = "";
let testImageData = "";
let testObj = {};
let randomChooser = false;
let over = false;
function callBack(event) {
  if (randomChooser == true) {
    tc = randomColor();
    event.srcElement.setAttribute("fill", `rgb(${tc[0]}, ${tc[1]}, ${tc[2]})`);
  } else {
    event.srcElement.setAttribute("fill", currentColor);
  }
}
function setOver() {
  let tempCanvas = document.getElementById("canvas");
  console.log(over);
  if (over == false) {
    tempCanvas.setAttribute("onmouseover", "callBack(event)");
    tempCanvas.setAttribute("onclick", "");
    over = true;
  } else {
    tempCanvas.setAttribute("onclick", "callBack(event)");
    tempCanvas.setAttribute("onmouseover", "");
    over = false;
  }
}
function pickerCallBack(event) {
  if (event.toElement.tagName == "circle") {
    currentColor = event.srcElement.getAttribute("fill");
  }
  test = event;
}
function randomColor() {
  let array1 = [0, 0, 0];

  let map = array1.map(x => Math.floor(Math.random() * 255));

  return map;
}
function randomPattern(start, end) {
  tempSvg = document.getElementById("canvas").children;
  for (let index in tempSvg) {
    tc = randomColor();

    tempSvg[index].setAttribute("fill", `rgb(${tc[0]}, ${tc[1]}, ${tc[2]})`);
  }
}
function setRandom() {
  if (randomChooser == true) {
    randomChooser = false;
  } else {
    randomChooser = true;
  }
}
function dImage() {
  let c = document.getElementById("myCanvas");
  let ctx = c.getContext("2d");
  let img = document.getElementById("goomba");
  ctx.drawImage(img, 0, 0);
}
function average_function() {
  let canvas = document.getElementById("myCanvas");
  let ctx2 = canvas.getContext("2d");
  let imageData = ctx2.getImageData(0, 0, 300, 300).data;
  testImageData = imageData;
  console.log(imageData);
  // let temp_average = colorAverage(imageData);

  // let rects = document.getElementById("canvas").children;
  // tmpAvg = temp_average;
  // for (let key in temp_average) {
  //   let temp_index = key.split(",").map(x => Number(x));
  //   let index = temp_index[1] * 40 + temp_index[0];

  //   // rects[index].setAttribute("fill", `rgb(${temp_average[key].join(",")})`);
  //   rects[index].setAttribute("fill", "black");
  // }
}
function feedback(event) {
  console.log(event.clientX, event.clientY);
}
function gradient() {
  let tc = [0, 0, 0];
  tempSvg = document.getElementById("canvas").children;
  for (let index in tempSvg) {
    if (tc[0] < 255) {
      tc[0] += 1;
    } else if (tc[1] < 255) {
      tc[1] += 1;
    } else if (tc[2] < 255) {
      tc[2] += 1;
    } else {
      tc = [0, 0, 0];
    }
    tempSvg[index].setAttribute("fill", `rgb(${tc[0]}, ${tc[1]}, ${tc[2]})`);
  }
}

function colorAverage(image_array) {
  let width = 300;
  let height = 300;
  let accObj = {};

  for (let i = 0; i < image_array.length; i++) {
    let row = Math.floor(i / (width * 4));
    let col = Math.floor(i - row * width * 4);
    let pixel = Math.floor(col / 4);
    let section = [Math.floor(pixel / 10), Math.floor(row / 10)];

    if (section in accObj) {
      accObj[section].push(image_array[i]);
    } else {
      accObj[section] = [image_array[i]];
    }
  }
  testObj = accObj;

  let newObj = {};
  for (let key in accObj) {
    let rgb = [0, 0, 0];
    let sect = accObj[key];
    for (let i = 0; i < sect.length; i++) {
      let ind = i - Math.floor(i / 4) * 4;

      if (ind != 3) {
        rgb[ind] += sect[i];
      }
    }
    avgRGB = rgb.map(x => Math.floor(x / 100));
    newObj[key] = avgRGB;
  }
  return newObj;
}

document.addEventListener("DOMContentLoaded", function() {
  var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", "600");
  svg.setAttribute("height", "500");
  let body = document.getElementsByTagName("body");
  for (let row = 0; row < sHeight; row++) {
    for (let col = 0; col < sWidth; col++) {
      let temp_node = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "rect"
      );
      temp_node.setAttributeNS(null, "x", col * 10);
      temp_node.setAttributeNS(null, "y", row * 10);
      temp_node.setAttributeNS(null, "width", "10");
      temp_node.setAttributeNS(null, "height", "10");
      temp_node.setAttributeNS(null, "fill", "white");
      temp_node.setAttributeNS(null, "stroke", currentColor);
      svg.appendChild(temp_node);
    }
  }
  console.log(svg);
  svg.setAttribute("onmousedown", "callBack(event)");
  svg.setAttribute("id", "canvas");
  container = document.getElementById("container");
  container.appendChild(svg);

  var picker = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  picker.setAttribute("width", "600");
  picker.setAttribute("height", "20");
  let colors = [
    "AliceBlue",
    "Aquamarine",
    "LightCyan",
    "DeepPink",
    "SkyBlue",
    "Cornsilk",
    "BurlyWood",
    "Olive",
    "OldLace",
    "DarkViolet",
    "DarkGrey",
    "DarkOliveGreen",
    "LightCyan",
    "MediumSlateBlue",
    "Peru"
  ];
  for (let i = 0; i < colors.length; i++) {
    let color = colors[i];
    //           <svg height="100" width="100">
    //   <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
    // </svg>
    let temp_node = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    temp_node.setAttributeNS(null, "cx", i * 20 + 10);
    temp_node.setAttributeNS(null, "cy", 10);
    temp_node.setAttributeNS(null, "r", 10);
    temp_node.setAttributeNS(null, "fill", color);
    picker.appendChild(temp_node);
  }
  picker.setAttribute("onclick", "pickerCallBack(event)");
  container.appendChild(picker);
  dImage();

  let tempElement = document.getElementById("myCanvas");
  tempElement.style.display = "None";
});
