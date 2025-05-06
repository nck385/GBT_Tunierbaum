const emojis = ['🍎','🍌','🍇','🍉','🍓','🍍','🥝','🍒'];
const cards = [...emojis, ...emojis]; // Paare bilden
cards.sort(() => 0.5 - Math.random()); // Mischen

const gameBoard = document.getElementById('gameBoard');
let flippedCards = [];
let matched = 0;

cards.forEach((emoji, index) => {
  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.emoji = emoji;
  card.dataset.index = index;
  card.textContent = '';
  
  card.addEventListener('click', () => {
    if (card.classList.contains('flipped') || flippedCards.length === 2) return;

    card.classList.add('flipped');
    card.textContent = emoji;
    flippedCards.push(card);

    if (flippedCards.length === 2) {
      const [first, second] = flippedCards;
      if (first.dataset.emoji === second.dataset.emoji) {
        flippedCards = [];
        matched += 1;
        if (matched === emojis.length) alert('🎉 Du hast gewonnen!');
      } else {
        setTimeout(() => {
          first.classList.remove('flipped');
          second.classList.remove('flipped');
          first.textContent = '';
          second.textContent = '';
          flippedCards = [];
        }, 1000);
      }
    }
  });

  gameBoard.appendChild(card);
});
