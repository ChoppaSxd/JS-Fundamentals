const http = require('http');
const os = require("os")

const hostname = '127.0.0.1';
const port = 4000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end('System Operation ' + os.userInfo().username + " " + os.type() + " " + os.uptime() + " " + os.tmpdir() + " " + os.platform() + " " + require("./personalmodule")(os.userInfo().username));
});

server.listen(port, hostname, () => {
//   console.log(process);
  console.log(`Server running at http://${hostname}:${port}/`);
});