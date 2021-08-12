const express = require('express')
const app = express()
const port = 3306;
const db = require('./lib/db');
const template = require('./lib/template.js');

// const postRouter = require('./routes/posts');
const userRouter = require('./routes/users');

const bodyParser = require('body-parser');
const compression = require('compression');
const helmet = require('helmet')
app.use(helmet());
app.use(compression());

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

// 게시글 목록
app.get('/', (request, response, next) => {
    db.query(`SELECT * FROM posts`, (error, posts) => {
        const title = 'Board';
        const list = template.list(posts);
        const html = template.HTML(title, `<a href="/user">User</a>`, '', list);

        response.send(html);
    })
})

// app.use('/post', postRouter);
app.use('/user', userRouter);

app.use((req, res, next) => {
  res.status(404).send('Sorry cant find that!');
}); 

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
}) 

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})