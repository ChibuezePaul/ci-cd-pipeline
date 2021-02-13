const http = require("http");
const port = process.env.port;
http
.createServer((req, res) => res.end("Hello CI/CI Pipeline..."))
.listen(port, () => console.log(`CI/CD Pipleline Started On ${port}...`));
