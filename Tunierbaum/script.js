const playersQuali = ['Quali 1', 'Quali 2',
  'Quali 3', 'Quali 4',
  'Quali 5', 'Quali 6'];

const playersMaindraw = ['Haupt 1', 'Haupt 2',
  'Haupt 3', 'Haupt 4',
  'Haupt 5', 'Haupt 6',
  '?', '?']

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

  const quali1 = document.createElement("h3");
  quali1.textContent = "Runde 1";
  r1.insertBefore(quali1, r1.firstChild);

  // Runde 2: Finale
  const r2 = document.createElement('div');
  r2.classList.add('round');
  //const finale = createMatch('?', '?', 2, 0);
  r2.appendChild(createMatch(playersQuali[1], '?', 0, 2, 0));
  r2.appendChild(createMatch(playersQuali[0], '?', 0, 2, 1));

  const quali2 = document.createElement("h3");
  quali2.textContent = "Runde 2";
  r2.insertBefore(quali2, r2.firstChild);

  qualification.appendChild(r1);
  qualification.appendChild(r2);
  const heading = document.createElement("h2");
  heading.textContent = "Qualifikation";
  qualification.insertBefore(heading, qualification.firstChild.nextSibling);
}

function buildDropdown(){
    dd = document.createElement('div');
    dd.classList.add('dropdown');
    const nameLabel = document.createElement('label');
    nameLabel.textContent = 'Name: ';
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.id = 'name';

    const wertLabel = document.createElement('label');
    wertLabel.textContent = ' Wert: ';
    const wertInput = document.createElement('input');
    wertInput.type = 'text';
    wertInput.id = 'wert';

    const button = document.createElement('button');
    button.textContent = 'Zur Liste hinzufügen';

    const liste = document.createElement('ul');
    liste.id = 'liste';

    // Alles zur Seite hinzufügen
    dd.appendChild(nameLabel);
    dd.appendChild(nameInput);
    dd.appendChild(wertLabel);
    dd.appendChild(wertInput);
    dd.appendChild(button);
    dd.appendChild(liste);

    // Event Listener für Button
    button.addEventListener('click', () => {
      const name = nameInput.value;
      const wert = wertInput.value;

      if (name && wert) {
        const eintrag = document.createElement('li');
        eintrag.textContent = `${name}: ${wert}`;
        liste.appendChild(eintrag);

        // Felder leeren
        nameInput.value = '';
        wertInput.value = '';
      }
    });

    qualification.appendChild(dd);
}

