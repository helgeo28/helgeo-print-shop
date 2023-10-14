import * as itemLIst from "./content.js";

function getItems(UniformItems, TextItem) {
  let productID;
  if (UniformItems === itemLIst.uniform_A) {
    productID = "a";
  }
  if (UniformItems === itemLIst.uniform_B) {
    productID = "b";
  }

  if (UniformItems === itemLIst.uniform_C) {
    productID = "c";
  }
  if (UniformItems === itemLIst.uniform_D) {
    productID = "d";
  }
  if (UniformItems === itemLIst.uniform_E) {
    productID = "e";
  }
  if (UniformItems === itemLIst.uniform_F) {
    productID = "f";
  }
  if (UniformItems === itemLIst.uniform_G) {
    productID = "g";
  }
  if (UniformItems === itemLIst.uniform_H) {
    productID = "h";
  }
  if (UniformItems === itemLIst.uniform_I) {
    productID = "i";
  }
  return UniformItems.forEach((UniformItems, index) => {
    const borderHolder = document.createElement("div");
    borderHolder.setAttribute("class", "borderHolder");
    borderHolder.setAttribute("data-id", `${productID}${index + 1}`);
    const container = document.getElementById("category");
    borderHolder.innerHTML = `
    <div class='unfilled'>
    <i class='fa-regular fa-heart unfilled-heart'></i>
    </div>
    <div class='filled'> <i class="fa-solid fa-heart filled-heart"></i></div>
            <div class="item-description">${TextItem[index]}</div>
            <button class="add-to-cart add"><i class="fa-solid fa-cart-plus"></i> Add item
            <div class="loadersAdd">
                <div class="loader"></div>
                <h1 class="count">
                     <span class="count-up"></span>
                 </h1>
            </div>
            </button>
            `;
    borderHolder.style.backgroundImage = `url(${UniformItems})`;
    borderHolder.style.backgroundPositionY = `10px`;
    // text
    container.appendChild(borderHolder);

    /*
    let unfilled = document.querySelectorAll(".unfilled");
    let filled = document.querySelectorAll(".filled");

    unfilled.forEach((unfilled, index) => {
      unfilled.style.transition = ".5s";
      filled[index].style.transition = ".5s";
      unfilled.addEventListener("click", () => {
        unfilled.style.transform = "scale(2.5) rotate(360deg)";
        setTimeout(() => {
          unfilled.style.display = "none";
          filled[index].style.display = "block";
          filled[index].style.transform = "scale(2.5)";
          setTimeout(() => {
            filled[index].style.transform = "scale(1) rotate(0deg)";
          }, 200);
        }, 500);
      });
    });

    filled.forEach((filled, index) => {
      filled.style.transition = ".5s";
      unfilled[index].style.transition = ".5s";
      filled.addEventListener("click", () => {
        filled.style.transform = "scale(2.5) rotate(360deg)";
        setTimeout(() => {
          filled.style.display = "none";
          unfilled[index].style.display = "block";
          unfilled[index].style.transform = "scale(2.5)";
          setTimeout(() => {
            unfilled[index].style.transform = "scale(1) rotate(0deg)";
          }, 200);
        }, 500);
      });
    });
    //end
    */

    /*
Start
*/
    let unfilled = document.querySelectorAll(".unfilled");
    let filled = document.querySelectorAll(".filled");

    // Function to save styles to local storage
    function saveStylesToLocalStorage() {
      // Create an array to store the styles
      const stylesArray = [];

      unfilled.forEach((unfilled) => {
        unfilled.style.transition = ".5s";
        const styles = {
          transition: unfilled.style.transition,
          transform: unfilled.style.transform,
          display: unfilled.style.display,
        };
        stylesArray.push(styles);
      });

      filled.forEach((filled) => {
        filled.style.transition = ".5s";
        const styles = {
          transition: filled.style.transition,
          transform: filled.style.transform,
          display: filled.style.display,
        };
        stylesArray.push(styles);
      });

      // Serialize the styles array to JSON and store it in local storage
      localStorage.setItem("elementStyles", JSON.stringify(stylesArray));
    }

    // Function to load styles from local storage
    function loadStylesFromLocalStorage() {
      // Retrieve the serialized styles array from local storage
      const serializedStyles = localStorage.getItem("elementStyles");

      if (serializedStyles) {
        const stylesArray = JSON.parse(serializedStyles);
        unfilled.forEach((unfilled) => {
          const styles = stylesArray.shift();
          if (styles) {
            unfilled.style.transition = styles.transition;
            unfilled.style.transform = styles.transform;
            unfilled.style.display = styles.display;
          }
        });

        filled.forEach((filled) => {
          const styles = stylesArray.shift();
          if (styles) {
            filled.style.transition = styles.transition;
            filled.style.transform = styles.transform;
            filled.style.display = styles.display;
          }
        });
      }
    }

    // Add click event listeners to the elements
    unfilled.forEach((unfilled, index) => {
      unfilled.style.transition = "1s";
      unfilled.addEventListener("click", () => {
        // Your existing code to modify the element's style
        unfilled.style.transform = "scale(2.5) rotate(360deg)";
        setTimeout(() => {
          unfilled.style.display = "none";
          filled[index].style.display = "block";
          filled[index].style.transform = "scale(2.5)";
          setTimeout(() => {
            filled[index].style.transform = "scale(1)";
            unfilled.style.transform = "scale(1)";
            // Save the updated styles to local storage
            saveStylesToLocalStorage();
          }, 500);
        }, 500);
      });
    });

    filled.forEach((filled, index) => {
      filled.style.transition = "1s";
      filled.addEventListener("click", () => {
        // Your existing code to modify the element's style
        filled.style.transform = "scale(2.5) rotate(360deg)";
        setTimeout(() => {
          filled.style.display = "none";
          unfilled[index].style.display = "block";
          unfilled[index].style.transform = "scale(2.5)";
          setTimeout(() => {
            unfilled[index].style.transform = "scale(1)";
            filled.style.transform = "scale(1)";
            // Save the updated styles to local storage
            saveStylesToLocalStorage();
          }, 500);
        }, 500);
      });
    });

    // Load the saved styles from local storage when the page loads
    loadStylesFromLocalStorage();

    //end
  });
}

export { getItems };
