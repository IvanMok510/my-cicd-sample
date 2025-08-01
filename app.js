const http = require('http');
const server = http.createServer((req, res) => { res.end('Hello from CI/CD!'); });
server.listen(8080, () => console.log('App running'));
