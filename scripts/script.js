// output scree element
// output scree element

let outputScreen = document.getElementById("output-screen");

// display numbers on the screen
function display(num) {
  outputScreen.value = num + outputScreen.value;
}

// calculate the values (=)
function Calculate() {
  try {
    outputScreen.value = eval(outputScreen.value);
  } catch (err) {
    alert("Invalid");
  }
}

// clear the values on the screen
function Clear() {
  outputScreen.value = "";
}

// delete the values one by one
function del() {
  outputScreen.value = outputScreen.value.slice(0, -1);
}