function buildMaindraw() {
  // Runde 1: Achtelfinale Winner
  const r1w = document.createElement('div');
  r1w.classList.add('round');
  r1w.appendChild(createMatch(playersMaindraw[0], playersMaindraw[7], 1, 1, 0));
  r1w.appendChild(createMatch(playersMaindraw[1], playersMaindraw[6], 1, 1, 1));
  r1w.appendChild(createMatch(playersMaindraw[2], playersMaindraw[5], 1, 1, 2));
  r1w.appendChild(createMatch(playersMaindraw[3], playersMaindraw[4], 1, 1, 3));

  const headingr1w = document.createElement("h3");
  headingr1w.textContent = "Achtelfinale";
  r1w.insertBefore(headingr1w, r1w.firstChild);

  // Runde 2: Viertelfinale Winner
  const r2w = document.createElement('div');
  r2w.classList.add('round');
  r2w.appendChild(createMatch('?', '?', 1, 2, 0));
  r2w.appendChild(createMatch('?', '?', 1, 2, 1));

  const headingr2w = document.createElement("h3");
  headingr2w.textContent = "Viertelfinale Winner";
  r2w.insertBefore(headingr2w, r2w.firstChild);

  // Runde 2: Halbfinale
  const hf = document.createElement('div');
  hf.classList.add('round');
  hf.appendChild(createMatch('?', '?', 1, 3, 0));
  hf.appendChild(createMatch('?', '?', 1, 3, 1));

  const headinghf = document.createElement("h3");
  headinghf.textContent = "Halbfinale";
  hf.insertBefore(headinghf, hf.firstChild);

  // Runde 2: Finale
  const fin = document.createElement('div');
  fin.classList.add('round');
  fin.appendChild(createMatch('?', '?', 1, 4, 0));

  const headingfin = document.createElement("h3");
  headingfin.textContent = "Finale";
  fin.insertBefore(headingfin, fin.firstChild);

  // Runde 2: Viertelfinale Loser
  const r2l = document.createElement('div');
  r2l.classList.add('round');
  r2l.appendChild(createMatch('?', '?', 1, 5, 0));
  r2l.appendChild(createMatch('?', '?', 1, 5, 1));

  const headingr2l = document.createElement("h3");
  headingr2l.textContent = "Viertelfinale Loser";
  r2l.insertBefore(headingr2l, r2l.firstChild);

  // Runde 2: Viertelfinale Loser
  const r1l = document.createElement('div');
  r1l.classList.add('round');
  r1l.appendChild(createMatch('?', '?', 1, 5, 0));
  r1l.appendChild(createMatch('?', '?', 1, 5, 1));

  const headingr1l = document.createElement("h3");
  headingr1l.textContent = "Achtelfinale Loser";
  r1l.insertBefore(headingr1l, r1l.firstChild);


  maindraw.appendChild(r1w);
  maindraw.appendChild(r2w);
  maindraw.appendChild(hf);
  maindraw.appendChild(fin);
  maindraw.appendChild(r2l);
  maindraw.appendChild(r1l);

  const heading = document.createElement("h2");
  heading.textContent = "Hauptrunde";
  maindraw.insertBefore(heading, maindraw.firstChild);
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
            } else {
              const nextRound = brackets[1].querySelectorAll('.round')[0];
              const nextMatch =  nextRound.querySelectorAll('.match')[matchIndex];
              const targetClass = '.team2';
              nextMatch.querySelector(targetClass).textContent = winner;
            }
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
              let nextMatchWinner;
              let nextMatchLoser;
              if (roundIndex === 0) {
                //1st Round
                if (matchIndex === 0 || matchIndex === 3) {
                  nextIndex = 0;
                } else
                  nextIndex = 1;
                nextMatchWinner = nextRoundWinner.querySelectorAll('.match')[nextIndex];
                nextMatchLoser = nextRoundLoser.querySelectorAll('.match')[1-nextIndex];
              } else {
                //2nd Round
                nextMatchWinner = nextRoundWinner.querySelectorAll('.match')[matchIndex % 2];
                nextMatchLoser = nextRoundLoser.querySelectorAll('.match')[1-matchIndex];
              }
              const targetClassLoser = Math.floor(matchIndex / 2) === 0 ? '.team1' : '.team2';
              const targetClassWinner = Math.floor(matchIndex / 2) === 0 ? '.team1' : '.team2';
              nextMatchWinner.querySelector(targetClassWinner).textContent = winner;
              nextMatchLoser.querySelector(targetClassLoser).textContent = loser;
            } else if (roundIndex === 3 ) {
              // Final
            } else {
              if (roundIndex === 2) {
                // Semifinal
                const nextRound = rounds[roundIndex + 1];
                const nextMatch = nextRound.querySelectorAll('.match')[Math.floor(matchIndex / 2)];
                const targetClass = matchIndex % 2 === 0 ? '.team1' : '.team2';
                nextMatch.querySelector(targetClass).textContent = winner;
              } else {
                let nextRound
                //1st Loser Round
                if (roundIndex === 5) nextRound = rounds[roundIndex - 1];
                //2nd Loser Round
                else nextRound = rounds[roundIndex - 2];
                const nextMatch = nextRound.querySelectorAll('.match')[matchIndex];
                const targetClass = '.team2';
                nextMatch.querySelector(targetClass).textContent = winner;
              }
            }
          }

      })
    })

}

function reset(){
  const allBrackets = document.querySelectorAll('.bracket');
    allBrackets.forEach((bracket, indexB) =>{
      const allMatches = bracket.querySelectorAll('.match');
      const allRounds = bracket.querySelectorAll('.round');


      allMatches.forEach((match, index) => {

        const score1 = match.querySelector('.score1');
        const score2 = match.querySelector('.score2');
        const team1 = match.querySelector('.team1');
        const team2 = match.querySelector('.team2');

        // Eingabefelder leeren
        if (score1) score1.value = '';
        if (score2) score2.value = '';

        // Teamnamen setzen
        //Qauli
        if (indexB === 0) {
          if(allRounds[0].contains(match)) {
            team1.textContent = playersQuali[playersQuali.length - index - 1];
            team2.textContent = playersQuali[index+2];
          }
          if(allRounds[1].contains(match)) {
            team1.textContent = playersQuali[playersQuali.length - index - 3];
            team2.textContent = '?';
          }
        //Hauptfeld
        } else {
          if (allRounds[0].contains(match)) {
            // Erste Runde → Startteams einsetzen

            team1.textContent = playersMaindraw[index];
            team2.textContent = playersMaindraw[playersMaindraw.length - index - 1];

          } else {
            // Weitere Runden → Platzhalter „?“ setzen
            if (team1) team1.textContent = '?';
            if (team2) team2.textContent = '?';
          }
        }
      });
  });
}

function update() {
  updateQuali();
  updateMaindraw();
}

//buildDropdown();
buildQualification();
buildMaindraw();
document.addEventListener('input', update);
document.getElementById('resetButton').addEventListener('click', reset);




