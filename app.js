const http = require("http");
const port = process.env.PORT;
http
.createServer((req, res) => res.end("Hello CI/CI Pipeline. Pull Request Merged.."))
.listen(port, () => console.log(`CI/CD Pipleline Started On ${port}...`));
