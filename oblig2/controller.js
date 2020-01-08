function selectBar(numberOfBar, model) {
    model.selectedBarNo = model.selectedBarNo == numberOfBar ? null : numberOfBar;
    model.updateView();
}

function add(model) {
    if (valueIsBetween1and10(model) || hasRoomForAnotherBar(model)) {
        model.numbers.push(model.currentNumber);
    }
    model.updateView();
}

function edit(model) {
    if (valueIsBetween1and10(model)) {
        const selectedBarIndex = parseInt(model.selectedBarNo) - 1;
        model.numbers[selectedBarIndex] = model.currentNumber;
    }
    model.updateView();
}

function remove(model) {
    const index = parseInt(model.selectedBarNo) - 1;
    if (index >= 0 && index < model.numbers.length) {
        model.numbers.splice(index, 1);
    }
    model.updateView();
}

function removeError(model) {
    model.errorMessage = null;
    model.updateView();
}

function valueIsBetween1and10(model) {
    const isValid = model.currentNumber >= 1 && model.currentNumber <= 10;
    if (!isValid) {
        model.errorMessage = "Kan kun legge til en stolpe med verdi 1 til 10";
    }
    return isValid;
}

function hasRoomForAnotherBar(model) {
    const isValid = model.numbers.length <= 7;
    if (!isValid) {
        model.errorMessage = "Kan ikke ha mer enn 8 stolper om gangen";
    }
    return isValid;
}

