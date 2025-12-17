fetch("https://www.thecolorapi.com/scheme?hex==FF0&mode=monochrome&count=5")
  .then((response) => response.json())
  .then((data) => console.log(data));
