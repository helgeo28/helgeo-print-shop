localStorage.setItem("favourite-display","[]");

let favItemArray = {
  a1: {
    name: `<h3>Long sleeves</h3><p>Gold Shirt</p>`,
    image: "Uniform/CategoryA/a1.jpg",
  },
  a2: {
    name: `<h3>Short sleeves</h3><p>Gold Shirt</p>`,
    image: "Uniform/CategoryA/a2.jpg",
  },
  a3: {
    name: `<h3>Jersey</h3><p>Black and gold</p>`,
    image: "Uniform/CategoryA/a3.jpg",
  },
  a4: {
    name: `<h3>Pullover</h3><p>Black and gold</p>`,
    image: "Uniform/CategoryA/a4.jpg",
  },
  a5: {
    name: `<h3>Trouser</h3><p>Black</p>`,
    image: "Uniform/CategoryA/a5.jpg",
  },
  a6: {
    name: `<h3>Socks</h3><p>Black</p>`,
    image: "Uniform/CategoryA/a6.jpg",
  },
  a7: {
    name: `<h3>School dress</h3><p>Gold</p>`,
    image: "Uniform/CategoryA/a7.jpg",
  },
  a8: {
    name: `<h3>Tracksuits</h3><p>Gold and black</p>`,
    image: "Uniform/CategoryA/a8.jpg",
  },
  b1: {
    name: `<h3>Long sleeves</h3><p>Royal purple Shirt</p>`,
    image: "Uniform/CategoryB/b1.jpg",
  },
  b2: {
    name: `<h3>Short sleeves</h3><p>Royal purple Shirt</p>`,
    image: "Uniform/CategoryB/b2.jpg",
  },
  b3: {
    name: `<h3>Jersey</h3><p>Grey</p>`,
    image: "Uniform/CategoryB/b3.jpg",
  },
  b4: {
    name: `<h3>Pullover</h3><p>Grey</p>`,
    image: "Uniform/CategoryB/b4.jpg",
  },
  b5: {
    name: `<h3>Trouser</h3><p>Grey</p>`,
    image: "Uniform/CategoryB/b5.jpg",
  },
  b6: {
    name: `<h3>Socks</h3><p>Grey</p>`,
    image: "Uniform/CategoryB/b6.webp",
  },
  b7: {
    name: `<h3>Sports wear</h3><p>Blue and gold</p>`,
    image: "Uniform/CategoryB/b7.jpg",
  },
  b8: {
    name: `<h3>Skirt</h3><p>Dark blue</p>`,
    image: "Uniform/CategoryB/b8.jpg",
  },
  c1: {
    name: `<h3>Long sleeves</h3><p>Grey shirt</p>`,
    image: "Uniform/CategoryC/c1.jpg",
  },
  c2: {
    name: `<h3>Short sleeves</h3><p>Grey shirt</p>`,
    image: "Uniform/CategoryC/c2.jpg",
  },
  c3: {
    name: `<h3>Jersey</h3><p>Maroon and gold</p>`,
    image: "Uniform/CategoryC/c3.jpg",
  },
  c4: {
    name: `<h3>Pullover</h3><p>Maroon and gold</p>`,
    image: "Uniform/CategoryC/c4.jpg",
  },
  c5: {
    name: `<h3>Trouser</h3><p>Grey</p>`,
    image: "Uniform/CategoryC/c5.jpg",
  },
  c6: {
    name: `<h3>Socks</h3><p>Maroon and gold</p>`,
    image: "Uniform/CategoryC/c6.jpg",
  },
  c7: {
    name: `<h3>Drimack</h3><p>Maroon</p>`,
    image: "Uniform/CategoryC/c7.jpg",
  },
  c8: {
    name: `<h3>Sports wear</h3><p>Maroon and gold</p>`,
    image: "Uniform/CategoryC/c8.jpg",
  },
  c9: {
    name: `<h3>School dress</h3><p>Maroon and gold</p>`,
    image: "Uniform/CategoryC/c9.jpg",
  },
  d1: {
    name: `<h3>Long sleeves</h3><p>Lightblue shirt</p>`,
    image: "Uniform/CategoryD/d1.jpg",
  },
  d2: {
    name: `<h3>Short sleeves</h3><p>Lightblue shirt</p>`,
    image: "Uniform/CategoryD/d2.jpg",
  },
  d3: {
    name: `<h3>Jersey</h3><p>Lightblue</p>`,
    image: "Uniform/CategoryD/d3.jpg",
  },
  d4: {
    name: `<h3>Pullover</h3><p>Lightblue</p>`,
    image: "Uniform/CategoryD/d4.jpg",
  },
  d5: {
    name: `<h3>Trouser</h3><p>Grey</p>`,
    image: "Uniform/CategoryD/d5.jpg",
  },
  d6: {
    name: `<h3>Socks</h3><p>Lightblue</p>`,
    image: "Uniform/CategoryD/d6.jpg",
  },
  d7: {
    name: `<h3>Skirt</h3><p>Lightblue</p>`,
    image: "Uniform/CategoryD/d7.jpg",
  },
  d8: {
    name: `<h3>Tracksuits</h3><p>Lightblue</p>`,
    image: "Uniform/CategoryD/d8.jpg",
  },
  e1: {
    name: `<h3>Long sleeves</h3><p>Gold shirt</p>`,
    image: "Uniform/CategoryE/e1.jpg",
  },
  e2: {
    name: `<h3>Short sleeves</h3><p>Gold shirt</p>`,
    image: "Uniform/CategoryE/e2.jpg",
  },
  e3: {
    name: `<h3>Jersey</h3><p>Green & yellow</p>`,
    image: "Uniform/CategoryE/e3.jpg",
  },
  e4: {
    name: `<h3>Pullover</h3><p>Green & yellow</p>`,
    image: "Uniform/CategoryE/e4.jpg",
  },
  e5: {
    name: `<h3>Trouser</h3><p>Grey</p>`,
    image: "Uniform/CategoryE/e5.jpg",
  },
  e6: {
    name: `<h3>Socks</h3><p>Green</p>`,
    image: "Uniform/CategoryE/e6.webp",
  },
  e7: {
    name: `<h3>Drimack</h3><p>Green</p>`,
    image: "Uniform/CategoryE/e7.jpg",
  },
  e8: {
    name: `<h3>Skirt</h3><p>Green</p>`,
    image: "Uniform/CategoryE/e8.jpg",
  },
  f1: {
    name: `<h3>Long sleeves</h3><p>White</p>`,
    image: "Uniform/CategoryF/f1.jpg",
  },
  f2: {
    name: `<h3>Short sleeves</h3><p>White</p>`,
    image: "Uniform/CategoryF/f2.jpg",
  },
  f3: {
    name: `<h3>Jersey</h3><p>Naivyblue</p>`,
    image: "Uniform/CategoryF/f3.jpg",
  },
  f4: {
    name: `<h3>Pullover</h3><p>Naivyblue</p>`,
    image: "Uniform/CategoryF/f4.jpg",
  },
  f5: {
    name: `<h3>Trouser</h3><p>Grey</p>`,
    image: "Uniform/CategoryF/f5.jpg",
  },
  f6: {
    name: `<h3>Socks</h3><p>Grey</p>`,
    image: "Uniform/CategoryF/f6.webp",
  },
  f7: {
    name: `<h3>Skirt</h3><p>Naivyblue</p>`,
    image: "Uniform/CategoryF/f7.jpg",
  },
  f8: {
    name: `<h3>Skirt</h3><p>Check</p>`,
    image: "Uniform/CategoryF/f8.jpg",
  },
  g1: {
    name: `<h3>T-shirt</h3><p>Green</p>`,
    image: "Uniform/CategoryG/g1.jpg",
  },
  g2: {
    name: `<h3>Jersey</h3><p>Green</p>`,
    image: "Uniform/CategoryG/g2.jpg",
  },
  g3: {
    name: `<h3>Pullover</h3><p>Green</p>`,
    image: "Uniform/CategoryG/g3.jpg",
  },
  g4: {
    name: `<h3>Sports wear</h3><p>Green & orange</p>`,
    image: "Uniform/CategoryG/g4.jpg",
  },
  g5: {
    name: `<h3>Shorts</h3><p>Green</p>`,
    image: "Uniform/CategoryG/g5.jpg",
  },
  g6: {
    name: `<h3>Drimack</h3><p>Green</p>`,
    image: "Uniform/CategoryG/g6.jpg",
  },
  g7: {
    name: `<h3>Trouser</h3><p>Grey</p>`,
    image: "Uniform/CategoryG/g7.jpg",
  },
  g8: {
    name: `<h3>Long socks</h3><p>Grey</p>`,
    image: "Uniform/CategoryG/g8.jpg",
  },
  g9: {
    name: `<h3>School dress</h3><p>Green & check</p>`,
    image: "Uniform/CategoryG/g9.jpg",
  },
  h1: {
    name: `<h3>Long sleeves</h3><p>White shirt</p>`,
    image: "Uniform/CategoryH/h1.jpg",
  },
  h2: {
    name: `<h3>Short sleeves</h3><p>White shirt</p>`,
    image: "Uniform/CategoryH/h2.jpg",
  },
  h3: {
    name: `<h3>Golf shirt - Boys</h3><p>Red</p>`,
    image: "Uniform/CategoryH/h3.jpg",
  },
  h4: {
    name: `<h3>Golf shirt - Girls</h3><p>Red</p>`,
    image: "Uniform/CategoryH/p.jpg",
  },
  h5: {
    name: `<h3>Jersey</h3><p>Naivyblue</p>`,
    image: "Uniform/CategoryH/h5.jpg",
  },
  h6: {
    name: `<h3>Pullover</h3><p>Naivyblue</p>`,
    image: "Uniform/CategoryH/h6.jpg",
  },
  h7: {
    name: `<h3>Trouser</h3><p>Naivyblue</p>`,
    image: "Uniform/CategoryH/h7.jpg",
  },
  h8: {
    name: `<h3>Long socks</h3><p>Naivyblue</p>`,
    image: "Uniform/CategoryH/h8.jpg",
  },
  h9: {
    name: `<h3>Skirt</h3><p>Check</p>`,
    image: "Uniform/CategoryH/h9.jpg",
  },
  h10: {
    name: `<h3>Short sleeves</h3><p>White & check</p>`,
    image: "Uniform/CategoryH/h10.jpg",
  },
  i1: {
    name: `<h3>Long sleeves</h3><p>White shirt</p>`,
    image: "Uniform/CategoryI/i1.jpg",
  },
  i2: {
    name: `<h3>Short sleeves</h3><p>White shirt</p>`,
    image: "Uniform/CategoryI/i2.jpg",
  },
  i3: {
    name: `<h3>Jersey</h3><p>Naivyblue</p>`,
    image: "Uniform/CategoryI/i3.jpg",
  },
  i4: {
    name: `<h3>Pullover</h3><p>Naivyblue</p>`,
    image: "Uniform/CategoryI/i4.jpg",
  },
  i5: {
    name: `<h3>Trouser</h3><p>Naivyblue</p>`,
    image: "Uniform/CategoryI/i5.jpg",
  },
  i6: {
    name: `<h3>Sports wear</h3><p>Naivyblue & white</p>`,
    image: "Uniform/CategoryI/i6.jpg",
  },
  i7: {
    name: `<h3>School dress</h3><p>Check</p>`,
    image: "Uniform/CategoryI/i7.jpg",
  },
  i8: {
    name: `<h3>Skirt</h3><p>Check</p>`,
    image: "Uniform/CategoryI/i8.jpg",
  },
  //Branding
  brand1: {
    name: `<h3>Gazebos and banners</p>`,
    image: "printing/GZ1.jpg",
  },
};

