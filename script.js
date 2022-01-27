const cubeOne = $(".cube-one");
const cubeTwo = $(".cube-two");
let isDiceOneLow = true;
let isDiceTwoLow = true;
let roll1 = 0;
let roll2 = 0;

$(".roll-btn").click(function() {
    let firstRoll = Math.floor(Math.random() * 6 + 1);
    let secondRoll = Math.floor(Math.random() * 6 + 1);
    handleFirstRoll(firstRoll);
    handleSecondRoll(secondRoll);
})

function handleFirstRoll(firstRoll) {
    if (firstRoll == 1) {
      diceOneDisplayOne();
      return;
    }
    if (firstRoll == 2) {
      diceOneDisplayTwo();
      return;
    }
    if (firstRoll == 3) {
      diceOneDisplayThree();
      return;
    }
    if (firstRoll == 4) {
      diceOneDisplayFour();
      return;
    }
    if (firstRoll == 5) {
      diceOneDisplayFive();
      return;
    }
    if (firstRoll == 6) {
      diceOneDisplaySix();
      return;
    }
    return;
  }
  
function handleSecondRoll(secondRoll) {
if (secondRoll == 1) {
    diceTwoDisplayOne();
    return;
}
if (secondRoll == 2) {
    diceTwoDisplayTwo();
    return;
}
if (secondRoll == 3) {
    diceTwoDisplayThree();
    return;
}
if (secondRoll == 4) {
    diceTwoDisplayFour();
    return;
}
if (secondRoll == 5) {
    diceTwoDisplayFive();
    return;
}
if (secondRoll == 6) {
    diceTwoDisplaySix();
    return;
}
return;
}

function showTotal() {
    console.log("hey");
  const diceRollTotal = $(".total");
  setTimeout(function(){
 	diceRollTotal.text(roll1 + roll2);
  }, 750);
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