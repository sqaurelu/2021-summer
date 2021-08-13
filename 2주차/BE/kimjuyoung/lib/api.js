const fs = require('fs');
const template = require('./template.js');  
const qs = require('querystring');
const connection = require('./db.js');

exports.book = function(request, response,queryid){
    if(queryid=== undefined){
        connection.query('SELECT title,publisher,author FROM book', function (error, results, fields) {
          if (error) {
              console.log(error);
          }
          response.writeHead(200, {'Content-Type':'text/plain; charset=utf-8'});
          response.end(JSON.stringify(results));
        });
      }else{
        connection.query(`SELECT ${queryid} FROM book`, function (error, results, fields) {
        if (error) {
            console.log(error);
        }
        response.writeHead(200, {'Content-Type':'text/plain; charset=utf-8'});
        response.end(JSON.stringify(results));
      });
      }
  }

  exports.user = function(request, response, queryid){
    connection.query('SELECT name, phone, address FROM user', function (error, results, fields) {
      if (error) {
          console.log(error);
      }
      response.writeHead(200, {'Content-Type':'text/plain; charset=utf-8'});
      response.end(JSON.stringify(results));
  });
  }

  exports.create = function(request, response){
    var body = '';
        request.on('data', function(data){
            body = body + data;
        });
        request.on('end', function(){
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