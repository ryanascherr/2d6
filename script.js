let cubeOne = document.querySelector(".cube-one");
let cubeTwo = document.querySelector(".cube-two");
let roll1 = 0;
let roll2 = 0;

// document.querySelector(".one").onclick = function() {
//   rollOne();
//   total = 1;
//   showTotal();
// };

// document.querySelector(".two").onclick = function() {
//   rollTwo();
//   total = 2;
//   showTotal();
// };

// document.querySelector(".three").onclick = function() {
//   rollThree();
//   total = 3;
//   showTotal();
// };

// document.querySelector(".four").onclick = function() {
//   rollFour();
//   total = 4;
//   showTotal();
// };

// document.querySelector(".five").onclick = function() {
//   rollFive();
//   total = 5;
//   showTotal();
// };

// document.querySelector(".six").onclick = function() {
//   rollSix();
//   total = 6;
//   showTotal();
// };

function showTotal() {
  console.log(roll1);
  console.log(roll2);
  let totalText = document.querySelector(".total");
  setTimeout(function(){
 	totalText.textContent = roll1 + roll2;
  }, 750);
}

function removeClassesOne() {
  cubeOne.classList.remove("slanted-face");
  cubeOne.classList.remove("one-face");
  cubeOne.classList.remove("one-again-face");
  cubeOne.classList.remove("two-face");
  cubeOne.classList.remove("two-again-face");
  cubeOne.classList.remove("three-face");
  cubeOne.classList.remove("three-again-face");
  cubeOne.classList.remove("four-face");
  cubeOne.classList.remove("four-again-face");
  cubeOne.classList.remove("five-face");
  cubeOne.classList.remove("five-again-face");
  cubeOne.classList.remove("six-face");
  cubeOne.classList.remove("six-again-face");
}

function removeClassesTwo() {
  cubeTwo.classList.remove("slanted-face");
  cubeTwo.classList.remove("one-face");
  cubeTwo.classList.remove("one-again-face");
  cubeTwo.classList.remove("two-face");
  cubeTwo.classList.remove("two-again-face");
  cubeTwo.classList.remove("three-face");
  cubeTwo.classList.remove("three-again-face");
  cubeTwo.classList.remove("four-face");
  cubeTwo.classList.remove("four-again-face");
  cubeTwo.classList.remove("five-face");
  cubeTwo.classList.remove("five-again-face");
  cubeTwo.classList.remove("six-face");
  cubeTwo.classList.remove("six-again-face");
}

function rollOne() {
  let isRepeat = false;
  if(cubeOne.classList.contains("one-face")) {
    isRepeat = true;
  };
  removeClassesOne();
  if (isRepeat === true && !cubeOne.classList.contains("one-again-face")) {
    cubeOne.classList.add("one-again-face");
  } else {
    cubeOne.classList.add("one-face");
  }
  roll1 = 1;
  showTotal();
}

function rollTwo() {
  let isRepeat = false;
  if(cubeOne.classList.contains("two-face")) {
    isRepeat = true;
  };
  removeClassesOne();
  if (isRepeat === true && !cubeOne.classList.contains("two-again-face")) {
    cubeOne.classList.add("two-again-face");
  } else {
    cubeOne.classList.add("two-face");
  }
  roll1 = 2;
  showTotal();
}

function rollThree() {
  let isRepeat = false;
  if(cubeOne.classList.contains("three-face")) {
    isRepeat = true;
  };
  removeClassesOne();
  if (isRepeat === true && !cubeOne.classList.contains("three-again-face")) {
    cubeOne.classList.add("three-again-face");
  } else {
    cubeOne.classList.add("three-face");
  }
  roll1 = 3;
  showTotal();
}

function rollFour() {
  let isRepeat = false;
  if(cubeOne.classList.contains("four-face")) {
    isRepeat = true;
  };
  removeClassesOne();
  if (isRepeat === true && !cubeOne.classList.contains("four-again-face")) {
    cubeOne.classList.add("four-again-face");
  } else {
    cubeOne.classList.add("four-face");
  }
  roll1 = 4;
  showTotal();
}

function rollFive() {
  let isRepeat = false;
  if(cubeOne.classList.contains("five-face")) {
    isRepeat = true;
  };
  removeClassesOne();
  if (isRepeat === true && !cubeOne.classList.contains("five-again-face")) {
    cubeOne.classList.add("five-again-face");
  } else {
    cubeOne.classList.add("five-face");
  }
  roll1 = 5;
  showTotal();
}

