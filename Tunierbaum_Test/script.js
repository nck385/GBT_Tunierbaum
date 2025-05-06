const playersQuali = ['Quali 1', 'Quali 2',
  'Quali 3', 'Quali 4',
  'Quali 5', 'Quali 6'];

const playersMaindraw = ['Haupt 1', 'Haupt 2',
  'Haupt 3', 'Haupt 4',
  'Haupt 5', 'Haupt 6',
  '?', '?']

let quali_ready = 0;

const basic = document.getElementById('basics');

const qualification = document.createElement('div');
qualification.classList.add('bracket');
const maindraw = document.createElement('div');
maindraw.classList.add('bracket');

basic.appendChild(qualification);
basic.appendChild(maindraw);

function createMatch(player1, player2, phaseIndex, roundIndex, matchIndex) {
  const div = document.createElement('div');
  div.classList.add('match');
  div.innerHTML = `
    <div><strong class="team1">${player1}</strong> <input type="number" min="0" max="2" class="score1" data-bracket="${phaseIndex}" data-round="${roundIndex}" data-match="${matchIndex}" data-player="1"></div>
    <div><strong class="team2">${player2}</strong> <input type="number" min="0" max="2" class="score2" data-bracket="${phaseIndex}" data-round="${roundIndex}" data-match="${matchIndex}" data-player="2"></div>
  `;
  return div;
}

function buildQualification() {
  // Runde 1: Halbfinale
  const r1 = document.createElement('div');
  r1.classList.add('round');
  r1.appendChild(createMatch(playersQuali[5], playersQuali[2], 0, 1, 0));
  r1.appendChild(createMatch(playersQuali[4], playersQuali[3], 0, 1, 1));

  // Runde 2: Finale
  const r2 = document.createElement('div');
  r2.classList.add('round');
  //const finale = createMatch('?', '?', 2, 0);
  r2.appendChild(createMatch(playersQuali[1], '?', 0, 2, 0));
  r2.appendChild(createMatch(playersQuali[0], '?', 0, 2, 1));

  qualification.appendChild(r1);
  qualification.appendChild(r2);
}

function buildMaindraw() {
  // Runde 1: Achtelfinale Winner
  const r1w = document.createElement('div');
  r1w.classList.add('round');
  r1w.appendChild(createMatch(playersMaindraw[0], playersMaindraw[7], 1, 1, 0));
  r1w.appendChild(createMatch(playersMaindraw[1], playersMaindraw[6], 1, 1, 1));
  r1w.appendChild(createMatch(playersMaindraw[2], playersMaindraw[5], 1, 1, 2));
  r1w.appendChild(createMatch(playersMaindraw[3], playersMaindraw[4], 1, 1, 3));

  // Runde 2: Viertelfinale Winner
  const r2w = document.createElement('div');
  r2w.classList.add('round');
  r2w.appendChild(createMatch('?', '?', 1, 2, 0));
  r2w.appendChild(createMatch('?', '?', 1, 2, 1));

  // Runde 2: Halbfinale
  const hf = document.createElement('div');
  hf.classList.add('round');
  hf.appendChild(createMatch('?', '?', 1, 3, 0));
  hf.appendChild(createMatch('?', '?', 1, 3, 1));

  // Runde 2: Finale
  const fin = document.createElement('div');
  fin.classList.add('round');
  fin.appendChild(createMatch('?', '?', 1, 4, 0));

  // Runde 2: Viertelfinale Loser
  const r2l = document.createElement('div');
  r2l.classList.add('round');
  r2l.appendChild(createMatch('?', '?', 1, 5, 0));
  r2l.appendChild(createMatch('?', '?', 1, 5, 1));

  // Runde 2: Viertelfinale Loser
  const r1l = document.createElement('div');
  r1l.classList.add('round');
  r1l.appendChild(createMatch('?', '?', 1, 5, 0));
  r1l.appendChild(createMatch('?', '?', 1, 5, 1));


  maindraw.appendChild(r1w);
  maindraw.appendChild(r2w);
  maindraw.appendChild(hf);
  maindraw.appendChild(fin);
  maindraw.appendChild(r2l);
  maindraw.appendChild(r1l);
}


