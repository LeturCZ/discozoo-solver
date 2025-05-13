import { regions } from "./regions.js"
import { pets } from "./pets.js"

function randomInt(min, max) { return Math.floor(Math.random() * (max - min) + min); }

function selectPetImages() {
    for (let petIndex = 0; petIndex < pets.length; petIndex++) {
        const pet = pets[petIndex];
        if (pet.images === undefined) continue;

        const skinType = pet.images[randomInt(0, pet.images.length)];
        pet.imageOff = skinType.blank;
        pet.image = skinType.full[randomInt(0, skinType.full.length)]
    }
}

var selectedAnimalsIndexes = [];
var selectedAnimals = [];
const regionSelect = document.getElementById("region_selector");
const animalSelect = document.getElementById("animal_selector");
const petSelect = document.getElementById("pet_selector");
const boardSelector = document.getElementById("board_selector");
const percentageSelector = document.getElementById("percentage_selector");
const board = document.getElementById("board");
const boardComment = document.getElementById("board_comment");

var boardItems = [];
var patterns = [];


function clone(object) {
    return JSON.parse(JSON.stringify(object));
}

var mouseX, mouseY;

function getTilePatterns(x, y) {
    var tilePatterns = [];
    for (let index = 0; index < patterns.length; index++) { // the +1s in the indexes are for the keys to not be negative numbers
        const pattern = patterns[index][x][y];
        if (tilePatterns[patterns[index][x][y] + 1] === undefined) tilePatterns[patterns[index][x][y] + 1] = {id: patterns[index][x][y], count: 1};
        else tilePatterns[patterns[index][x][y] + 1].count++;
    }

    tilePatterns.sort((a,b) => {
        return b.count - a.count;
    });
    return tilePatterns;
}

function updateMousePos(event) {
    const target = event.target;
    if(target.classList.contains("boardCell") && basePattern[target.boardX][target.boardY] === -1) {
        boardSelector.boardX = target.boardX;
        boardSelector.boardY = target.boardY;
        boardSelector.style.display = "initial";
        boardSelector.style.left = "0";
        boardSelector.style.right = "unset";
        boardSelector.style.top = "0";
        boardSelector.style.bottom = "unset";
        const tilePatterns = getTilePatterns(target.boardX, target.boardY)
        boardSelector.innerHTML = "";
        tilePatterns.forEach(pattern => {
            const patternID = pattern.id === -1 ? -2 : pattern.id;
            const patternName = pattern.id === -1 ? "Empty" : selectedAnimals[pattern.id].name;
            const emptyTexture = regions[regionSelect.selectedIndex].emptyTexture
            const image = pattern.id === -1 ? emptyTexture : selectedAnimals[pattern.id].image;
            boardSelector.innerHTML += 
            "<div patternid='" + patternID + "' class='board_selector_item'>\
            <img draggable=false style='background-image: url(\"" + emptyTexture + "\"' src='" + image + "' alt='" + patternName + "'>\
            <div>" + Math.round((pattern.count / patterns.length) * 100) + " %</div>\
            </div>"
        });
        document.querySelectorAll('.board_selector_item').forEach(element => element.addEventListener('click', reducePatterns));
        if (event.clientX + boardSelector.offsetWidth > document.body.offsetWidth - 10) {
            boardSelector.style.left = "unset";
            boardSelector.style.right = 10 - window.scrollX + "px";
        } else {
            boardSelector.style.right = "unset";
            boardSelector.style.left = event.clientX + "px";
        }

        if (event.clientY + window.scrollY + boardSelector.offsetHeight > document.body.offsetHeight - 10) {
            boardSelector.style.top = "unset";
            boardSelector.style.bottom = 10 - window.scrollY + "px";
        } else {
            boardSelector.style.bottom = "unset";
            boardSelector.style.top = event.clientY + window.scrollY + "px";
        }
    }
    else boardSelector.style.display = "none";
}
  
document.addEventListener("click", updateMousePos);

function checkPattern(base, pattern, rowOffset, columnOffset) {
    if (rowOffset + pattern.length > 5) return false;
    if (columnOffset + pattern[0].length > 5) return false;
    for(let row = 0; row < pattern.length; row++) {
        for(let column = 0; column < pattern[0].length; column++) {
            if (!pattern[row][column]) continue;
            if (base[row + rowOffset][column + columnOffset] != -1) return false;
        };
    };
    return true;
};

function mergePattern(base, pattern, value, rowOffset, columnOffset) {
    pattern.forEach((rowCells, row) => {
        rowCells.forEach((columnCell, column) => {
            if (columnCell) base[row + rowOffset][column + columnOffset] = value;
        });
    });
    return base;
};

