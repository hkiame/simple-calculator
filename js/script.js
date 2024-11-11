let buttons = document.querySelectorAll("#buttons .addToView");
let view = document.querySelector("#view");
let evaluate = document.querySelector("#evaluate");
let clear = document.querySelector("#clear");

buttons.forEach((button, idx) => {
  button.addEventListener(
    "click",
    (e) => {
      view.value += button.textContent;
    },
    false
  );
});

clear.addEventListener(
  "click",
  () => {
    view.value = "";
  },
  false
);

evaluate.addEventListener(
  "click",
  () => {
    try {
      view.value = eval(view.value);
    } catch (error) {
      view.value = "Syntax Error";
    }
  },
  false
);
