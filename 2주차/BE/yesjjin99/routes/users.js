const express = require('express');
const router = express.Router();
const path = require('path');
const db = require('../lib/db');
const template = require('../lib/template.js');
const sanitizeHtml = require('sanitize-html');
const { response } = require('express');

router.get('/', (request, response) => {
    const title = '회원 정보';
    const html = template.HTML(title, 
        `<a href="/user/create">회원가입</a>`,
        `<br><br>Welcome!`, ``
    );
    response.send(html);
});

// 사용자 생성
router.get('/create', (request, response) => {
    db.query(`SELECT * FROM users`, (error, users) => {
        const title = '회원가입';
        const html = template.HTML(title, 
            `<a href="/user/create">회원가입</a>`,
            `<form action="/user/create_process" method="post">
            <p><input type="text" name="userId" placeholder="userId"></p>
            <p>
              <textarea name="userName" placeholder="userName"></textarea>
            </p>
            <p>
              <input type="submit">
            </p>
            </form>
        `, ``);
        response.send(html);
    })
})

router.post('/create_process', (request, response) => {
    const user = request.body;
    const ID = user.userId;
    const Name = user.userName;
    db.query(`INSERT INTO users (userId, userName, created) VALUES(?, ?, NOW())`,
        [ID, Name], (error, result) => {
        if(error){
            throw error;
        }
        response.redirect(`/user/update/${ID}`);
    })

})

// 사용자 정보 수정
router.get(`/update/:userId`, (request, response) => {
    const ID = request.params.userId;
    db.query('SELECT * FROM users', (error, result) => {
        if(error){
          throw error;
        }
        db.query(`SELECT * FROM users WHERE userId=?`,[ID], function(error2, user){
            if(error2){
                throw error2;
            }
            const title = '회원정보수정';
            const html = template.HTML(title, 
                `<a href="/user/delete/${ID}">회원탈퇴</a>`,
                `<form action="/user/update_process" method="post">
                <input type="hidden" name="userId" value="${ID}">
                <p><input type="text" name="userId" placeholder="userId" value="${sanitizeHtml(ID)}"></p>
                <p>
                  <input type="submit">
                </p>
              </form>
            `, ``);
            response.send(html);
        });
    });
})

router.put('/update_process', (request, response) => {
    const user = request.body;
    const ID = user.userId;
    db.query(`UPDATE users SET userId=? WHERE userId=?`, [ID], (error, result) => {
        if(error){
            throw error;
        }
        response.redirect(`/user/update/${ID}`);
    })

})

// 사용자 탈퇴
router.delete('/delete/:userId', (request, response) => {
    const ID = request.params.userId;
    db.query(`DELETE FROM users WHERE userId=?`, [ID], (error, result) => {
        if(error){
            throw error;
        }
        response.redirect(`/`);
    })
})

module.exports = router;