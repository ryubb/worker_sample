window.onload = function () {
  const $button = document.getElementById("button");
  const $list = document.getElementById("list");
  const myWorker = new SharedWorker("worker.js");
  myWorker.port.start();

  button.addEventListener("click", (e) => {
    const $text = document.getElementById("text");
    myWorker.port.postMessage($text.value);
    console.log("Message posted to worker");
  });

  myWorker.port.addEventListener("message", (e) => {
    console.log("message received from worker to main");
    var li = document.createElement("li");
    li.textContent = e.data;
    $list.appendChild(li);
  });
};
