console.log(window.innerWidth, " x ", window.innerHeight);

const wand = document.getElementById("wand");
const tiles = document.querySelectorAll(".tile");

console.log(tiles);

window.onmousemove = (e) => {
  const wandX = window.innerWidth * -0.15 + e.clientX * 1.3;
  const wandY = window.innerWidth * 0.1 + e.clientY * 0.4;
  const mouseXAsDecimal = wandX / window.innerWidth;

  wand.animate(
    {
      left: `${wandX}px`,
      top: `${wandY}px`,
      rotate: `${-10 + 20 * mouseXAsDecimal}deg`,
    },
    { duration: 800, fill: "forwards" }
  );

  for (const tile of tiles) {
    const dimensions = tile.getBoundingClientRect();

    const relativeMouseX = wandX - dimensions.left,
      relativeMouseXAsDecimal = relativeMouseX / dimensions.width;

    const opacity = relativeMouseXAsDecimal,
      blur = 1 - relativeMouseXAsDecimal;

    tile.style.setProperty("--opacity", opacity);
    tile.style.setProperty("--blur", blur);
  }
};
