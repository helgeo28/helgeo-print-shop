const textDetails = document.querySelectorAll(".text-title");
const textDIsplayTwo = document.querySelectorAll(".no_display");

const innerText = document.querySelectorAll(".text-paragraph");
const arrow = document.querySelectorAll(".text-title .fa");
//No display

textDetails.forEach((textDetails, index) => {
  textDetails.addEventListener("click", () => {
    innerText[index].style.display = "block";
    textDetails.style.display = "none";
    textDIsplayTwo[index].style.display = "block";
    // textDetails.classList.remove("text-title");
  });
});

textDIsplayTwo.forEach((textDIsplayTwo, indexNew) => {
  textDIsplayTwo.addEventListener("click", () => {
    innerText[indexNew].style.display = "none";
    textDetails[indexNew].style.display = "block";
    textDIsplayTwo.style.display = "none";
    // textDetails.classList.add("text-title");
  });
});

//Product items
const product_panel = document.querySelector(".products");

if (product_panel.childNodes.length > 4) {
  product_panel.style.marginBottom = "400px";
}
if (window.innerWidth <= 600) {
  product_panel.style.marginBottom = "0px";
}
