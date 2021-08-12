const fs = require('fs');
const template = require('./template.js');  
const qs = require('querystring');
const connection = require('./db.js');

exports.home= function(request, response, html){
    
    fs.readFile('./index/index', (err,data)=>{
    if (err) {
      response.writeHead(404);
      response.end('Not found');
      console.log("err");
    } else {
      html = template.HTML('index',data,'');
      response.writeHead(200);
      response.end(html);
    }
  });
}


exports.library = function(request, response, html, queryid){
    fs.readFile(`./index/${queryid}`, (err,data)=>{
        let js='';
        if (err) {
        response.writeHead(404);
        response.end('Not found');
        console.log("err");
        } else {
            if(queryid === 'shelf1')
            js= `<script src="js/shelf.js"></script>`;
        
            html = template.HTML(`${queryid}`,data,js);
            response.writeHead(200);
            response.end(html);
        }
    });
}


exports.create = function(request, response){
    var body = '';
        request.on('data', function(data){
            body = body + data;
        });
        request.on('end', function(){
            console.log(body);
            var post = qs.parse(body);
            var title = post.title;
            var publisher = post.publisher;
            var author = post.author;
            var uid = post.uid;
            connection.query(`INSERT INTO book (title, publisher, author, uid) values(?, ?, ?, ?)`,[title,publisher,author,uid], function(error, results){
            if(error){
                throw error;
            }
            response.writeHead(302, {Location: `/?id=shelf1`});
            response.end();
            });
        });
}

