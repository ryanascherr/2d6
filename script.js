const cubeOne = $(".cube-one");
const cubeTwo = $(".cube-two");
const classes = ["slanted face", "one-face", "one-face-again", "two-face", "two-face-again", "three-face", "three-face-again", "four-face", "four-face-again", "five-face", "five-face-again", "six-face", "six-face-again"];
let roll1 = 0;
let roll2 = 0;

function showTotal() {
  const totalText = $(".total");
  setTimeout(function(){
 	totalText.text(roll1 + roll2);
  }, 750);
}

function removeClassesOne() {
    $(cubeOne).removeClass();
    $(cubeOne).addClass("cube cube-one");
//   $(cubeOne).removeClass("slanted-face");
//   $(cubeOne).removeClass("one-face");
//   $(cubeOne).removeClass("one-again-face");
//   $(cubeOne).removeClass("two-face");
//   $(cubeOne).removeClass("two-again-face");
//   $(cubeOne).removeClass("three-face");
//   $(cubeOne).removeClass("three-again-face");
//   $(cubeOne).removeClass("four-face");
//   $(cubeOne).removeClass("four-again-face");
//   $(cubeOne).removeClass("five-face");
//   $(cubeOne).removeClass("five-again-face");
//   $(cubeOne).removeClass("six-face");
//   $(cubeOne).removeClass("six-again-face");
}

function removeClassesTwo() {
    $(cubeTwo).removeClass();
    $(cubeTwo).addClass("cube cube-two");
//   $(cubeTwo).removeClass("slanted-face");
//   $(cubeTwo).removeClass("one-face");
//   $(cubeTwo).removeClass("one-again-face");
//   $(cubeTwo).removeClass("two-face");
//   $(cubeTwo).removeClass("two-again-face");
//   $(cubeTwo).removeClass("three-face");
//   $(cubeTwo).removeClass("three-again-face");
//   $(cubeTwo).removeClass("four-face");
//   $(cubeTwo).removeClass("four-again-face");
//   $(cubeTwo).removeClass("five-face");
//   $(cubeTwo).removeClass("five-again-face");
//   $(cubeTwo).removeClass("six-face");
//   $(cubeTwo).removeClass("six-again-face");
}

function rollOne() {
  let isRepeat = false;
  if($(cubeOne).hasClass("one-face")) {
    isRepeat = true;
  };
  removeClassesOne();
  if (isRepeat === true && !$(cubeOne).hasClass("one-again-face")) {
    $(cubeOne).addClass("one-again-face");
  } else {
    $(cubeOne).addClass("one-face");
  }
  roll1 = 1;
  showTotal();
}

function rollTwo() {
  let isRepeat = false;
  if($(cubeOne).hasClass("two-face")) {
    isRepeat = true;
  };
  removeClassesOne();
  if (isRepeat === true && !$(cubeOne).hasClass("two-again-face")) {
    $(cubeOne).addClass("two-again-face");
  } else {
    $(cubeOne).addClass("two-face");
  }
  roll1 = 2;
  showTotal();
}

function rollThree() {
  let isRepeat = false;
  if($(cubeOne).hasClass("three-face")) {
    isRepeat = true;
  };
  removeClassesOne();
  if (isRepeat === true && !$(cubeOne).hasClass("three-again-face")) {
    $(cubeOne).addClass("three-again-face");
  } else {
    $(cubeOne).addClass("three-face");
  }
  roll1 = 3;
  showTotal();
}

function rollFour() {
  let isRepeat = false;
  if($(cubeOne).hasClass("four-face")) {
    isRepeat = true;
  };
  removeClassesOne();
  if (isRepeat === true && !$(cubeOne).hasClass("four-again-face")) {
    $(cubeOne).addClass("four-again-face");
  } else {
    $(cubeOne).addClass("four-face");
  }
  roll1 = 4;
  showTotal();
}

function rollFive() {
  let isRepeat = false;
  if($(cubeOne).hasClass("five-face")) {
    isRepeat = true;
  };
  removeClassesOne();
  if (isRepeat === true && !$(cubeOne).hasClass("five-again-face")) {
    $(cubeOne).addClass("five-again-face");
  } else {
    $(cubeOne).addClass("five-face");
  }
  roll1 = 5;
  showTotal();
}

