module.exports = {
  frame: (title ,expression) => {
    return `
    <!doctype html>
    <html>
    <head>
      <title>Test - bulletin board</title>
      <meta charset="utf-8">
    </head>
    <body>
      <p>${title}</p>
      <p>${expression}</p>
    </body>
    </html>
    `
  },
  list: (posts) => {
    let list = '<ul>';
    for(let i = 0; i < posts.length; i++){
      list += `<li><a href="/posts/${posts[i].id}">${posts[i].title} &emsp; ${posts[i].writer} &emsp; ${posts[i].created}</li>`;
    }
    list += '</ul>';
    return list;
  }
}