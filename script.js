let currentCardIndex = -1;
const cards = document.querySelectorAll('.card');
const nextButtons = document.querySelectorAll('.nextBtn');
const yesButton = document.querySelector('.yesBtn');
const noButton = document.querySelector('.noBtn');
const startButton = document.getElementById('startBtn');

function showCard(index) {
    cards.forEach((card, i) => {
        card.classList.remove('show');
        if (i === index) {
            card.classList.add('show');
        }
    });
}

startButton.addEventListener('click', () => {
    currentCardIndex = 0;
    showCard(currentCardIndex);
    startButton.style.display = 'none';
});

nextButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (currentCardIndex < cards.length - 1) {
            currentCardIndex++;
            showCard(currentCardIndex);
        }
    });
});

yesButton.addEventListener('click', () => {
    currentCardIndex++;
    showCard(currentCardIndex);
});

noButton.addEventListener('click', () => {
    const randomX = Math.floor(Math.random() * 80) + 'vw';
    const randomY = Math.floor(Math.random() * 80) + 'vh';
    document.getElementById('card-4').style.position = 'absolute';
    document.getElementById('card-4').style.left = randomX;
    document.getElementById('card-4').style.top = randomY;
    showCard(3);
});

// Show the first card initially
showCard(currentCardIndex);
