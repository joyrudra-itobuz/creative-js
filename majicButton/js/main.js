function addConfetti() {
  for (let i = 0; i < 400; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    document.body.appendChild(confetti);

    const randomSize = Math.random() * 20 + 5;
    const randomColor = getRandomColor();
    const randomX = Math.random() * window.innerWidth;
    const randomY = Math.random() * window.innerHeight;
    const randomRotation = Math.random() * 360;

    confetti.style.width = `${randomSize}px`;
    confetti.style.height = `${randomSize}px`;
    confetti.style.background = randomColor;
    confetti.style.left = `${randomX}px`;
    confetti.style.top = `${randomY}px`;
    confetti.style.transform = `rotate(${randomRotation}deg)`;

    setTimeout(() => {
      confetti.remove();
    }, 4000);
  }
}

const getRandomColor = () =>
  `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;
