let isDiceRolling = false;
let roll = 0;
let rollTime = 750;
let modifier = 0;
let numberOfDice = 2;
let log = [];
let isLogShown = true;
let style = "classic";

getDiceNumber();
function getDiceNumber() {
    numberOfDice = localStorage.getItem("number-of-dice");

    if (!numberOfDice) {
        numberOfDice = 2;
        localStorage.setItem("number-of-dice", numberOfDice);
    }
}

setDiceNumber();
function setDiceNumber() {
    $(`.number-of-dice option[value=${numberOfDice}]`).attr('selected', '');

    for (let i = 0; i < numberOfDice; i++) {
        let face = Math.floor(Math.random() * 6 + 1);

        $('.dice-container').append(`<div class="grow cube face-${face}-low low"><div class="face front">1</div><div class="face back">6</div><div class="face bottom">2</div><div class="face left">3</div><div class="face right">4</div><div class="face top">5</div></div>`);
    }
}

getDiceStyle();
function getDiceStyle() {
    style = localStorage.getItem("style");

    if (!style) {
        style = "classic";
        localStorage.setItem("style", style);
    }
}

setDiceStyle();
function setDiceStyle() {
    $(`.style option[value=${style}]`).attr('selected', '');

    let backgroundColor = $(".style").find(':selected').data('bgc');
    let borderColor = $(".style").find(':selected').data('bc');
    let numberColor = $(".style").find(':selected').data('nc');

    $(".face").css({'background-color': backgroundColor, 'border-color' : borderColor, 'color': numberColor});
}

getDiceModifier();
function getDiceModifier() {
    modifier = parseInt(localStorage.getItem("modifier"));

    if (!modifier) {
        modifier = 0;
        localStorage.setItem("modifier", modifier);
    }
}

setDiceModifier();
function setDiceModifier() {
    $(`.modifier option[value=${modifier}]`).attr('selected', '');
}

$(".number-of-dice").change(function(){
    localStorage.setItem("number-of-dice", this.value);
    $(".dice-container").empty();
    getDiceNumber();
    setDiceNumber();
    getDiceStyle();
    setDiceStyle();
});

$(".style").change(function(){
    localStorage.setItem("style", this.value);
    getDiceStyle();
    setDiceStyle();
});

$(".modifier").change(function(){
    localStorage.setItem("modifier", this.value);
    getDiceModifier();
    setDiceModifier();
});

$(".roll-btn").click(function() {
    if (isDiceRolling) return;
    isDiceRolling = true;

    setTimeout(function(){
        isDiceRolling = false;
    }, rollTime);

    rollAllDice();
    displayResult();
});

function rollAllDice() {
    roll = 0;

    $(".cube").each(function() {
        let currentCube = this;
        let currentRoll = Math.floor(Math.random() * 6 + 1);
        let numberAsString = JSON.stringify(currentRoll);

        roll += currentRoll;

        if ($(currentCube).hasClass("low")) {
            $(currentCube).removeClass();
            $(currentCube).addClass("cube high");
            $(currentCube).addClass(`face-${numberAsString}-high`);
        } else {
            $(currentCube).removeClass();
            $(currentCube).addClass("cube low");
            $(currentCube).addClass(`face-${numberAsString}-low`);
        }
    })
}

function displayResult() {
    const diceRollTotal = $(".total");

    setTimeout(function(){
      if (modifier == 0) {
        diceRollTotal.text(roll);
      } else {
        diceRollTotal.text(`${roll} + ${modifier} = ${roll + modifier}`);
      }
      addToLog(); 
    }, rollTime);
}

function addToLog() {
    if (modifier == 0) {
        $('.log').prepend(`<h3 class="log-item">Roll ${numberOfDice}d6 = ${roll}<h3>`);
    } else {
        $('.log').prepend(`<h3 class="log-item">Roll ${numberOfDice}d6 + ${modifier} = ${roll + modifier}<h3>`);
    }
}

$(".log-toggle").click(function() {
    toggleLog();
})

function toggleLog() {
    if (isLogShown) {
        $(".log").addClass("hidden");
        $(".log-toggle").html("&#8593;");
        isLogShown = false;
    } else {
        $(".log").removeClass("hidden");
        $(".log-toggle").html("&#8595;")
        isLogShown = true;
    }
}