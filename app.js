const http = require("http");
const port = process.env.PORT || 3500;
http
.createServer((req, res) => res.end("CI/CD Pipeline Worked..."))
.listen(port, () => console.log(`CI/CD Pipleline Started On ${port}...`));
