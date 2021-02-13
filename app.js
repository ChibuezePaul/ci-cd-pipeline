const http = require("http");
const port = 3500;
http
.createServer((req, res) => res.end("Hello CI/CI Pipeline..."))
.listen(process.env.port || port, () => console.log(`CI/CD Pipleline Started On ${port}...`));
