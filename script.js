const boxes = document.querySelectorAll(".box");
let hsl = true;
let val0 = 0;
let val1 = 0;
let val2 = 0;
boxes.forEach((box) => {
  console.log("box_check");
});
// declare formatted color change
const copiedNotifier = document.querySelector(".return-formatted-color-copy");
const returnFormattedColor = document.querySelector("#return-formatted-color");
// return color
const returnColor = () => {
  if (hsl === true) {
    return `hsl(${val0},${val1}%,${val2}%)`
  } else {
    return `rgb(${val0},${val1},${val2})`
  }
};
// copy content to clipboard
returnFormattedColor.addEventListener("click", () => {
  returnFormattedColor.innerHTML = returnColor();
  navigator.clipboard.writeText(returnFormattedColor.innerHTML);
  copiedNotifier.style.display = "block";
  setTimeout(() => {
    copiedNotifier.style.display = "none";
  }, 1500);
  clearTimeout();
});
// values
const colorValue0 = document.querySelector("#input-0");
const colorValue1 = document.querySelector("#input-1");
const colorValue2 = document.querySelector("#input-2");
const colorValueName = document.querySelectorAll(".color-number")
// radio
const colorHsl = document.querySelector("#radio-hsl");
const colorRgb = document.querySelector("#radio-rgb");
// size
const containerHeight = document.querySelector("#setting-height");
const containerWidth = document.querySelector("#setting-width");
// check
console.log(colorValue0, colorValue1, colorValue2);
console.log(colorHsl, colorRgb);
console.log(containerHeight, containerWidth);

// declare switch color models functions
const setDefaultHSL = () => {
  colorValue0.value = "0";
  colorValue1.value = "100";
  colorValue2.value = "50";
  colorValue0.max = "360";
  colorValue1.max = "100";
  colorValue2.max = "100";
  colorValueName[0].innerHTML = "HUE&nbsp;&nbsp;&nbsp;&nbsp;"
  colorValueName[0].title = "HUE of colors (0-360)"
  colorValueName[1].innerHTML = "Satur.&nbsp;"
  colorValueName[1].title = "Saturation (0-100%)"
  colorValueName[2].innerHTML = "Light.&nbsp;"
  colorValueName[2].title = "Lightness (0-100%)"
  val0 = 0;
  val1 = 100;
  val2 = 50;
  hsl = true;
};
const setDefaultRGB = () => {
  colorValue0.value = "255";
  colorValue1.value = "0";
  colorValue2.value = "0";
  colorValue0.max = "255";
  colorValue1.max = "255";
  colorValue2.max = "255";
  colorValueName[0].innerHTML = "Red&nbsp;&nbsp;&nbsp;&nbsp;"
  colorValueName[0].title = "Red (0-255)"
  colorValueName[1].innerHTML = "Green&nbsp;&nbsp;"
  colorValueName[1].title = "Green (0-255)"
  colorValueName[2].innerHTML = "Blue&nbsp;&nbsp;&nbsp;"
  colorValueName[2].title = "Blue (0-255)"
  val0 = 255;
  val1 = 0;
  val2 = 0;
  hsl = false;
};

// detect changing color model
colorHsl.addEventListener("click", () => {
  setDefaultHSL();
  returnFormattedColor.innerHTML = returnColor();
});
colorRgb.addEventListener("click", () => {
  setDefaultRGB();
  returnFormattedColor.innerHTML = returnColor();
});

// detect changing color value
colorValue0.addEventListener("change", () => {
  val0 = colorValue0.value;
  returnFormattedColor.innerHTML = returnColor();
});
colorValue1.addEventListener("change", () => {
  val1 = colorValue1.value;
  returnFormattedColor.innerHTML = returnColor();
});
colorValue2.addEventListener("change", () => {
  val2 = colorValue2.value;
  returnFormattedColor.innerHTML = returnColor();
});

// declare iteration buttons
const color0Plus = document.querySelector("#plus-0");
const color1Plus = document.querySelector("#plus-1");
const color2Plus = document.querySelector("#plus-2");
const color0Minus = document.querySelector("#minus-0");
const color1Minus = document.querySelector("#minus-1");
const color2Minus = document.querySelector("#minus-2");

