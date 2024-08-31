// Data untuk 5 card
const cards = [
  { title: "Card 1", content: "Ini adalah konten untuk Card 1." },
  { title: "Card 2", content: "Ini adalah konten untuk Card 2." },
  { title: "Card 3", content: "Ini adalah konten untuk Card 3." },
  { title: "Card 4", content: "Ini adalah konten untuk Card 4." },
  { title: "Card 5", content: "Ini adalah konten untuk Card 5." },
];

let currentCard = 0;

const overlay = document.getElementById("overlay");
const cardTitle = document.getElementById("card-title");
const cardContent = document.getElementById("card-content");
const cardButtons = document.getElementById("card-buttons");
const openCardBtn = document.getElementById("open-card-btn");

// Fungsi untuk menampilkan card berdasarkan indeks
function showCard(index) {
  cardTitle.textContent = cards[index].title;
  cardContent.textContent = cards[index].content;
  cardButtons.innerHTML = "";

  if (index < cards.length - 1) {
    // Tambahkan tombol Next
    const nextBtn = document.createElement("button");
    nextBtn.textContent = "Next";
    nextBtn.className = "next-btn";
    nextBtn.onclick = () => {
      currentCard++;
      showCard(currentCard);
    };
    cardButtons.appendChild(nextBtn);
  } else {
    // Pada card terakhir, tambahkan tombol Iya dan Tidak
    const yesBtn = document.createElement("button");
    yesBtn.textContent = "Iya";
    yesBtn.className = "yes-btn";
    yesBtn.onclick = onYes;

    const noBtn = document.createElement("button");
    noBtn.textContent = "Tidak";
    noBtn.className = "no-btn";
    noBtn.onclick = onNo;

    cardButtons.appendChild(yesBtn);
    cardButtons.appendChild(noBtn);
  }
}

// Fungsi untuk memposisikan card secara acak
function positionCard() {
  const card = document.getElementById("card");
  const maxX = window.innerWidth - card.offsetWidth - 20;
  const maxY = window.innerHeight - card.offsetHeight - 20;
  const randomX = Math.floor(Math.random() * maxX) + 10;
  const randomY = Math.floor(Math.random() * maxY) + 10;
  card.style.left = randomX + "px";
  card.style.top = randomY + "px";
}

// Fungsi ketika tombol Iya diklik
function onYes() {
  // Tambahkan card baru (misalnya Card 6)
  cards.push({ title: "Card 6", content: "Ini adalah konten untuk Card 6." });
  currentCard++;
  showCard(currentCard);
}

// Fungsi ketika tombol Tidak diklik
function onNo() {
  // Pindahkan posisi card
  positionCard();
}

// Fungsi untuk membuka card saat tombol diklik
openCardBtn.onclick = function () {
  overlay.style.display = "block";
  showCard(currentCard);
};

// Menutup popup ketika overlay di klik di luar card
overlay.onclick = function (event) {
  if (event.target == overlay) {
    overlay.style.display = "none";
  }
};