function getPatterns(base, animals, animalsOffset) {
    var validPatterns = [];
    if (animals.length == 0) return [base];
    base.forEach((rowCells, row) => {
        rowCells.forEach((columnCell, column) => {
            if (checkPattern(base, animals[0].pattern, row, column)) validPatterns = validPatterns.concat(
                getPatterns(
                    mergePattern(clone(base), animals[0].pattern, animalsOffset, row, column),
                    animals.slice(1),
                    animalsOffset + 1
                )
            )
        });
    });

    return validPatterns;
};

function reducePatterns(event) {
    const target = event.currentTarget;
    const parent = target.parentNode;
    const patternID = parseInt(target.attributes.patternid.value);
    basePattern[parent.boardX][parent.boardY] = patternID;
    patterns = patterns.filter(pattern => {
        return pattern[parent.boardX][parent.boardY] === patternID || (pattern[parent.boardX][parent.boardY] === -1 && patternID === -2);
    });

    renderPercentages();
}

var basePattern;

function clearBoard() {
    basePattern = [
        [-1, -1, -1, -1, -1],
        [-1, -1, -1, -1, -1],
        [-1, -1, -1, -1, -1],
        [-1, -1, -1, -1, -1],
        [-1, -1, -1, -1, -1],
    ];
    patterns = getPatterns(basePattern, selectedAnimals, 0);

    generateNewBoard();

    renderPercentages();
}

const bgImages = [
    "./imgs/commonEmpty.png",
    "./imgs/rareEmpty.png",
    "./imgs/mythicalEmpty.png",
    "./imgs/timelessEmpty.png",
    "./imgs/petEmpty.png",
];

function loadAnimals() {
    const region = regions[regionSelect.selectedIndex];
    document.body.style.backgroundColor = region.backgroundColor;
    board.style.color = region.contrastColor;
    boardSelector.style.backgroundColor = region.primaryColor;
    boardSelector.style.color = region.contrastColor;
    animalSelect.innerHTML = "";
    region.patterns.forEach((animal, id) => {
        animalSelect.innerHTML += 
        "<div> \
        <input class='animal_selector' type='checkbox' id='animal_" + id + "'></input>\
        <div>\
        <label for='animal_" + id + "'></label>\
        <label for='animal_" + id + "'></label>\
        </div>\
        <label for='animal_" + id + "'>" + animal.name +"</label>\
        </div>";
        animalSelect.lastChild.children[1].children[0].style.backgroundImage = "url('" + animal.imageOff + "'), url('" + bgImages[animal.rarity - 1] + "')";
        animalSelect.lastChild.children[1].children[1].style.backgroundImage = "url('" + animal.image + "'), url('" + bgImages[animal.rarity - 1] + "')";
    });
    petSelect.innerHTML = "";
    pets.forEach((pet, id) => {
        petSelect.innerHTML += 
        "<div>\
        <input class='animal_selector' type='checkbox' id='pet_" + id + "'></input>\
        <div>\
        <label for='pet_" + id + "'></label>\
        <label for='pet_" + id + "'></label>\
        </div>\
        <label for='pet_" + id + "'>" + pet.name +"</label>\
        </div>";
        petSelect.lastChild.children[1].children[0].style.backgroundImage = "url('" + pet.imageOff + "'), url('./imgs/petEmpty.png')";
        petSelect.lastChild.children[1].children[1].style.backgroundImage = "url('" + pet.image + "'), url('./imgs/petEmpty.png')";
    });

    document.querySelectorAll('.animal_selector').forEach(element => element.addEventListener('change', recountSelected));

    recountSelected();

    clearBoard();
}

document.querySelector('#region_selector').addEventListener('change', loadAnimals);

for (let row = 0; row < 5; row++) {
    boardItems[row] = [];
    for (let column = 0; column < 5; column++) {
        const div = document.createElement('div');
        div.className = "boardCell";
        boardItems[row][column] = div;
        div.boardX = row;
        div.boardY = column;
        board.appendChild(div)
    }
}

regionSelect.onchange = loadAnimals;

regions.forEach((region, regionId) => {
    regionSelect.add(new Option(region.name, regionId))
})

function generateNewBoard() {
    for (let row = 0; row < 5; row++) {
        for (let column = 0; column < 5; column++) {
            const rnd = Math.random();
            const region = regions[regionSelect.selectedIndex];
            var img = "";
            if (rnd < .50) img = region.baseTexture;
            else if (rnd < .625) img = region.alt1;
            else if (rnd < .75) img = region.alt2;
            else if (rnd < .875) img = region.alt3;
            else img = region.alt4;
            boardItems[row][column].style.backgroundImage = "url(" + img + ")"
        }
    }
}

