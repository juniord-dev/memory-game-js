const emojis = [
  "<img alt='javascript' src='./src/images/angularjs-original.svg'>",
  "<img alt='javascript' src='./src/images/angularjs-original.svg'>",
  "<img alt='javascript' src='./src/images/css3-original.svg'>",
  "<img alt='javascript' src='./src/images/css3-original.svg'>",
  "<img alt='javascript' src='./src/images/html5-original.svg'>",
  "<img alt='javascript' src='./src/images/html5-original.svg'>",
  "<img alt='javascript' src='./src/images/typescript-original.svg'>",
  "<img alt='javascript' src='./src/images/typescript-original.svg'>",
  "<img alt='javascript' src='./src/images/vuejs-original.svg'>",
  "<img alt='javascript' src='./src/images/vuejs-original.svg'>",
  "<img alt='javascript' src='./src/images/javascript-original.svg'>",
  "<img alt='javascript' src='./src/images/javascript-original.svg'>",
  "<img alt='react' src='./src/images/react-original.svg'>",
  "<img alt='react' src='./src/images/react-original.svg'>",
  "<img alt='react' src='./src/images/bootstrap-original.svg'>",
  "<img alt='react' src='./src/images/bootstrap-original.svg'>",
];
let openCards = [];

let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

for (let i = 0; i < emojis.length; i++) {
  let box = document.createElement("div");
  box.className = "item";
  box.innerHTML = shuffleEmojis[i];
  box.onclick = handleClick;
  document.querySelector(".game").appendChild(box);
}

function playSound(audioName) {
  let audio = new Audio(`./src/sounds/${audioName}.m4a`);
  audio.volume = 0.5;
  audio.play();
}

function handleClick() {
  if (openCards.length < 2) {
    this.classList.add("boxOpen");
    openCards.push(this);
  }

  if (openCards.length == 2) {
    setTimeout(checkMatch, 500);
  }
  playSound("flip");
}

function checkMatch() {
  if (openCards[0].innerHTML === openCards[1].innerHTML) {
    openCards[0].classList.add("boxMatch");
    openCards[1].classList.add("boxMatch");
  } else {
    openCards[0].classList.remove("boxOpen");
    openCards[1].classList.remove("boxOpen");
    playSound("flipback");
  }

  openCards = [];

  if (document.querySelectorAll(".boxMatch").length === emojis.length) {
    Swal.fire({
      title: "Parabéns!",
      text: "Você é crânio de verdade...",
      imageUrl: "https://media.giphy.com/media/clRgLjk8KPpySb9LnF/giphy.gif",
      imageWidth: 300,
      imageHeight: 250,
      color: "rgba(0,0,123)",
      backdrop: "rgba(0,0,123,0.4)",
      imageAlt: "Custom image",
      confirmButtonText: "Reiniciar"
    }).then(function() {
      window.location.reload();
  });
  }
}