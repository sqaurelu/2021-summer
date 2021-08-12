const express = require('express');
const app = express();
const db = require('./lib/db');
const template = require('./lib/template');
const path = require('path');
const { response } = require('express');

//bodyParser기능이 express에 내장
app.use(express.json());
app.use(express.urlencoded({extended : false}));

//게시글 목록 표시
app.get('/posts', (req, res) => {
  db.query('SELECT * FROM posts', (err, posts) => {
    let posts_check;
    for(let post of posts){
      console.log(post.id);
      posts_check += `${post.title}\t\t${post.writer}\t\t${post.created}\n`;
    }
    const title = '<h2>List of posts</h2>'
    const list = template.list(posts);
    const html = template.frame(title, list);
    res.send(posts_check + html);
  });
});

//게시글 제목과 내용 표시
app.get('/posts/:postId', (req, res) => {
  const filteredId = path.parse(req.params.postId).base;
  db.query(`SELECT * FROM posts WHERE id=${filteredId}`, (err, post) => {
    if(err) throw err;
    const title = `<h2>${post[0].title}</h2>`;
    const content = post[0].content;
    const html = template.frame(title, content);
    res.send(html);
  });
});

//게시글 생성
app.post('/create_process', (req, res) => {
  const post = req.body;
  db.query(`INSERT INTO posts (title, writer, content, created) VALUES(?, ?, ?, now());`,
  [post.title, post.writer, post.content],
  (err, result) => {
    if(err) throw err;
    res.redirect('/posts');
  });
});

//게시글 수정
app.put('/update_process', (req, res) => {
  post = req.body;
  db.query(`UPDATE posts SET title=?, writer=?, content=? WHERE id=?`,
  [post.title, post.writer, post.content, post.id],
  (err, result) => {
    if(err) throw err;
    res.redirect(`/posts/${post.id}`);
  });
})

//게시글 삭제
app.delete('/delete_process', (req, res) => {
  post = req.body;
  db.query(`DELETE FROM posts WHERE id=?`, [post.id],
  (err) => {
    res.redirect('/posts');
  })
})
app.listen(8080, function() {
  console.log('Example app listening on port 8080!')
});