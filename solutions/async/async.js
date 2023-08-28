//Q1;

setTimeout(
  function (text) {
    console.log(text);
  },
  3000,
  "Hello"
);

setTimeout(() => console.log("Hello"), 3000);

setTimeout(console.log, 3000, "Hello");

//Q2;
function callbackExec(callback) {
  if (typeof callback === "function") {
    setTimeout(() => {
      callback();
      console.log("Callback is executed after 2 seconds");
    }, 2000);
  }
}

function displayHello() {
  console.log("Hello");
}

callbackExec(displayHello);

//Q3;
function printSecond(number) {
  for (let i = 1; i <= number; i++) {
    setTimeout(() => console.log(i), 1000 * i);
  }
}

printSecond(10);
