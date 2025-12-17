const form = document.getElementById("color-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  fetch("https://www.thecolorapi.com/scheme?hex=FF0&mode=monochrome&count=5")
    .then((response) => response.json())
    .then((data) => {
      const colors = data.colors;
      let html = "";
      for (let color of colors) {
        html += `${color.hex.value}`;
      }
    });
  outputContainer.innerHTML = html;
});