let addToFavourite = document.querySelectorAll(".unfilled-heart");
addToFavourite.forEach((button) => {
  button.addEventListener("click", addItemFav);
});
// Retrieve existing favorite items from localStorage or initialize an empty array
let favContent = JSON.parse(localStorage.getItem("favourite-display")) || [];

// ...

function addItemFav(event) {
  alert("Yes");
  let product = event.target.parentElement;
  let productId = product.getAttribute("data-id");
  let productName = favItemArray[productId].name;
  let productImage = favItemArray[productId].image;
  let favItem = {
    id: productId,
    name: productName,
    image: productImage,
  };

  // Push the new item into the existing favorite items array
  favContent.push(favItem);

  // Save the updated favorite items array back to localStorage
  localStorage.setItem("favourite-display", JSON.stringify(favContent));
}

  //   // Check if favContent already exists in localStorage
  //   let favContent = JSON.parse(localStorage.getItem("favourite-display")) || [];
  //   // Check if the item is already in the favContent
  //   let existingfavItemIndex = favContent.findIndex((item) => item.id === productId);

  //   if (existingfavItemIndex !== -1) {
  //     // If the item is already in the favContent, update its quantity
  //     alert("Item exist");
  //   } else {
  //     // Otherwise, add it to the favContent

  //     document.getElementById("favContent-count").innerHTML = favContent.length;
  //   }

  // Update the favContent in localStorage
  localStorage.setItem("favourite-display", JSON.stringify(favContent));
  document.getElementById("favContent-count").innerHTML = favContent.length;
  // Update the displayed favContent
  // alert(productId)
}