function rollSix() {
  let isRepeat = false;
  if(cubeOne.classList.contains("six-face")) {
    isRepeat = true;
  };
  removeClassesOne();
  if (isRepeat === true && !cubeOne.classList.contains("six-again-face")) {
    cubeOne.classList.add("six-again-face");
  } else {
    cubeOne.classList.add("six-face");
  }
  roll1 = 6;
  showTotal();
}

function rollOneDos() {
  let isRepeat = false;
  if(cubeTwo.classList.contains("one-face")) {
    isRepeat = true;
  };
  removeClassesTwo();
  if (isRepeat === true && !cubeTwo.classList.contains("one-again-face")) {
    cubeTwo.classList.add("one-again-face");
  } else {
    cubeTwo.classList.add("one-face");
  }
  roll2 = 1;
  showTotal();
}

function rollTwoDos() {
  let isRepeat = false;
  if(cubeTwo.classList.contains("two-face")) {
    isRepeat = true;
  };
  removeClassesTwo();
  if (isRepeat === true && !cubeTwo.classList.contains("two-again-face")) {
    cubeTwo.classList.add("two-again-face");
  } else {
    cubeTwo.classList.add("two-face");
  }
  roll2 = 2;
  showTotal();
}

function rollThreeDos() {
  let isRepeat = false;
  if(cubeTwo.classList.contains("three-face")) {
    isRepeat = true;
  };
  removeClassesTwo();
  if (isRepeat === true && !cubeTwo.classList.contains("three-again-face")) {
    cubeTwo.classList.add("three-again-face");
  } else {
    cubeTwo.classList.add("three-face");
  }
  roll2 = 3;
  showTotal();
}

function rollFourDos() {
  let isRepeat = false;
  if(cubeTwo.classList.contains("four-face")) {
    isRepeat = true;
  };
  removeClassesTwo();
  if (isRepeat === true && !cubeTwo.classList.contains("four-again-face")) {
    cubeTwo.classList.add("four-again-face");
  } else {
    cubeTwo.classList.add("four-face");
  }
  roll2 = 4;
  showTotal();
}

function rollFiveDos() {
  let isRepeat = false;
  if(cubeTwo.classList.contains("five-face")) {
    isRepeat = true;
  };
  removeClassesTwo();
  if (isRepeat === true && !cubeTwo.classList.contains("five-again-face")) {
    cubeTwo.classList.add("five-again-face");
  } else {
    cubeTwo.classList.add("five-face");
  }
  roll2 = 5;
  showTotal();
}

function rollSixDos() {
  let isRepeat = false;
  if(cubeTwo.classList.contains("six-face")) {
    isRepeat = true;
  };
  removeClassesTwo();
  if (isRepeat === true && !cubeTwo.classList.contains("six-again-face")) {
    cubeTwo.classList.add("six-again-face");
  } else {
    cubeTwo.classList.add("six-face");
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
    console.log("first roll: " + firstRoll);
    rollOne();
    return;
  }
  if (firstRoll == 2) {
    console.log("first roll: " + firstRoll);
    rollTwo();
    return;
  }
  if (firstRoll == 3) {
    console.log("first roll: " + firstRoll);
    rollThree();
    return;
  }
  if (firstRoll == 4) {
    console.log("first roll: " + firstRoll);
    rollFour();
    return;
  }
  if (firstRoll == 5) {
    console.log("first roll: " + firstRoll);
    rollFive();
    return;
  }
  if (firstRoll == 6) {
    console.log("first roll: " + firstRoll);
    rollSix();
    return;
  }
  return;
}

function handleSecondRoll(secondRoll) {
  if (secondRoll == 1) {
    console.log("second roll: " + secondRoll);
    rollOneDos();
    return;
  }
  if (secondRoll == 2) {
    console.log("second roll: " + secondRoll);
    rollTwoDos();
    return;
  }
  if (secondRoll == 3) {
    console.log("second roll: " + secondRoll);
    rollThreeDos();
    return;
  }
  if (secondRoll == 4) {
    console.log("second roll: " + secondRoll);
    rollFourDos();
    return;
  }
  if (secondRoll == 5) {
    console.log("second roll: " + secondRoll);
    rollFiveDos();
    return;
  }
  if (secondRoll == 6) {
    console.log("second roll: " + secondRoll);
    rollSixDos();
    return;
  }
  return;
}