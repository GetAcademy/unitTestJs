function show() {
    let toggle = model.selectedBarNo == null ? 'disabled' : '';
    let svgOutput = '';
    for (let i = 0; i < model.numbers.length; i++) {
        svgOutput += createBars(model.numbers[i], i + 1);
    }
    document.getElementById("content").innerHTML = ` 
        <svg id="charts" width="500" viewbox= " 0 0 80 60">
            ${svgOutput}
        </svg>
        <br/>
        Du har valgt stolpe : <i id="outText">${model.selectedBarNo}</i>
        <br/>
        Verdi: <input id="value" type="number" oninput="model.currentNumber = parseInt(this.value)"
                      min="1" max ="10" selected value ="${model.currentNumber}"/>
        <button id="addBtn" onclick="add()">Legg til stolpe</button>
        <button id="removeBtn" ${toggle} onclick="remove()" >Fjern stolpen</button>
        <button id="changeBtn" ${toggle} onclick="edit()" >Endre på valgt stolpe</button>
        `;
}

function createBars(number, numberOfBar) {
    const width = 8;
    const spacing = 2;
    let x = (numberOfBar - 1) * (width + spacing);
    let height = number * 6;
    let y = 60 - height;
    let color = colorBars(1, 10, numberOfBar);
    let border = numberOfBar == model.selectedBarNo ? 1 : 0;
    return `<rect onclick="chosenbar(${numberOfBar})"
                  width="${width}"
                  height="${height}"
                  x="${x}"
                  y="${y}"
                  fill="${color}"
                  stroke-width="${border}"
                  stroke="black">
            </rect>`;
}

function colorBars(min, max, val) {
    let minHue = 0, maxhue = 240;
    let currentPrecentage = (val - min) / (max - min)
    let cString = "hsl(" + ((currentPrecentage * (maxhue - minHue)) + minHue) + ",100%,50%)";
    return cString;
}
