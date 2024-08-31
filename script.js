document.addEventListener("DOMContentLoaded", function () {
  const startButton = document.getElementById("startButton");
  const cardsContainer = document.getElementById("cardsContainer");
  const cards = document.querySelectorAll(".card");
  let currentCard = 0;

  startButton.addEventListener("click", function () {
      startButton.style.display = "none";
      cardsContainer.classList.remove("hidden");
      showCard(currentCard);
  });

  document.querySelectorAll(".nextButton").forEach(button => {
      button.addEventListener("click", function () {
          if (currentCard < cards.length - 1) {
              hideCard(currentCard);
              currentCard++;
              showCard(currentCard);
          }
      });
  });

  document.querySelectorAll(".choiceButton").forEach(button => {
      button.addEventListener("click", function () {
          const choice = this.getAttribute("data-choice");
          if (choice === "iya") {
              hideCard(currentCard);
              currentCard++;
              showCard(currentCard);
          } else if (choice === "tidak") {
              moveCardRandomly("card4");
          }
      });
  });

  function showCard(index) {
      cards[index].classList.remove("hidden");
  }

  function hideCard(index) {
      cards[index].classList.add("hidden");
  }

  function moveCardRandomly(cardId) {
      const card = document.getElementById(cardId);
      const randomX = Math.floor(Math.random() * 300) - 150; // range between -150 and 150
      const randomY = Math.floor(Math.random() * 300) - 150; // range between -150 and 150
      card.style.transform = `translate(${randomX}px, ${randomY}px)`;
  }
});
