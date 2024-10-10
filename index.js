//SERVER
const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello from the server");
});

//listing to the port 8000
server.listen(8000, "127.0.0.1", () => {
  console.log("Server listening on port 8000");
});
