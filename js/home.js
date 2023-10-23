let homeSlide = document.querySelector(".home_slide_image");
const homeSlideArray = ["css/H1.jpg", "css/H2.jpg", "css/H3.jpg"];

for (let i = 0; i < homeSlideArray.length; i++) {
  const dots = document.createElement("div");
  dots.setAttribute("class", "dots");
  homeSlide.append(dots);
}

let countNew = 0;
// let countNew = Math.floor(Math.random() * homeSlideArray.length);
homeSlide.style.backgroundImage = `url(${homeSlideArray[countNew]})`;
const dotsItems = document.querySelectorAll(".dots");

function dot() {
  homeSlide.style.backgroundImage = `url(${homeSlideArray[countNew]})`;
  if (countNew > homeSlideArray.length - 1) {
    countNew = 0;
  }
  for (let i = 0; i < dotsItems.length; i++) {
    dotsItems[i].classList.remove("active");
  }
  dotsItems[countNew].classList.add("active");
  homeSlide.style.backgroundImage = `url(${homeSlideArray[countNew]})`;
}

function changeImages() {
  countNew++;

  // countNew = Math.floor(Math.random() * homeSlideArray.length)
  dot();
}
setInterval(changeImages, 2500);

//horizontal scrolling

function items_list() {
  const itemsArray = [
    "printing/GZ1.jpg",
    "printing/GZ7.jpg",
    "printing/GZ8.jpg",
    "printing/SP1.jpg",
    "printing/SP2.jpg",
    "printing/SP3.jpg",
    "printing/HD1.jpg",
    "printing/HD2.jpg",
    "printing/HD3.jpg",
    "printing/SU1.jpg",
    "printing/SU1B.jpg",
    "printing/SU2.jpg",
    "printing/JS1.jpg",
    "printing/JS2.jpg",
    "printing/JS3.jpg",
    "printing/em1.jpg",
    "printing/em2.jpg",
    "printing/em3.jpg",
    "printing/wk1.jpg",
    "printing/wk2.jpg",
    "printing/wk3.jpg",
    "printing/sb1.webp",
    "printing/sb2.png",
    "printing/sb3.webp",
    "printing/vn1.png",
    "printing/vn2.jpg",
    "printing/vn3.jpg",
  ];
  const horizontalScroller = document.querySelector(".horizontal-scrolling");
  horizontalScroller.style.transition = "1s";
  horizontalScroller.style.position = "absolute";
  horizontalScroller.style.display = "flex";
  horizontalScroller.style.overflowX = "auto"; // Add overflowX property for horizontal scrolling
  horizontalScroller.style.width = `${itemsArray.length * 300}px`; // Ensure the container expands to the available width

  for (let i = 0; i < itemsArray.length; i++) {
    const items = document.createElement("div");
    items.style.width = "300px";
    items.style.height = "300px";
    items.style.marginRight = "10px";
    items.style.background = `orange`;
    items.style.backgroundImage = `url(${itemsArray[i]})`;
    items.style.backgroundSize = `cover`;
    items.style.backgroundPosition = `center`;
    items.style.backgroundRepeat = `no-repeat`;
    items.style.display = "inline-block"; // Display items in a row

    horizontalScroller.appendChild(items);
  }
  counting = 0;
  document.querySelector("#counter_no").innerHTML = counting;
  document.querySelector(".l").addEventListener("click", () => {
    counting -= 300;
    horizontalScroller.style.left = `${counting}px`;
    if (counting < -6600) {
      counting = -6600;
      horizontalScroller.style.left = `${counting}px`;
    }
    if (window.innerWidth <= 600) {
      if (counting < -7500) {
        counting = -7500;
        horizontalScroller.style.left = `${counting}px`;
      }
    }
    // document.querySelector("#counter_no").innerHTML = counting;
  });
  document.querySelector(".r").addEventListener("click", () => {
    counting += 300;
    horizontalScroller.style.left = `${counting}px`;
    if (counting >= 0) {
      counting = 0;
      horizontalScroller.style.left = `${counting}px`;
    }
    // document.querySelector("#counter_no").innerHTML = counting;
  });
}

items_list();
