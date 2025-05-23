
const numOfSeedsQ = [6, 0];
const numOfSeedsM = [6, 16];
const numOfRoundsQ = [2, 0];
const numOfRoundsM = [6, 8];

let mode;

let qualiPlayers = ['?', '?', '?', '?', '?', '?'];

let maindrawPlayers = ['?', '?', '?', '?', '?', '?', '?', '?'];

const basic = document.getElementById('basics');

const qualification = document.createElement('div');
qualification.classList.add('bracket');
const maindraw = document.createElement('div');
maindraw.classList.add('bracket');

basic.appendChild(qualification);
basic.appendChild(maindraw);

function createMatch(player1, player2) {
  const div = document.createElement('div');
  div.classList.add('match');
  div.innerHTML = `
    <div><strong class="team1">${player1}</strong> <input type="number" min="0" max="2" placeholder="0" class="score1"></div>
    <div><strong class="team2">${player2}</strong> <input type="number" min="0" max="2" placeholder="0" class="score2"></div>
  `;
  return div;
}

function buildQualification(rounds) {
  for (let i = 0; i < rounds; i++) {
      const r1 = document.createElement('div');
      r1.classList.add('round');
      r1.appendChild(createMatch('?', '?'));
      r1.appendChild(createMatch('?', '?'));

      const quali1 = document.createElement("h3");
      quali1.classList.add('roundHeader');
      quali1.textContent = "Runde " + (i+1);
      r1.insertBefore(quali1, r1.firstChild);
      qualification.appendChild(r1);
  }

  const heading = document.createElement("h2");
  heading.textContent = "Qualifikation";
  heading.style.marginLeft = '80px';
  qualification.insertBefore(heading, qualification.firstChild.nextSibling.nextSibling);
}

function buildMaindraw() {
  // Runde 1: Achtelfinale Winner
    const r1wm = document.createElement('div');
    r1wm.classList.add('allRounds');
    const r1w = document.createElement('div');
    r1w.classList.add('round');
    r1w.appendChild(createMatch('?', '?'));
    r1w.appendChild(createMatch('?', '?'));
    r1w.appendChild(createMatch('?', '?'));
    r1w.appendChild(createMatch('?', '?'));

  const headingr1w = document.createElement("h3");
  headingr1w.classList.add('roundHeader');
  headingr1w.textContent = "Achtelfinale";
  r1wm.appendChild(headingr1w);
    r1wm.appendChild(r1w);


  // Runde 2: Viertelfinale Winner
    const  r2wm = document.createElement('div');
    r2wm.classList.add('allRounds');
  const r2w = document.createElement('div');
  r2w.classList.add('round');
  r2w.appendChild(createMatch('?', '?'));
  r2w.appendChild(createMatch('?', '?'));

  const headingr2w = document.createElement("h3");
  headingr2w.classList.add('roundHeader');
  headingr2w.textContent = "Viertelfinale Winner";
  r2wm.appendChild(headingr2w);
  r2wm.appendChild(r2w);

  // Runde 3: Halbfinale und Finale
  const fin = document.createElement('div');
  fin.classList.add('round');
  fin.appendChild(createMatch('?', '?'));
  fin.appendChild(createMatch('?', '?'));
  fin.appendChild(createMatch('?', '?'));

  const headinghf1 = document.createElement("h3");
  headinghf1.classList.add('roundHeader');
  headinghf1.textContent = "Halbfinale 1";
  const headinghf2 = document.createElement("h3");
  headinghf2.classList.add('roundHeader');
  headinghf2.textContent = "Halbfinale 2";
  const headingfin = document.createElement("h3");
  headingfin.classList.add('roundHeader');
  headingfin.textContent = "Finale";
  fin.insertBefore(headinghf2, fin.firstChild.nextSibling.nextSibling);
  fin.insertBefore(headingfin, fin.firstChild.nextSibling);
  fin.insertBefore(headinghf1, fin.firstChild);

  // Runde 4: Viertelfinale Loser
    const r2lm = document.createElement('div');
    r2lm.classList.add('allRounds');
  const r2l = document.createElement('div');
  r2l.classList.add('round');
  r2l.appendChild(createMatch('?', '?'));
  r2l.appendChild(createMatch('?', '?'));

  const headingr2l = document.createElement("h3");
  headingr2l.classList.add('roundHeader');
  headingr2l.textContent = "Viertelfinale Loser";
  r2lm.appendChild(headingr2l);
  r2lm.appendChild(r2l);

  // Runde 5: Achtelfinale Loser
    const r1lm = document.createElement('div');
    r1lm.classList.add('allRounds');
  const r1l = document.createElement('div');
  r1l.classList.add('round');
  r1l.appendChild(createMatch('?', '?'));
  r1l.appendChild(createMatch('?', '?'));

  const headingr1l = document.createElement("h3");
  headingr1l.classList.add('roundHeader');
  headingr1l.textContent = "Achtelfinale Loser";
  r1lm.appendChild(headingr1l);
  r1lm.appendChild(r1l);

  maindraw.appendChild(r1wm);
  maindraw.appendChild(r2wm);
  maindraw.appendChild(fin);
  maindraw.appendChild(r2lm);
  maindraw.appendChild(r1lm);

  const heading = document.createElement("h2");
  heading.textContent = "Hauptrunde";
  maindraw.insertBefore(heading, maindraw.firstChild);
}

