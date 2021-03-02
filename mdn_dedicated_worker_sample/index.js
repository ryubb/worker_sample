window.onload = function () {
  const first = document.getElementById("first");
  const second = document.getElementById("second");

  const myWorker = new Worker("worker.js");

  first.onchange = function () {
    myWorker.postMessage([first.value, second.value]);
    console.log("Message posted to worker");
  };

  second.onchange = function () {
    myWorker.postMessage([first.value, second.value]);
    console.log("Message posted to worker");
  };

  myWorker.addEventListener("message", (e) => {
    console.log("message received from worker to main");
  });
};
