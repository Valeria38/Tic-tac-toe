'use strict';
//Классы:
//fas fa-times - крестики
//far fa-circle - нолики

let restart = document.querySelector('#restart-btn');

let field = document.querySelector('#field');

field.addEventListener('click', drawCross);


function drawCross(e) {

  let target = e.target;
  let emptyCellsAmount;

  if ( !target.closest('.field__cell') || !field.contains(target) ) {
    return;
  }

  let trueTarget = target.closest('.field__cell');
  if ( trueTarget.querySelector('i').classList.contains('fas') || trueTarget.querySelector('i').classList.contains('far') ) {
    return;
  }
  trueTarget.querySelector('i').classList.add('fas', 'fa-times');    

  field.removeEventListener('click', drawCross);

  emptyCellsAmount = cells.filter(function(cell) {
    return cell.querySelector('i').classList.length === 0;
  }).length;

  let winnerIsDetermined = determineTheWinner();
  if ( winnerIsDetermined ) {
    emptyCellsAmount = false;
    return;
  }

  if ( emptyCellsAmount ) {
    let randomTd = findRandomCell();
    randomTd.addEventListener('click', drawCircle);
    randomTd.click();
    randomTd.removeEventListener('click', drawCircle);
    field.addEventListener('click', drawCross);
  }
        
  winnerIsDetermined = determineTheWinner();
  if ( winnerIsDetermined ) {
    field.removeEventListener('click', drawCross);
  } else {
    if ( !emptyCellsAmount ) {
      alert('Draw');
    }
  }
}

function drawCircle(e) {
  let target = e.target;
  target.querySelector('i').classList.add('far', 'fa-circle'); 
}

let cells = Array.from( document.querySelectorAll('td') );

function findRandomCell() {
  let random = cells[Math.floor( Math.random() * cells.length )];
  let i = random.children[0];

  if ( i.classList.contains('fas') || i.classList.contains('far') ) {
    return findRandomCell();
  } else {
    return random;
  }  
}

function determineTheWinner() {
  //КРЕСТИКИ
  if ( cells[0].firstElementChild.classList.contains('fas') && cells[1].firstElementChild.classList.contains('fas') && cells[2].firstElementChild.classList.contains('fas')) {
    alert('Congratulations! You win!');
    return true;
  }
  if ( cells[3].firstElementChild.classList.contains('fas') && cells[4].firstElementChild.classList.contains('fas') && cells[5].firstElementChild.classList.contains('fas')) {
    alert('Congratulations! You win!');
    return true;
  }
  if ( cells[6].firstElementChild.classList.contains('fas') && cells[7].firstElementChild.classList.contains('fas') && cells[8].firstElementChild.classList.contains('fas')) {
    alert('Congratulations! You win!');
    return true;
  }
  if ( cells[0].firstElementChild.classList.contains('fas') && cells[3].firstElementChild.classList.contains('fas') && cells[6].firstElementChild.classList.contains('fas')) {
    alert('Congratulations! You win!');
    return true;
  }
  if ( cells[1].firstElementChild.classList.contains('fas') && cells[4].firstElementChild.classList.contains('fas') && cells[7].firstElementChild.classList.contains('fas')) {
    alert('Congratulations! You win!');
    return true;
  }
  if ( cells[2].firstElementChild.classList.contains('fas') && cells[5].firstElementChild.classList.contains('fas') && cells[8].firstElementChild.classList.contains('fas')) {
    alert('Congratulations! You win!');
    return true;
  }
  if ( cells[0].firstElementChild.classList.contains('fas') && cells[4].firstElementChild.classList.contains('fas') && cells[8].firstElementChild.classList.contains('fas')) {
    alert('Congratulations! You win!');
    return true;
  }
  if ( cells[2].firstElementChild.classList.contains('fas') && cells[4].firstElementChild.classList.contains('fas') && cells[6].firstElementChild.classList.contains('fas')) {
    alert('Congratulations! You win!');
    return true;
  }
  //НОЛИКИ
  if ( cells[0].firstElementChild.classList.contains('far') && cells[1].firstElementChild.classList.contains('far') && cells[2].firstElementChild.classList.contains('far')) {
    alert('Sorry :(\n Computer wins');
    return true;
  }
  if ( cells[3].firstElementChild.classList.contains('far') && cells[4].firstElementChild.classList.contains('far') && cells[5].firstElementChild.classList.contains('far')) {
    alert('Sorry :(\n Computer wins');
    return true;
  }
  if ( cells[6].firstElementChild.classList.contains('far') && cells[7].firstElementChild.classList.contains('far') && cells[8].firstElementChild.classList.contains('far')) {
    alert('Sorry :(\n Computer wins');
    return true;
  }
  if ( cells[0].firstElementChild.classList.contains('far') && cells[3].firstElementChild.classList.contains('far') && cells[6].firstElementChild.classList.contains('far')) {
    alert('Sorry :(\n Computer wins');
    return true;
  }
  if ( cells[1].firstElementChild.classList.contains('far') && cells[4].firstElementChild.classList.contains('far') && cells[7].firstElementChild.classList.contains('far')) {
    alert('Sorry :(\n Computer wins');
    return true;
  }
  if ( cells[2].firstElementChild.classList.contains('far') && cells[5].firstElementChild.classList.contains('far') && cells[8].firstElementChild.classList.contains('far')) {
    alert('Sorry :(\n Computer wins');
    return true;
  }
  if ( cells[0].firstElementChild.classList.contains('far') && cells[4].firstElementChild.classList.contains('far') && cells[8].firstElementChild.classList.contains('far')) {
    alert('Sorry :(\n Computer wins');
    return true;
  }
  if ( cells[2].firstElementChild.classList.contains('far') && cells[4].firstElementChild.classList.contains('far') && cells[6].firstElementChild.classList.contains('far')) {
    alert('Sorry :(\n Computer wins');
    return true;
  }

  return false;   
}

restart.addEventListener('click', cleanTheField);

function cleanTheField() {
  cells.forEach((cell) => cell.firstElementChild.classList = '' );

  field.addEventListener('click', drawCross);
}