// function deleteFavouriteItem(favItemId) {
//   let favourite = JSON.parse(localStorage.getItem("favourite-items")) || [];

//   let itemIndex = favourite.findIndex((item) => item.id === favItemId);

//   if (itemIndex !== -1) {
//     favourite.splice(itemIndex, 1);
//   }

//   localStorage.setItem("favourite-items", JSON.stringify(favourite));
//   displayFavourite();
// }

// function displayFavourite() {
//   let favouriteContainer = document.getElementById("favourite-items");

//   let favourite = JSON.parse(localStorage.getItem("favourite-items")) || [];
//   favourite.forEach((item) => {
//     let favouriteItem = document.createElement("div");
//     favouriteItem.classList.add("favourite-item");
//     favouriteItem.style.backgroundImage = `url(${item.image})`;
//     let favouriteInfo = document.createElement("div");
//     favouriteInfo.classList.add("favourite-info");
//     favouriteInfo.innerHTML = `<div class="item-name">${item.name}</div>`;

//     let deleteButton = document.createElement("button");
//     deleteButton.setAttribute("class", "removeBtn");
//     deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i> Remove';
//     deleteButton.addEventListener("click", () => deleteFavouriteItem(item.id));

//     favouriteItem.appendChild(deleteButton);
//     favouriteItem.appendChild(favouriteInfo);
//     favouriteContainer.appendChild(favouriteItem);
//   });

//   let displayUser = document.querySelector(".display-user");
//   let noItem = document.querySelector(".no-item");

//   if (favourite.length === 0) {
//     displayUser.style.display = "none";
//     noItem.style.display = "flex";
//   } else {
//     displayUser.style.display = "flex";
//     noItem.style.display = "none";
//   }
// }

displayFavourite();
