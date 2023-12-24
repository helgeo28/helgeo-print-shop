document.addEventListener("DOMContentLoaded", function () {
  const currentDate = new Date();
  const startDate = new Date(currentDate.getFullYear(), 11, 24); // 24th December
  const endDate = new Date(currentDate.getFullYear(), 11, 30); // 30th December
  const logo = document.querySelector(".logo");

  if (currentDate >= startDate && currentDate <= endDate) {
    const container = document.body;
    const numSnowflakes = 50;

    logo.style.backgroundImage = "url(christmas/logo1.png)";

    for (let i = 0; i < numSnowflakes; i++) {
      createSnowflake();
    }

    function createSnowflake() {
      const snowflake = document.createElement("div");
      snowflake.className = "snowflake";
      container.appendChild(snowflake);

      const animationDuration = Math.random() * 3 + 2; // between 2 and 5 seconds
      const startPosition = Math.random() * window.innerWidth;

      snowflake.style.left = startPosition + "px";
      snowflake.style.animation = `fall ${animationDuration}s linear infinite`;

      snowflake.addEventListener("animationiteration", () => {
        // Reset snowflake when it reaches the bottom
        snowflake.style.left = Math.random() * window.innerWidth + "px";
      });

      // Check for collisions with the bottom of the window
      setInterval(() => {
        const snowflakeRect = snowflake.getBoundingClientRect();
        const bottomOfWindow = window.innerHeight;

        if (snowflakeRect.bottom >= bottomOfWindow) {
          // Snowflake reached the bottom, reset its position
          snowflake.style.left = Math.random() * window.innerWidth + "px";
          snowflake.style.animation = `fall ${animationDuration}s linear infinite`;
        }
      }, 100);
    }
  }
});
