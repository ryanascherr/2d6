let isDiceOneLow = true;
let isDiceTwoLow = true;
let isDiceRolling = false;
let roll = 0;
let rollTime = 750;
let modifier = 0;
let numberOfDice = 1;

displayInitialDiceNumber();
displayInitialDiceStyle();
displayInitialModifier();

function displayInitialDiceNumber() {
    let numberOfDice = localStorage.getItem("number-of-dice");

    if (!numberOfDice) {
        numberOfDice = 2;
        localStorage.setItem("number-of-dice", numberOfDice);
    }

    $(`.number-of-dice option[value=${numberOfDice}]`).attr('selected', '');

    // Add html for however many dice have been selected
    for (let i = 0; i < numberOfDice; i++) {
        $('.container').append('<div class="cube face-2-low low"><div class="face front">1</div><div class="face back">6</div><div class="face bottom">2</div><div class="face left">3</div><div class="face right">4</div><div class="face top">5</div></div>');
    }
};

function displayInitialDiceStyle() {
    let style = localStorage.getItem("dice-style");

    if (!style) {
        style = "classic";
        localStorage.setItem("style", style);
    }

    $(`.style option[value=${style}]`).attr('selected', '');

    let backgroundColor = $(".style").find(':selected').data('bgc');
    let borderColor = $(".style").find(':selected').data('bc');
    let numberColor = $(".style").find(':selected').data('nc');

    $(".face").css('background-color', backgroundColor);
    $(".face").css('border-color', borderColor);
    $(".face").css('color', numberColor);
}

function displayInitialModifier() {
    let modifierFromStorage = parseInt(localStorage.getItem("modifier"));

    if (!modifierFromStorage) {
        modifierFromStorage = 0;
        localStorage.setItem("modifier", modifierFromStorage);
    }

    $(`.modifier option[value=${modifierFromStorage}]`).attr('selected', '');

    modifier = modifierFromStorage;
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

$(".style").change(function(){
    localStorage.setItem("dice-style", this.value);

    let backgroundColor = $(this).find(':selected').data('bgc');
    let borderColor = $(this).find(':selected').data('bc');
    let numberColor = $(this).find(':selected').data('nc');

    $(".face").css('background-color', backgroundColor);
    $(".face").css('border-color', borderColor);
    $(".face").css('color', numberColor);
});

$(".modifier").change(function(){
    let newModifier = parseInt(this.value);

    localStorage.setItem("modifier", this.value);

    modifier = newModifier;
});

$(".roll-btn").click(function() {
    if (isDiceRolling) return;

    isDiceRolling = true;

    setTimeout(function(){
        isDiceRolling = false;
    }, rollTime);

    rollAllDice();
    displayResult();
})

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

function displayResult() {
    const diceRollTotal = $(".total");

    setTimeout(function(){
      if (modifier == 0) {
          diceRollTotal.text(roll);
          return;
      } 
    
      diceRollTotal.text(`${roll} + ${modifier} = ${roll + modifier}`);
      
    }, rollTime);
}