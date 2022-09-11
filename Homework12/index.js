const http = require('http');
const os = require("os");
const cors = require("cors")
const bodyParser = require("body-parser")
const express = require("express")

const app = express()

const hostname = '127.0.0.1';
const port = 4000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.end('System Operation ' + os.userInfo().username + " " + os.type() + " " + os.uptime() + " " + os.tmpdir() + " " + os.platform() + " " + require("./personalmodule")(os.userInfo().username));
// });


app.use(cors({ origin: "http://127.0.0.1:5500" }))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', function(req, res) {
  res.send('System Operation ' + os.userInfo().username + "<br>" + os.type() + " " + os.uptime() + " " + os.tmpdir() + " " + os.platform() + " " + require("./personalmodule")(os.userInfo().username));
});

app.get('/books', function(req, res) {
  res.json(require("./books.json"));
});

app.get('/vote', function(req, res) {
  res.json(new Date().toISOString());
});

app.listen(port, hostname, () => {
//   console.log(process);
  console.log(`Server running at http://${hostname}:${port}/`);
});