function rollSix() {
  let isRepeat = false;
  if($(cubeOne).hasClass("six-face")) {
    isRepeat = true;
  };
  removeClassesOne();
  if (isRepeat === true && !$(cubeOne).hasClass("six-again-face")) {
    $(cubeOne).addClass("six-again-face");
  } else {
    $(cubeOne).addClass("six-face");
  }
  roll1 = 6;
  showTotal();
}

function rollOneDos() {
  let isRepeat = false;
  if($(cubeTwo).hasClass("one-face")) {
    isRepeat = true;
  };
  removeClassesTwo();
  if (isRepeat === true && !$(cubeTwo).hasClass("one-again-face")) {
    $(cubeTwo).addClass("one-again-face");
  } else {
    $(cubeTwo).addClass("one-face");
  }
  roll2 = 1;
  showTotal();
}

function rollTwoDos() {
  let isRepeat = false;
  if($(cubeTwo).hasClass("two-face")) {
    isRepeat = true;
  };
  removeClassesTwo();
  if (isRepeat === true && !$(cubeTwo).hasClass("two-again-face")) {
    $(cubeTwo).addClass("two-again-face");
  } else {
    $(cubeTwo).addClass("two-face");
  }
  roll2 = 2;
  showTotal();
}

function rollThreeDos() {
  let isRepeat = false;
  if($(cubeTwo).hasClass("three-face")) {
    isRepeat = true;
  };
  removeClassesTwo();
  if (isRepeat === true && !$(cubeTwo).hasClass("three-again-face")) {
    $(cubeTwo).addClass("three-again-face");
  } else {
    $(cubeTwo).addClass("three-face");
  }
  roll2 = 3;
  showTotal();
}

function rollFourDos() {
  let isRepeat = false;
  if($(cubeTwo).hasClass("four-face")) {
    isRepeat = true;
  };
  removeClassesTwo();
  if (isRepeat === true && !$(cubeTwo).hasClass("four-again-face")) {
    $(cubeTwo).addClass("four-again-face");
  } else {
    $(cubeTwo).addClass("four-face");
  }
  roll2 = 4;
  showTotal();
}

function rollFiveDos() {
  let isRepeat = false;
  if($(cubeTwo).hasClass("five-face")) {
    isRepeat = true;
  };
  removeClassesTwo();
  if (isRepeat === true && !$(cubeTwo).hasClass("five-again-face")) {
    $(cubeTwo).addClass("five-again-face");
  } else {
    $(cubeTwo).addClass("five-face");
  }
  roll2 = 5;
  showTotal();
}

function rollSixDos() {
  let isRepeat = false;
  if($(cubeTwo).hasClass("six-face")) {
    isRepeat = true;
  };
  removeClassesTwo();
  if (isRepeat === true && !$(cubeTwo).hasClass("six-again-face")) {
    $(cubeTwo).addClass("six-again-face");
  } else {
    $(cubeTwo).addClass("six-face");
  }
  roll2 = 6;
  showTotal();
}

document.querySelector(".random").onclick = function() {
  let firstRoll = Math.floor(Math.random() * 6 + 1);
  let secondRoll = Math.floor(Math.random() * 6 + 1);
  handleFirstRoll(firstRoll);
  handleSecondRoll(secondRoll);
}

function handleFirstRoll(firstRoll) {
  if (firstRoll == 1) {
    rollOne();
    return;
  }
  if (firstRoll == 2) {
    rollTwo();
    return;
  }
  if (firstRoll == 3) {
    rollThree();
    return;
  }
  if (firstRoll == 4) {
    rollFour();
    return;
  }
  if (firstRoll == 5) {
    rollFive();
    return;
  }
  if (firstRoll == 6) {
    rollSix();
    return;
  }
  return;
}

function handleSecondRoll(secondRoll) {
  if (secondRoll == 1) {
    rollOneDos();
    return;
  }
  if (secondRoll == 2) {
    rollTwoDos();
    return;
  }
  if (secondRoll == 3) {
    rollThreeDos();
    return;
  }
  if (secondRoll == 4) {
    rollFourDos();
    return;
  }
  if (secondRoll == 5) {
    rollFiveDos();
    return;
  }
  if (secondRoll == 6) {
    rollSixDos();
    return;
  }
  return;
}