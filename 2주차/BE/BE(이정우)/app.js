var createError = require('http-errors');
var express = require('express');
var path = require("path");
var session = require("express-session");
var mysql = require("mysql");
var MySQLStore = require("express-mysql-session")(session);
var ejs = require("ejs");

var app = express();
app.listen(3000);
var dbOption ={
  host : "localhost",
  user : "root",
  password : "wjddn6138",
  database : "Baman"
};
var conn = mysql.createConnection(dbOption);
conn.connect();

app.set('views','views');
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret : "asdonav*!aksd",
  store : new MySQLStore(dbOption),
  resave : false,
  saveUninitialized : false
  }
));
app.get('/', function(req, res, next) {
  if(req.session.isTrue){
    var name = req.session.name;
    console.log(req.session);
    res.render('main.ejs',{name:name});
  }else{
    res.render('index.ejs');
  }
});
app.post('/',(req, res)=>{
  console.log(req.session);
  if(req.body.username === '' || req.body.password === ''){
    var error = '<script> alert("아이디와 비밀번호를 입력해주세요") </script>\
    <a href="/">돌아가기</a>';
    res.send(error);
  }else{
    var id = req.body.username;
    var password = req.body.password;
    sql = `select * from user where username=?;`;
    conn.query(sql,[id],(err,user)=>{
      if (err){
        console.log(err);
      };
      if(!user[0]||user[0].password !== password){
        var error = '<script> alert("아이디와 비밀번호를 확인해주세요") </script>\
        <a href="/">돌아가기</a>';
        res.send(error);
      }else if(id === user[0].username && password === user[0].password){
        req.session.isTrue=true;
        req.session.name=user[0].nickname;
        console.log(req.session);
        res.redirect('/');
      }else{
        res.redirect('/');
      }
    })
  }
})
app.get('/logout',(req, res)=>{
  req.session.destroy((err)=>{
    if(err){
      console.log(err);
    }else{
      res.redirect("/");
    }
  });
});

app.get('/create', function(req, res, next) {
  res.render('create.ejs');
});
app.post('/create',(req, res)=>{
  id = req.body.username;
  password = req.body.password;
  var nickname = req.body.nickname;
  sql = "insert into user(username, password, nickname) values(?,?,?);";
  conn.query(sql, [id, password,nickname],(err,users)=>{
    if(err){
      console.log(err);
    }else{
      res.redirect('/');
    }
  })
});

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
