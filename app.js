"use strict";
//Классы:
//fas fa-times - крестики
//far fa-circle - нолики

let restart = document.querySelector("#restart-btn");

let field = document.querySelector("#field");

field.addEventListener("click", drawCross);

function drawCross(e) {
  let target = e.target;
  let emptyCellsAmount;

  if (!target.closest(".field__cell") || !field.contains(target)) {
    return;
  }

  let trueTarget = target.closest(".field__cell");
  if (
    trueTarget.querySelector("i").classList.contains("fas") ||
    trueTarget.querySelector("i").classList.contains("far")
  ) {
    return;
  }
  trueTarget.querySelector("i").classList.add("fas", "fa-times");

  field.removeEventListener("click", drawCross);

  emptyCellsAmount = cells.filter(function(cell) {
    return cell.querySelector("i").classList.length === 0;
  }).length;

  let winnerIsDetermined = determineTheWinner();
  if (winnerIsDetermined) {
    emptyCellsAmount = false;
    return;
  }

  if (emptyCellsAmount) {
    let randomTd = findRandomCell();
    randomTd.addEventListener("click", drawCircle);
    randomTd.click();
    randomTd.removeEventListener("click", drawCircle);
    field.addEventListener("click", drawCross);
  }

  winnerIsDetermined = determineTheWinner();
  if (winnerIsDetermined) {
    field.removeEventListener("click", drawCross);
  } else {
    if (!emptyCellsAmount) {
      resultField.textContent = "draw";
    }
  }
}

function drawCircle(e) {
  let target = e.target;
  target.querySelector("i").classList.add("far", "fa-circle");
}

let cells = Array.from(document.querySelectorAll("td"));

function findRandomCell() {
  let random = cells[Math.floor(Math.random() * cells.length)];
  let i = random.children[0];

  if (i.classList.contains("fas") || i.classList.contains("far")) {
    return findRandomCell();
  } else {
    return random;
  }
}

let resultField = document.querySelector("#result-field");

function determineTheWinner() {
  //КРЕСТИКИ
  for (let i = 0; i < cells.length; i++) {
    if (i === 0 || i === 3 || i === 6) {
      if (
        cells[i].querySelector("i").classList.contains("fas") &&
        cells[i + 1].querySelector("i").classList.contains("fas") &&
        cells[i + 2].querySelector("i").classList.contains("fas")
      ) {
        resultField.textContent = "You win";
        return true;
      }
    }
    if (i === 0 || i === 1 || i === 2) {
      if (
        cells[i].querySelector("i").classList.contains("fas") &&
        cells[i + 3].querySelector("i").classList.contains("fas") &&
        cells[i + 6].querySelector("i").classList.contains("fas")
      ) {
        resultField.textContent = "You win";
        return true;
      }
    }
    if (
      cells[0].querySelector("i").classList.contains("fas") &&
      cells[4].querySelector("i").classList.contains("fas") &&
      cells[8].querySelector("i").classList.contains("fas")
    ) {
      resultField.textContent = "You win";
      return true;
    }
    if (
      cells[2].querySelector("i").classList.contains("fas") &&
      cells[4].querySelector("i").classList.contains("fas") &&
      cells[6].querySelector("i").classList.contains("fas")
    ) {
      resultField.textContent = "You win";
      return true;
    }
  }
  //НОЛИКИ
  for (let i = 0; i < cells.length; i++) {
    if (i === 0 || i === 3 || i === 6) {
      if (
        cells[i].querySelector("i").classList.contains("far") &&
        cells[i + 1].querySelector("i").classList.contains("far") &&
        cells[i + 2].querySelector("i").classList.contains("far")
      ) {
        resultField.textContent = "Computer wins";
        return true;
      }
    }
    if (i === 0 || i === 1 || i === 2) {
      if (
        cells[i].querySelector("i").classList.contains("far") &&
        cells[i + 3].querySelector("i").classList.contains("far") &&
        cells[i + 6].querySelector("i").classList.contains("far")
      ) {
        resultField.textContent = "Computer wins";
        return true;
      }
    }
    if (
      cells[0].querySelector("i").classList.contains("far") &&
      cells[4].querySelector("i").classList.contains("far") &&
      cells[8].querySelector("i").classList.contains("far")
    ) {
      resultField.textContent = "Computer wins";
      return true;
    }
    if (
      cells[2].querySelector("i").classList.contains("far") &&
      cells[4].querySelector("i").classList.contains("far") &&
      cells[6].querySelector("i").classList.contains("far")
    ) {
      resultField.textContent = "Computer wins";
      return true;
    }
  }

  return false;
}

restart.addEventListener("click", cleanTheField);

function cleanTheField() {
  cells.forEach(cell => (cell.firstElementChild.classList = ""));
  resultField.textContent = "";
  field.addEventListener("click", drawCross);
}
