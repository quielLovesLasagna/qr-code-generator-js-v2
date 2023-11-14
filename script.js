"use strict";

// ELEMENTS
const qrInput = document.querySelector(".input-box");
const imgContainer = document.querySelector(".img-container");
const qrImg = document.querySelector(".qr-img");
const generateBtn = document.querySelector(".btn-generate");
// END OF ELEMENTS

// FUNCTION

// generate qr
const generateQR = () => {
  if (qrInput.value.length > 0) {
    qrImg.setAttribute(
      "src",
      `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrInput.value}`
    );
    imgContainer.classList.add("show-img");
  } else {
    qrInput.classList.add("error");
    setTimeout(() => {
      qrInput.classList.remove("error");
    }, 1000);
  }
};

// END OF FUNCTION

// EVENT HANDLER
generateBtn.addEventListener("click", generateQR);
// END OF EVENT HANDLER