function renderPercentages() {
    boardComment.className = "";
    if (patterns.length === 0) {
        boardComment.innerText = "This board is invalid.";
        boardComment.className = "highlight";
        return;
    }
    else if (patterns.length === 1) boardComment.innerText = "This board is solved.";
    else boardComment.innerText = "This board has " + patterns.length + " possible solutions.";

    var percentages = [
        [0,0,0,0,0],
        [0,0,0,0,0],
        [0,0,0,0,0],
        [0,0,0,0,0],
        [0,0,0,0,0],
    ];

    var highest = 0;

    for (let rowIndex = 0; rowIndex < percentages.length; rowIndex++) {
        for (let columnIndex = 0; columnIndex < percentages.length; columnIndex++) {
            var initvalue = patterns[0][rowIndex][columnIndex];
            var isCertain = true;
            for (let patternIndex = 0; patternIndex < patterns.length; patternIndex++) {
                const cell = patterns[patternIndex][rowIndex][columnIndex];
                if(cell != -2 && percentageSelector.children[cell + 1].children[0].checked) percentages[rowIndex][columnIndex]++;
                if (initvalue !== cell) isCertain = false;
            }

            if (isCertain) basePattern[rowIndex][columnIndex] = (patterns[0][rowIndex][columnIndex] === -1 ? -2 : patterns[0][rowIndex][columnIndex]);
            else if (percentages[rowIndex][columnIndex] > highest) highest = percentages[rowIndex][columnIndex];
        }
    }


    var count = patterns.length;
    var outString = "";

    percentages.forEach((row, rowIndex) => {
        row.forEach((column, columnIndex) => {
            const boardCell = boardItems[rowIndex][columnIndex];
            boardCell.classList.remove("highlight");
            boardCell.classList.remove("solved");
            const cellValue = basePattern[rowIndex][columnIndex];
            if (cellValue !== -1) {
                boardCell.classList.add("solved");
                const emptyTexture = regions[regionSelect.selectedIndex].emptyTexture;
                const image = cellValue === -2 ? emptyTexture : selectedAnimals[cellValue].image;
                boardCell.style.backgroundImage = "url(" + image + "), url(" + emptyTexture + ")";
                if (image === undefined) boardCell.innerText = cellValue === -2 ? "Empty" : selectedAnimals[cellValue].name;
                else boardCell.innerText = "";
            }
            else {
                boardCell.innerText = Math.round((percentages[rowIndex][columnIndex] / count) * 100) + "%";
                if (percentages[rowIndex][columnIndex] === highest) boardCell.classList.add("highlight");
            }
        });
    });
}

function pushSelected(pattern) {
    selectedAnimals.push(pattern);
    percentageSelector.innerHTML += 
    "<div>\
    <input class='percentage_selector' type='checkbox' checked id='perc_" + (selectedAnimals.length - 1) + "'></input>\
    <div>\
    <label for='perc_" + (selectedAnimals.length - 1) + "'></label>\
    <label for='perc_" + (selectedAnimals.length - 1) + "'></label>\
    </div>\
    <label for='perc_" + (selectedAnimals.length - 1) + "'>" + selectedAnimals[selectedAnimals.length - 1].name +"</label>\
    </div>";
    percentageSelector.lastChild.children[1].children[0].style.backgroundImage = "url('" + selectedAnimals[selectedAnimals.length - 1].imageOff + "'), url('" + bgImages[pattern.rarity - 1] + "')";
    percentageSelector.lastChild.children[1].children[1].style.backgroundImage = "url('" + selectedAnimals[selectedAnimals.length - 1].image + "'), url('" + bgImages[pattern.rarity - 1] + "')";
}

function recountSelected() {
    var selectors = animalSelect.children;
    var petSelectors = petSelect.children;
    var patterns = regions[regionSelect.selectedIndex]
    selectedAnimals = [];
    percentageSelector.innerHTML = 
    "<div>\
    <input class='percentage_selector' type='checkbox' id='perc_empty'></input>\
    <div>\
    <label for='perc_empty'></label>\
    <label for='perc_empty'></label>\
    </div>\
    <label for='perc_empty'>Empty</label>\
    </div>";

    percentageSelector.lastChild.children[1].children[0].style.backgroundImage = "url('" + regions[regionSelect.selectedIndex].baseTexture + "')";
    percentageSelector.lastChild.children[1].children[1].style.backgroundImage = "url('" + regions[regionSelect.selectedIndex].emptyTexture + "')";

    for (let index = 0; index < selectors.length; index++) {
        if (selectors[index].children[0].checked) {
            pushSelected(patterns.patterns[index]);
        }
    }

    for (let index = 0; index < petSelectors.length; index++) {
        if (petSelectors[index].children[0].checked) {
            pushSelected(pets[index])
        }
    }

    document.querySelectorAll(".percentage_selector").forEach(element => element.addEventListener('change', renderPercentages));

    clearBoard();
}

selectPetImages();

window.onload = loadAnimals;