function buildDropdownQauli(seeds){
    const dd = document.createElement('div');
    dd.classList.add('dropdown');
    const inputs = [];
    for (let i = 0; i < seeds; i++) {
        const label = document.createElement('label');
        label.textContent = 'Quali Seed ' + (i+1) + ': ';
        const input = document.createElement('input');
        input.type = 'text';
        input.classList.add('inputs');
        input.id = '';
        dd.appendChild(label);
        dd.appendChild(input);
        inputs[i] = input;
    }

    const button = document.createElement('button');
    button.classList.add('button');
    button.textContent = 'Quali-Spieler einfügen';

    dd.appendChild(button);

    // Event Listener für Button
    button.addEventListener('click', () => {
        for (let i = 0; i < numOfSeedsQ; i++) {
            if (inputs[i].value) qualiPlayers[i] = inputs[i].value; else qualiPlayers[i] = '?';
        }
        insertPlayersQuali();
    });

    qualification.appendChild(dd);
}

function buildDropdownMaindraw(seeds){
    const ddm = document.createElement('div');
    ddm.classList.add('dropdown');

    const inputs = [];
    for (let i = 0; i < seeds; i++) {
        const label = document.createElement('label');
        label.textContent = 'Hauptfeld Seed ' + (i+1) + ': ';
        const input = document.createElement('input');
        input.type = 'text';
        input.classList.add('inputs');
        input.id = '';
        ddm.appendChild(label);
        ddm.appendChild(input);
        inputs[i] = input;
    }

    const button = document.createElement('button');
    button.classList.add('button');
    button.textContent = 'Hauptfeld-Spieler einfügen';

    ddm.appendChild(button);

    // Event Listener für Button
    button.addEventListener('click', () => {
        for (let i = 0; i < numOfSeedsM; i++) {
            if (inputs[i].value) maindrawPlayers[i] = (inputs[i].value + ' [' + (i+1) + ']'); else maindrawPlayers[i] = '?';
        }
        maindrawPlayers[6] = '?';
        maindrawPlayers[7] = '?';

      insertPlayersMaindraw();
    });

    qualification.appendChild(ddm);
}

function insertPlayersQuali() {
    const allBrackets = document.querySelectorAll('.bracket');
    allBrackets.forEach((bracket, indexB) =>{
      const allMatches = bracket.querySelectorAll('.match');
      const allRounds = bracket.querySelectorAll('.round');
      allMatches.forEach((match, index) => {
        const team1 = match.querySelector('.team1');
        const team2 = match.querySelector('.team2');
        // Teamnamen setzen
        // Quali
        if (indexB === 0) {
          if(allRounds[0].contains(match)) {
              team1.textContent = qualiPlayers[qualiPlayers.length - index - 1];
              team2.textContent = qualiPlayers[index+2];
          }
          if(allRounds[1].contains(match)) {
              team1.textContent = qualiPlayers[qualiPlayers.length - index - 3];
          }
        }
      });
    });
    updateQuali();
}

