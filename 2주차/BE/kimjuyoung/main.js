const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require("path")
const page = require('./lib/home.js');
const api = require('./lib/api.js');


const mimeType = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".png": "image/png",
  ".jpeg": "image/jpeg",
  ".woff": "text/woff"
}

const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer(function(request, response){
  const _url = request.url;
  const ext = path.parse(request.url).ext
  const publicPath = path.join(__dirname, "./")
  const pathName = url.parse(_url, true).pathname;
  const queryData = url.parse(_url,true).query;
  const queryid = queryData.id;
  let html;

  if(pathName==='/'){
    if(queryData.id === undefined){
      page.home(request, response, html);
    }else{
      page.library(request, response, html, queryid);
    }  
  }else if(pathName === '/create_process'){
    api.create(request, response);
  }else if(pathName === '/books'){
    api.book(request, response,queryid);
  }else if(pathName=== '/users'){ 
    api.user(request, response,queryid);
  }



  if (Object.keys(mimeType).includes(ext)) {
    fs.readFile(`${publicPath}${request.url}`, (err, data) => {
      if (err) {
        response.statusCode = 404;
        response.end('Not found');
      } else {
        response.statusCode = 200
        response.setHeader('Content-Type', mimeType[ext]);
        response.end(data)
      }
    })
    }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
