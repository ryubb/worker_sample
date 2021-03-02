let connections = [];
self.addEventListener("connect", (e) => {
  var port = e.ports[0];
  connections.push(port);
  console.log("worker:addEventListener:connect");

  port.addEventListener("message", function (e) {
    console.log("worker:addEventListener:message");
    for (const connection of connections) {
      connection.postMessage(e.data);
    }
  });

  port.start();
});
