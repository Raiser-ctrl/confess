const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");
const audio = document.getElementById("loveAudio");

// Tombol "No" menghindar
noBtn.addEventListener("mouseover", () => {
  const maxX = questionContainer.offsetWidth - noBtn.offsetWidth;
  const maxY = questionContainer.offsetHeight - noBtn.offsetHeight;

  const newX = Math.floor(Math.random() * maxX);
  const newY = Math.floor(Math.random() * maxY);

  noBtn.style.position = "absolute";
  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
});

// Tombol "Yes"
yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  heartLoader.style.display = "inherit";

  setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "flex";
    gifResult.play();
  }, 3000);

  audio.play();

  setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "flex";
    gifResult.play();
  }, 3000);

  new TypeIt("#typeText", {
  speed: 50,
  loop: true,
  breakLines: true,
})
  .type("i'll treat you right,")
  .pause(1000)
  .delete()
  .type("i'll always be there for you")
  .pause(1000)
  .delete()
  .type("i promise with all my heart")
  .pause(1500)
  .go();


setTimeout(() => {
  heartLoader.style.display = "none";
  resultContainer.style.display = "flex";
  gifResult.play();

  // Ketik teks dengan animasi
  new TypeIt("#typeText", {
    speed:  150,
    loop: true,
    breakLines: true,
    deleteSpeed: 150,
  })
    .type("i'll treat you right")
    .pause(5000)
    .delete()
    .type("i'll always be there for you")
    .pause(5000)
    .delete()
    .type("i promise with all my heart")
    .pause(5000)
    .delete()
    .type("i love you so much")
    .pause(5000)
    .delete()
    .type("i'm yours now")
    .pause(5000)
    .delete()
    .type("i' wanna be the one for you")
    .pause(5000)
    .delete()
    .go();
}, 3000);

});
// Setelah resultContainer muncul


const awwBtn = document.querySelector(".aww-button");

awwBtn.addEventListener("click", () => {
  const message = "Awww 🥺 I'm yours now!";
  const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
});