function updateQuali(){
  const brackets = [...document.querySelectorAll('.bracket')];
  const bracket = brackets[0];
  let x = 0;
    const rounds = [...bracket.querySelectorAll('.round')];
    rounds.forEach((round, roundIndex) => {
        const matches = [...round.querySelectorAll('.match')];
        matches.forEach((match, matchIndex) => {
          let score1 = parseInt(match.querySelector('.score1').value);
          let score2 = parseInt(match.querySelector('.score2').value);
          const team1 = match.querySelector('.team1').textContent;
          const team2 = match.querySelector('.team2').textContent;
          if (isNaN(score1)) {
            score1 = 0
          }
          if (isNaN(score2)) {
            score2 = 0
          }
          if (score1 > 1 || score2 > 1) {
            if (score1 === score2) return;
            let winner = score1 > score2 ? team1 : team2;
            if(roundIndex === 0) {
              const nextRound = rounds[1];
              if (!nextRound) return;

              const nextMatch = nextRound.querySelectorAll('.match')[matchIndex];
              const targetClass = '.team2';
              nextMatch.querySelector(targetClass).textContent = winner;
              x++;
            } else {
              const nextRound = brackets[1].querySelectorAll('.round')[0];
              const nextMatch =  nextRound.querySelectorAll('.match')[matchIndex];
              const targetClass = '.team2';
              nextMatch.querySelector(targetClass).textContent = winner;
            }
          }
          if (x===2){
            quali_ready = 1;
          }

        })
    })

}

function updateMaindraw(){
  const brackets = [...document.querySelectorAll('.bracket')];
  const bracket = brackets[1];
    const rounds = [...bracket.querySelectorAll('.round')];
    rounds.forEach((round, roundIndex) => {

      //Winner
        const matches = [...round.querySelectorAll('.match')];
        matches.forEach((match, matchIndex) => {

          let score1 = parseInt(match.querySelector('.score1').value);
          let score2 = parseInt(match.querySelector('.score2').value);
          const team1 = match.querySelector('.team1').textContent;
          const team2 = match.querySelector('.team2').textContent;
          if (isNaN(score1)) {
            score1 = 0
          }
          if (isNaN(score2)) {
            score2 = 0
          }
          if (score1 > 1 || score2 > 1) {
            if (score1 === score2) return;
            const winner = score1 > score2 ? team1 : team2;
            const loser = score2 > score1 ? team1 : team2;
            if(roundIndex < 2) {
              // Winner Round with 2nd Chance
              const nextRoundWinner = rounds[roundIndex + 1];
              const nextRoundLoser = rounds[rounds.length - roundIndex - 1];
              console.log(nextRoundLoser);
              const nextMatchWinner = nextRoundWinner.querySelectorAll('.match')[matchIndex % 2];
              const nextMatchLoser = nextRoundLoser.querySelectorAll('.match')[matchIndex % 2];
              const targetClassLoser = Math.floor(matchIndex / 2) === 0 ? '.team1' : '.team2';
              const targetClassWinner = Math.floor(matchIndex / 2) === 0 ? '.team1' : '.team2';
              nextMatchWinner.querySelector(targetClassWinner).textContent = winner;
              nextMatchLoser.querySelector(targetClassLoser).textContent = loser;
            } else if (roundIndex === 3 ) {
              // Final
            } else {
              if (roundIndex === 2) {
                const nextRound = rounds[roundIndex + 1];
                const nextMatch = nextRound.querySelectorAll('.match')[Math.floor(matchIndex / 2)];
                const targetClass = matchIndex % 2 === 0 ? '.team1' : '.team2';
                nextMatch.querySelector(targetClass).textContent = winner;
              } else {
                let nextRound
                if (roundIndex === 5) nextRound = rounds[roundIndex - 1];
                else nextRound = rounds[roundIndex - 2];
                const nextMatch = nextRound.querySelectorAll('.match')[matchIndex];
                const targetClass = '.team2';
                nextMatch.querySelector(targetClass).textContent = winner;
              }
            }
          }

        //Loser



      })
    })

}


function update() {
  updateQuali();
  if (quali_ready > 0) {
    updateMaindraw();
  }
}


function updateNextRound() {
  const scores = document.querySelectorAll('.score');
  const nextMatch = scores
    .filter(s => s.dataset.round === "2" && s.dataset.match === "0");

  const r1Matches = [
    [...document.querySelectorAll('.score[data-round="1"][data-match="0"]')],
    [...document.querySelectorAll('.score[data-round="1"][data-match="1"]')],
  ];

  r1Matches.forEach((match, i) => {
    const score1 = parseInt(match[0].value);
    const score2 = parseInt(match[1].value);
    const winner = score1 > score2 ? match[0].previousElementSibling.textContent : match[1].previousElementSibling.textContent;

    const finalMatchInputs = document.querySelectorAll(`.score[data-round="2"][data-match="0"][data-player="${i + 1}"]`);
    finalMatchInputs[0].previousElementSibling.textContent = winner || '?';
  });
}

buildQualification();
buildMaindraw();
//updateQuali();
document.addEventListener('input', update);




