function chosenbar(numberOfBar) {
    model.selectedBarNo = model.selectedBarNo == numberOfBar ? null : numberOfBar;
    model.updateView();
}

function add() {
    if (!valueIsBetween1and10() || !hasRoomForAnotherBar()) return;
    model.numbers.push(model.currentNumber);
    model.updateView();
}

function edit() {
    if (!valueIsBetween1and10()) return;
    model.numbers[getSelectedBarIndex()] = model.currentNumber;
    model.updateView();
}

function remove() {
    const index = parseInt(model.selectedBarNo) - 1;
    if (index < 0 || index >= model.numbers.length) return;
    model.numbers.splice(index, 1);
    model.updateView();
}

function valueIsBetween1and10() {
    const isValid = model.currentNumber >= 1 && model.currentNumber <= 10;
    if (!isValid) {
        alert("Kan kun legge til en stolpe med verdi 1 til 10");
    }
    return isValid;
}

function hasRoomForAnotherBar() {
    const isValid = model.numbers.length <= 7;
    if (!isValid) {
        alert("Kan ikke ha mer enn 8 stolper om gangen");
    }
    return isValid;
}

function getSelectedBarIndex() {
    return parseInt(model.selectedBarNo) - 1;
}