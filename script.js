const cubeOne = $(".cube-one");
const cubeTwo = $(".cube-two");

let isDiceOneLow = true;
let isDiceTwoLow = true;
let isDiceRolling = false;
let roll1 = 0;
let roll2 = 0;
let rollTime = 750;
let modifier = 0;

// $(".dice-color").change(function(){
//     let diceColor = this.value;
//     $('.face').css('background-color', diceColor);
// });

// $(".number-color").change(function(){
//     let numberColor = this.value;
//     $('.face').css('color', numberColor);
// });

$(".modifier").change(function(){
    let newModifier = parseInt(this.value);
    modifier = newModifier;
});

$(".style").change(function(){
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
    if (style === "cool blues") {
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

$(".roll-btn").click(function() {
    let firstRoll = Math.floor(Math.random() * 6 + 1);
    let secondRoll = Math.floor(Math.random() * 6 + 1);
    
    if (isDiceRolling) {
        return;
    }

    handleFirstRoll(firstRoll);
    handleSecondRoll(secondRoll);

    isDiceRolling = true;

    setTimeout(function(){
        isDiceRolling = false;
     }, rollTime);

})

function handleFirstRoll(firstRoll) {
    return (firstRoll == 1) ? diceOneDisplayOne() : (firstRoll == 2) ? diceOneDisplayTwo() :
    (firstRoll == 3) ? diceOneDisplayThree() :
    (firstRoll == 4) ? diceOneDisplayFour() :
    (firstRoll == 5) ? diceOneDisplayFive() :
    diceOneDisplaySix();
}
  
function handleSecondRoll(secondRoll) {
    return (secondRoll == 1) ? diceTwoDisplayOne() : (secondRoll == 2) ? diceTwoDisplayTwo() :
    (secondRoll == 3) ? diceTwoDisplayThree() :
    (secondRoll == 4) ? diceTwoDisplayFour() :
    (secondRoll == 5) ? diceTwoDisplayFive() :
    diceTwoDisplaySix();
}

function showTotal() {
  const diceRollTotal = $(".total");
  setTimeout(function(){
    if (modifier == 0) {
        diceRollTotal.text(roll1 + roll2);
    } else {
        diceRollTotal.text(`${roll1 + roll2} + ${modifier} = ${roll1 + roll2 + modifier}`);
    }
  }, rollTime);
}

function removeClassesOne() {
    $(cubeOne).removeClass();
    $(cubeOne).addClass("cube cube-one");
}

function removeClassesTwo() {
    $(cubeTwo).removeClass();
    $(cubeTwo).addClass("cube cube-two");
}

function diceOneDisplayOne() {

    removeClassesOne();

    roll1 = 1;

    showTotal();

    if (isDiceOneLow) {
        $(cubeOne).addClass("one-face-high");
        isDiceOneLow = false;
        return;
    }
    if (!isDiceOneLow) {
        $(cubeOne).addClass("one-face-low");
        isDiceOneLow = true;
        return;
    }
}

function diceOneDisplayTwo() {
    removeClassesOne();

    roll1 = 2;

    showTotal();

    if (isDiceOneLow) {
        $(cubeOne).addClass("two-face-high");
        isDiceOneLow = false;
        return;
    }
    if (!isDiceOneLow) {
        $(cubeOne).addClass("two-face-low");
        isDiceOneLow = true;
        return;
    }
}

function diceOneDisplayThree() {
    removeClassesOne();

    roll1 = 3;

    showTotal();

    if (isDiceOneLow) {
        $(cubeOne).addClass("three-face-high");
        isDiceOneLow = false;
        return;
    }
    if (!isDiceOneLow) {
        $(cubeOne).addClass("three-face-low");
        isDiceOneLow = true;
        return;
    }
}

function diceOneDisplayFour() {
    removeClassesOne();

    roll1 = 4;

    showTotal();

    if (isDiceOneLow) {
        $(cubeOne).addClass("four-face-high");
        isDiceOneLow = false;
        return;
    }
    if (!isDiceOneLow) {
        $(cubeOne).addClass("four-face-low");
        isDiceOneLow = true;
        return;
    }
}

function diceOneDisplayFive() {
    removeClassesOne();

    roll1 = 5;

    showTotal();

    if (isDiceOneLow) {
        $(cubeOne).addClass("five-face-high");
        isDiceOneLow = false;
        return;
    }
    if (!isDiceOneLow) {
        $(cubeOne).addClass("five-face-low");
        isDiceOneLow = true;
        return;
    }
}

function diceOneDisplaySix() {
    removeClassesOne();

    roll1 = 6;

    showTotal();

    if (isDiceOneLow) {
        $(cubeOne).addClass("six-face-high");
        isDiceOneLow = false;
        return;
    }
    if (!isDiceOneLow) {
        $(cubeOne).addClass("six-face-low");
        isDiceOneLow = true;
        return;
    }
}

function diceTwoDisplayOne() {
    removeClassesTwo();

    roll2 = 1;

    showTotal();

    if (isDiceTwoLow) {
        $(cubeTwo).addClass("one-face-high");
        isDiceTwoLow = false;
        return;
    }
    if (!isDiceTwoLow) {
        $(cubeTwo).addClass("one-face-low");
        isDiceTwoLow = true;
        return;
    }
}

function diceTwoDisplayTwo() {
    removeClassesTwo();

    roll2 = 2;

    showTotal();

    if (isDiceTwoLow) {
        $(cubeTwo).addClass("two-face-high");
        isDiceTwoLow = false;
        return;
    }
    if (!isDiceTwoLow) {
        $(cubeTwo).addClass("two-face-low");
        isDiceTwoLow = true;
        return;
    }
}

function diceTwoDisplayThree() {
    removeClassesTwo();

    roll2 = 3;

    showTotal();

    if (isDiceTwoLow) {
        $(cubeTwo).addClass("three-face-high");
        isDiceTwoLow = false;
        return;
    }
    if (!isDiceTwoLow) {
        $(cubeTwo).addClass("three-face-low");
        isDiceTwoLow = true;
        return;
    }
}

function diceTwoDisplayFour() {
    removeClassesTwo();

    roll2 = 4;

    showTotal();

    if (isDiceTwoLow) {
        $(cubeTwo).addClass("four-face-high");
        isDiceTwoLow = false;
        return;
    }
    if (!isDiceTwoLow) {
        $(cubeTwo).addClass("four-face-low");
        isDiceTwoLow = true;
        return;
    }
}

function diceTwoDisplayFive() {
    removeClassesTwo();

    roll2 = 5;

    showTotal();

    if (isDiceTwoLow) {
        $(cubeTwo).addClass("five-face-high");
        isDiceTwoLow = false;
        return;
    }
    if (!isDiceTwoLow) {
        $(cubeTwo).addClass("five-face-low");
        isDiceTwoLow = true;
        return;
    }
}

function diceTwoDisplaySix() {
    removeClassesTwo();

    roll2 = 6;

    showTotal();

    if (isDiceTwoLow) {
        $(cubeTwo).addClass("six-face-high");
        isDiceTwoLow = false;
        return;
    }
    if (!isDiceTwoLow) {
        $(cubeTwo).addClass("six-face-low");
        isDiceTwoLow = true;
        return;
    }
}