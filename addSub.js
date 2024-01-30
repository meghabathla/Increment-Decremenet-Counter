let difference;
let currentValue = 0;

const handleIncrement = () => {
  console.log(" clicked Add");
  difference = parseInt(document.querySelector("#change_num").value);
  if (difference === "" || isNaN(difference) || difference < 0) {
    outputContainer.innerHTML = `please enter valid number ${difference}`;
  } else {
    currentValue = currentValue + difference;
    outputContainer.innerHTML = currentValue;
  }
};

const handleDecrement = () => {
  console.log("clicked subtract button");
  difference = parseInt(document.querySelector("#change_num").value);
  if (difference === "" || isNaN(difference) || difference < 0) {
    outputContainer.innerHTML = `please enter valid number ${difference}`;
  } else {
    currentValue = currentValue - difference;
    outputContainer.innerHTML = currentValue;
  }
};

const handleReset = () => {
  console.log("reset clicked");
  currentValue = 0;
  outputContainer.innerHTML = currentValue;
};

const outputContainer = document.querySelector("#output_num");
document.querySelector("#add").addEventListener("click", handleIncrement);
document.querySelector("#subtract").addEventListener("click", handleDecrement);
document.querySelector("#reset").addEventListener("click", handleReset);