// declare size buttons
const paletteHeightPlus = document.querySelector("#height-plus");
const paletteWidthPlus = document.querySelector("#width-plus");
const paletteHeightMinus = document.querySelector("#height-minus");
const paletteWidthMinus = document.querySelector("#width-minus");

// declare force change event
const forceChangeEvent = new Event("change");

// plus/minus color value buttons functions
color0Plus.addEventListener("click", () => {
  colorValue0.stepUp();
  colorValue0.dispatchEvent(forceChangeEvent);
});
color1Plus.addEventListener("click", () => {
  colorValue1.stepUp();
  colorValue1.dispatchEvent(forceChangeEvent);
});
color2Plus.addEventListener("click", () => {
  colorValue2.stepUp();
  colorValue2.dispatchEvent(forceChangeEvent);
});
color0Minus.addEventListener("click", () => {
  colorValue0.stepDown();
  colorValue0.dispatchEvent(forceChangeEvent);
});
color1Minus.addEventListener("click", () => {
  colorValue1.stepDown();
  colorValue1.dispatchEvent(forceChangeEvent);
});
color2Minus.addEventListener("click", () => {
  colorValue2.stepDown();
  colorValue2.dispatchEvent(forceChangeEvent);
});

// plus/minus size buttons functions
paletteHeightPlus.addEventListener("click", () => {
  containerHeight.stepUp();
  containerHeight.dispatchEvent(forceChangeEvent);
});
paletteHeightMinus.addEventListener("click", () => {
  containerHeight.stepDown();
  containerHeight.dispatchEvent(forceChangeEvent);
});
paletteWidthPlus.addEventListener("click", () => {
  containerWidth.stepUp();
  containerWidth.dispatchEvent(forceChangeEvent);
});
paletteWidthMinus.addEventListener("click", () => {
  containerWidth.stepDown();
  containerWidth.dispatchEvent(forceChangeEvent);
});

containerHeight.addEventListener("change", () => {
  console.log(containerHeight.value); // eeeeeeee
});
containerWidth.addEventListener("change", () => {
  console.log(containerWidth.value); // eeeeeee
});

setDefaultHSL();
returnFormattedColor.innerHTML = returnColor();











/* 
function RGBToHSL(r, g, b) {
  // Make r, g, and b fractions of 1
  r /= 255;
  g /= 255;
  b /= 255;

  // Find greatest and smallest channel values
  let cmin = Math.min(r, g, b),
    cmax = Math.max(r, g, b),
    delta = cmax - cmin,
    h = 0,
    s = 0,
    l = 0;
  // Calculate hue
  // No difference
  if (delta == 0) h = 0;
  // Red is max
  else if (cmax == r) h = ((g - b) / delta) % 6;
  // Green is max
  else if (cmax == g) h = (b - r) / delta + 2;
  // Blue is max
  else h = (r - g) / delta + 4;

  h = Math.round(h * 60);

  // Make negative hues positive behind 360°
  if (h < 0) h += 360;
  // Calculate lightness
  l = (cmax + cmin) / 2;

  // Calculate saturation
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

  // Multiply l and s by 100
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  return "hsl(" + h + "," + s + "%," + l + "%)";
}

function HSLToRGB(h, s, l) {
  // Must be fractions of 1
  s /= 100;
  l /= 100;

  let c = (1 - Math.abs(2 * l - 1)) * s,
    x = c * (1 - Math.abs(((h / 60) % 2) - 1)),
    m = l - c / 2,
    r = 0,
    g = 0,
    b = 0;
  if (0 <= h && h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (60 <= h && h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (120 <= h && h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (180 <= h && h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (240 <= h && h < 300) {
    r = x;
    g = 0;
    b = c;
  } else if (300 <= h && h < 360) {
    r = c;
    g = 0;
    b = x;
  }
  r = Math.round((r + m) * 255);
  g = Math.round((g + m) * 255);
  b = Math.round((b + m) * 255);

  return "rgb(" + r + "," + g + "," + b + ")";
}
*/

// hsl and cmyk uses %
// todo:
// pick color by clicking
// change color and show info on hover
