// const cubeOne = $(".cube-one");
// const cubeTwo = $(".cube-two");

let isDiceOneLow = true;
let isDiceTwoLow = true;
let isDiceRolling = false;
let roll = 0;
// let roll1 = 0;
// let roll2 = 0;
let rollTime = 750;
let modifier = 0;
let numberOfDice = 1;

displayInitialDiceNumber();

function displayInitialDiceNumber() {
    let numberOfDice = localStorage.getItem("number-of-dice");
    if (!numberOfDice) {
        numberOfDice = 2;
        localStorage.setItem("number-of-dice", numberOfDice);
    }
    for (let i = 0; i < numberOfDice; i++) {
        $('.container').append('<div class="cube face-2-low low"><div class="face front">1</div><div class="face back">6</div><div class="face bottom">2</div><div class="face left">3</div><div class="face right">4</div><div class="face top">5</div></div>');
    }
    $(`.number-of-dice option[value=${numberOfDice}]`).attr('selected', '');
};

$(".number-of-dice").change(function(){
    $(".cube").remove();
    localStorage.setItem("number-of-dice", this.value);
    let newDiceNumber = parseInt(this.value);
    for (let i = 0; i < newDiceNumber; i++) {
        $('.container').append('<div class="cube face-2-low low"><div class="face front">1</div><div class="face back">6</div><div class="face bottom">2</div><div class="face left">3</div><div class="face right">4</div><div class="face top">5</div></div>');
    }
    displayInitialDiceStyle();
});

displayInitialDiceStyle();

function displayInitialDiceStyle() {
    let style = localStorage.getItem("dice-style");
    if (!style) {
        style = "classic";
        localStorage.setItem("style", style);
    }
    $(`.style option[value=${style}]`).attr('selected', '');
    let backgroundColor = '';
    let borderColor = '';
    let numberColor = ''

    if (style === "classic") {
        backgroundColor = "black";
        borderColor = "gray";
        numberColor = "white";
    }
    if (style === "blurple") {
        backgroundColor = "#370544";
        borderColor = "#408dd9";
        numberColor = "#408dd9";
    }
    if (style === "neon") {
        backgroundColor = "#b7fddc";
        borderColor = "#ce0167";
        numberColor = "#ce0167";
    }
    if (style === "cool-blues") {
        backgroundColor = "#11003e";
        borderColor = "#6ab7bc";
        numberColor = "#6ab7bc";
    }
    if (style === "invisible") {
        backgroundColor = "transparent";
        borderColor = "black";
        numberColor = "black";
    }
    $(".face").css('background-color', backgroundColor);
    $(".face").css('border-color', borderColor);
    $(".face").css('color', numberColor);
}

$(".style").change(function(){
    localStorage.setItem("dice-style", this.value);
    let style = this.value;
    let backgroundColor = '';
    let borderColor = '';
    let numberColor = ''

    if (style === "classic") {
        backgroundColor = "black";
        borderColor = "gray";
        numberColor = "white";
    }
    if (style === "blurple") {
        backgroundColor = "#370544";
        borderColor = "#408dd9";
        numberColor = "#408dd9";
    }
    if (style === "neon") {
        backgroundColor = "#b7fddc";
        borderColor = "#ce0167";
        numberColor = "#ce0167";
    }
    if (style === "cool-blues") {
        backgroundColor = "#11003e";
        borderColor = "#6ab7bc";
        numberColor = "#6ab7bc";
    }
    if (style === "invisible") {
        backgroundColor = "transparent";
        borderColor = "black";
        numberColor = "black";
    }
    $(".face").css('background-color', backgroundColor);
    $(".face").css('border-color', borderColor);
    $(".face").css('color', numberColor);
});

displayInitialModifier();

function displayInitialModifier() {
    let modifierFromStorage = parseInt(localStorage.getItem("modifier"));
    if (!modifierFromStorage) {
        modifierFromStorage = 0;
        localStorage.setItem("modifier", modifierFromStorage);
    }
    modifier = modifierFromStorage;
    $(`.modifier option[value=${modifierFromStorage}]`).attr('selected', '');
};

$(".modifier").change(function(){
    let newModifier = parseInt(this.value);
    localStorage.setItem("modifier", this.value);
    modifier = newModifier;
});

$(".roll-btn").click(function() {
    //Does not allow user to roll while a roll is currently happening
    if (isDiceRolling) {
        return;
    }

    isDiceRolling = true;

    setTimeout(function(){
        isDiceRolling = false;
    }, rollTime);

    // roll1 = Math.floor(Math.random() * 6 + 1);
    // roll2 = Math.floor(Math.random() * 6 + 1);

    // resetClasses();
    rollAllDice();
    // rollDiceOne();
    // rollDiceTwo();
    displayResult();
})

// function resetClasses() {
//     $(cubeOne).removeClass();
//     $(cubeOne).addClass("cube cube-one");
//     $(cubeTwo).removeClass();
//     $(cubeTwo).addClass("cube cube-two");
// }

function rollAllDice() {
    roll = 0;
    $(".cube").each(function() {
        let currentCube = this;
        let currentRoll = Math.floor(Math.random() * 6 + 1);
        let numberAsString = JSON.stringify(currentRoll);

        roll+= currentRoll;

        if ($(currentCube).hasClass("low")) {
            $(currentCube).removeClass();
            $(currentCube).addClass("cube high");
            $(currentCube).addClass(`face-${numberAsString}-high`);
            return;
        }

        $(currentCube).removeClass();
        $(currentCube).addClass("cube low");
        $(currentCube).addClass(`face-${numberAsString}-low`);
    });
}

// function rollDiceOne() {
//     roll1 = Math.floor(Math.random() * 6 + 1);

//     let numberAsString = JSON.stringify(roll1);

//     if (isDiceOneLow) {
//         $(cubeOne).addClass(`face-${numberAsString}-high`);
//         isDiceOneLow = false;
//         return;
//     }

//     $(cubeOne).addClass(`face-${numberAsString}-low`);
//     isDiceOneLow = true;
// }

// function rollDiceTwo() {
//     let numberAsString = JSON.stringify(roll2);

//     if (isDiceTwoLow) {
//         $(cubeTwo).addClass(`face-${numberAsString}-high`);
//         isDiceTwoLow = false;
//         return;
//     }

//     $(cubeTwo).addClass(`face-${numberAsString}-low`);
//     isDiceTwoLow = true;
// }

function displayResult() {
    const diceRollTotal = $(".total");
    setTimeout(function(){
      if (modifier == 0) {
        //   diceRollTotal.text(roll1 + roll2);
          diceRollTotal.text(roll);
      } else {
        //   diceRollTotal.text(`${roll1 + roll2} + ${modifier} = ${roll1 + roll2 + modifier}`);
          diceRollTotal.text(`${roll} + ${modifier} = ${roll + modifier}`);
      }
    }, rollTime);
}