function insertPlayersMaindraw() {
    const allBrackets = document.querySelectorAll('.bracket');
    allBrackets.forEach((bracket, indexB) =>{
      const allMatches = bracket.querySelectorAll('.match');
      const allRounds = bracket.querySelectorAll('.round');


      allMatches.forEach((match, index) => {
        const team1 = match.querySelector('.team1');
        const team2 = match.querySelector('.team2');
        // Teamnamen setzen
        if (indexB === 1) {
          if (allRounds[0].contains(match)) {
            // Erste Runde → Startteams einsetzen
            if (index === 0) {
                team1.textContent = maindrawPlayers[0];
                team2.textContent = maindrawPlayers[7];
            } else if (index === 1) {
                team1.textContent = maindrawPlayers[3];
                team2.textContent = maindrawPlayers[4];
            } else if (index === 2) {
                team1.textContent = maindrawPlayers[2];
                team2.textContent = maindrawPlayers[5];
            } else if (index === 3) {
                team1.textContent = maindrawPlayers[1];
                team2.textContent = maindrawPlayers[6];
            }
          }
        }
      });
    });
    update();
}

function updateQuali(){
  const brackets = [...document.querySelectorAll('.bracket')];
  const bracket = brackets[0];
  const rounds = [...bracket.querySelectorAll('.round')];
    rounds.forEach((round, roundIndex) => {
        const matches = [...round.querySelectorAll('.match')];
        matches.forEach((match, matchIndex) => {
            const erg = evalGame(match)
            const winner = erg[0];
            const loser = erg[1];
            if (winner !== "") {
            highlightTeam(match, winner);
            if(roundIndex === 0) {
              //Runde 1 auswerten
              const nextRound = rounds[1];
              if (!nextRound) return;

              const nextMatch = nextRound.querySelectorAll('.match')[matchIndex];
              const targetClass = '.team2';
              nextMatch.querySelector(targetClass).textContent = winner;
            } else {
              // Runde 2 auswerten
              const nextRound = brackets[1].querySelectorAll('.round')[0];
              const nextMatch =  nextRound.querySelectorAll('.match')[(matchIndex * 3)];
              const targetClass = '.team2';
              nextMatch.querySelector(targetClass).textContent = winner + " [" + (8-matchIndex) + "]";
            }
          } else {
              removeHighlight(match);
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

          const erg = evalGame(match)
          const winner = erg[0];
          const loser = erg[1];
          if (winner !== "") {
            highlightTeam(match, winner);

            if (roundIndex < ((numOfRoundsM/2) -1)) {
              // Winner Round with 2nd Chance
              const nextRoundWinner = rounds[roundIndex + 1];
              const nextRoundLoser = rounds[rounds.length - roundIndex - 1];
              let nextMatchWinner;
              let nextMatchLoser;
              let targetClassWinner;
              let targetClassLoser;
              if (roundIndex === 0) {
                //1st Round
                const nextIndex = Math.floor(matchIndex / 2);
                nextMatchWinner = nextRoundWinner.querySelectorAll('.match')[nextIndex];
                nextMatchLoser = nextRoundLoser.querySelectorAll('.match')[nextIndex];
                targetClassWinner = (matchIndex % 2) === 0 ? '.team1' : '.team2';
                targetClassLoser = (matchIndex % 2) === 0 ? '.team1' : '.team2';
              } else {
                //2nd Round
                  const nextIndex = matchIndex === 0 ? matchIndex : (matchIndex + 1);
                  nextMatchWinner = nextRoundWinner.querySelectorAll('.match')[nextIndex];
                  nextMatchLoser = nextRoundLoser.querySelectorAll('.match')[1-matchIndex];
                  targetClassWinner = '.team1';
                  targetClassLoser = '.team2';
              }
              nextMatchWinner.querySelector(targetClassWinner).textContent = winner;
              nextMatchLoser.querySelector(targetClassLoser).textContent = loser;

            } else if (roundIndex === 2 ) {
                // Semifinal
                if (matchIndex !== 1) {
                    const nextMatch = round.querySelectorAll('.match')[1];
                    const targetClass = matchIndex === 0 ? '.team1' : '.team2';
                    nextMatch.querySelector(targetClass).textContent = winner;
                }

            } else if (roundIndex > ((numOfRoundsM/2) -1)) {
                const nextRound = rounds[roundIndex -1];
                let nextMatch;
                let targetClass;
                //1st Loser Round
                if (roundIndex === 3) {
                    const nextIndex = matchIndex === 0 ? matchIndex : (matchIndex + 1);
                    nextMatch = nextRound.querySelectorAll('.match')[nextIndex];
                    targetClass = '.team2';
                } else if (roundIndex === 4) {
                    //2nd Loser Round
                    nextMatch = nextRound.querySelectorAll('.match')[matchIndex];
                    targetClass = '.team1';
                }
                nextMatch.querySelector(targetClass).textContent = winner;
              }
          } else {
              removeHighlight(match);
          }
      })
    })
}

function reset(){
    qualiPlayers = ['?', '?', '?', '?', '?', '?'];
    maindrawPlayers = ['?', '?', '?', '?', '?', '?', '?', '?'];
    const allBrackets = document.querySelectorAll('.bracket');
    allBrackets.forEach((bracket) =>{
      const allMatches = bracket.querySelectorAll('.match');
      allMatches.forEach((match) => {
          const score1 = match.querySelector('.score1');
          const score2 = match.querySelector('.score2');
          const team1 = match.querySelector('.team1');
          const team2 = match.querySelector('.team2');

          // Eingabefelder leeren
          if (score1) score1.value = '';
          if (score2) score2.value = '';

          // Teamnamen setzen
          if (team1) team1.textContent = '?';
          if (team2) team2.textContent = '?';
      });
  });
}

function highlightTeam(match, winner) {
    const team1 = match.querySelector('.team1').textContent;
    const team2 = match.querySelector('.team2').textContent;
    if (team1 === winner) {
        match.querySelector('.team1').classList.add('winner');
        match.querySelector('.team2').classList.add('loser');
    } else if (team2 === winner) {
        match.querySelector('.team2').classList.add('winner');
        match.querySelector('.team1').classList.add('loser');
    }
}

function removeHighlight(match) {
    match.querySelector('.team1').classList.remove('winner');
    match.querySelector('.team2').classList.remove('winner');
    match.querySelector('.team1').classList.remove('loser');
    match.querySelector('.team2').classList.remove('loser');
}

function evalGame(match) {
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
    let winner = "";
    let loser = "";
    if (score1 > 1 || score2 > 1) {
        if (score1 === score2) return [winner,loser];
        winner = score1 > score2 ? team1 : team2;
        loser = score2 > score1 ? team1 : team2;
    }
    return [winner, loser];
}

function update() {
  updateQuali();
  updateMaindraw();
}

function readOutDrop(){
    mode = document.getElementById('auswahl').value;
    updatePage();
}

function updatePage(){
    let i = 0; // default
    if (mode === 'eightTeamsDoubleOut') {
        i = 0;
        buildDropdownQauli(numOfSeedsQ[i]);
        buildDropdownMaindraw(numOfSeedsM[i]);
        buildQualification(numOfRoundsQ[i]);

        buildMaindraw(numOfRoundsM[i]);

    } else if (mode === 'sixteenTeamsDoubleOut') {
        i = 1;
        buildDropdownMaindraw(numOfSeedsM[i]);

        buildMaindraw(numOfRoundsM[i]);

    }



}

//readOutDrop();
buildDropdownQauli(numOfSeedsQ[0]);
buildDropdownMaindraw(numOfRoundsM[0]);
buildQualification(2);
buildMaindraw();
//document.getElementById('auswahl').addEventListener('change', readOutDrop);
document.addEventListener('input', update);
document.getElementById('resetButton').addEventListener('click', reset);
