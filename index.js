const form = document.getElementById("color-form");
const section = document.getElementById("color-scheme");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const seedColor = document.getElementById("seed-color").value.slice(1);
  const modE = document.getElementById("scheme-mode").value;

  fetch(
    `https://www.thecolorapi.com/scheme?hex=${seedColor}&mode=${modE}&count=5`
  )
    .then((response) => response.json())
    .then((data) => {
      let html = "";
      const colors = data.colors;
      for (let color of colors) {
        html += `<div class="color-column">
            <div class="color-box" style="background:${color.hex.value}"></div>
            <p class="hex-value">${color.hex.value}</p>
            </div>`;
      }
      section.innerHTML = html;
    });
});
