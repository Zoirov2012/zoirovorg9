"use strict";

const btn = document.querySelectorAll(".button");

const dsp = document.querySelector(".display");
let str = "";

btn?.forEach((b) => {
  b.addEventListener("click", (e) => {
    if (e.target.textContent === "=") {
      str = eval(str);
      dsp.value = str;
    } else if (e.target.textContent === "C") {
      str = "";
      dsp.value = str;
    } else if (e.target.textContent === "DE") {
      str = str.slice(0, str.length - 1);
      dsp.value = str;
    } else {
      str += e.target.textContent;
      dsp.value = str;
    }
  });
});
