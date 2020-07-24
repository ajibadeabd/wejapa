const http = require('http');
const hostname = '127.0.0.1';
const url = require('url');
const port = process.env.port || 3000;

http.createServer((req, res) => {
    const reqUrl =  url.parse(req.url, true);// GET endpoint
  if(reqUrl.pathname == '/' && req.method === 'GET') {
   res.statusCode = 200;
  res.setHeader('content-Type', 'Application/json');
  let data = 'Welcome to WeJapa internships'
  res.end(JSON.stringify(data))
   }
 
}).listen(port, hostname, () => {  console.log(`Server running at http://${hostname}:${port}/`);})