document.addEventListener("DOMContentLoaded", function () {
  const currentDate = new Date();
  const startDate = new Date(currentDate.getFullYear(), 11, 24); // 24th December
  const endDate = new Date(currentDate.getFullYear(), 11, 30); // 30th December

  const logo = document.querySelector(".logo");

  if (currentDate >= startDate && currentDate <= endDate) {
    const container = document.body;

    //logo
    logo.style.backgroundImage = "url(christmas/logo1.png)";

    const numSnowflakes = 50;

    const snowflakes = [];

    for (let i = 0; i < numSnowflakes; i++) {
      createSnowflake();
    }

    function createSnowflake() {
      const snowflake = document.createElement("div");
      snowflake.className = "snowflake";
      snowflake.style.width = Math.random() * 10;
      snowflake.style.height = Math.random() * 10;
      container.appendChild(snowflake);

      const animationDuration = Math.random() * 3 + 2; // between 2 and 5 seconds
      const startPosition = Math.random() * window.innerWidth;

      snowflake.style.left = startPosition + "px";
      snowflake.style.animation = `fall ${animationDuration}s linear infinite`;

      snowflake.addEventListener("animationiteration", () => {
        // Move snowflake to the bottom when it reaches the bottom
        snowflake.style.left = Math.random() * window.innerWidth + "px";
        accumulateSnow(snowflake);
      });
    }

    function accumulateSnow(flake) {
      const bottomPosition = window.innerHeight - 10; // Adjust the bottom position as needed
      const accumulatedHeight = Math.random() * 20; // Adjust the height increment as needed

      flake.style.bottom = accumulatedHeight + "px";
    }
  }
});
