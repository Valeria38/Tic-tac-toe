'use strict';
//Классы:
//fas fa-times - крестики
//far fa-circle - нолики

let restart = document.querySelector('#restart-btn');

let field = document.querySelector('#field');

field.addEventListener('click', drawCross);


function drawCross(e) {

    let target = e.target;
    let stopFindingRandomCell;

    if ( target.tagName === 'DIV' || target.tagName === 'TABLE' || target.tagName === 'I') {
        return;
    }

    target.firstElementChild.classList.add('fas', 'fa-times');    

    field.removeEventListener('click', drawCross);

    stopFindingRandomCell = cells.filter(function(cell) {
        return cell.firstElementChild.classList.length === 0;
    }).length;

    let stop = determineTheWinner();
    if ( stop ) {
        stopFindingRandomCell = false;
        return;
    }

    if ( stopFindingRandomCell ) {
        let randomTd = findRandomCell();
        randomTd.addEventListener('click', drawCircle);
        randomTd.click();
        randomTd.removeEventListener('click', drawCircle);
        field.addEventListener('click', drawCross);
    }
    
        
    stop = determineTheWinner();
    if ( stop ) {
        field.removeEventListener('click', drawCross);
    }
            
}


function drawCircle(e) {

    let target = e.target;
    target.firstElementChild.classList.add('far', 'fa-circle');
    
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