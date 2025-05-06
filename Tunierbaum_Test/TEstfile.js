function updateWinners() {
  const rounds = [...document.querySelectorAll('.round')];

  rounds.forEach((round, roundIndex) => {
    const matches = [...round.querySelectorAll('.match')];

    matches.forEach((match, matchIndex) => {
      const s1 = parseInt(match.querySelector('.score1').value);
      const s2 = parseInt(match.querySelector('.score2').value);
      const team1 = match.querySelector('.team1').textContent;
      const team2 = match.querySelector('.team2').textContent;

      if (!isNaN(s1) && !isNaN(s2)) {
        const winner = s1 > s2 ? team1 : team2;

        const nextRound = rounds[roundIndex + 1];
        if (!nextRound) return;

        const nextMatch = nextRound.querySelectorAll('.match')[Math.floor(matchIndex / 2)];
        const targetClass = matchIndex % 2 === 0 ? '.team1' : '.team2';
        nextMatch.querySelector(targetClass).textContent = winner;

        // Finale: Markiere Sieger
        if (roundIndex === 2) {
          nextMatch.classList.add('winner');
          nextMatch.querySelector('.team1').textContent = winner;
          nextMatch.querySelector('.team2').textContent = '';
        }
      }
    });
  });
}