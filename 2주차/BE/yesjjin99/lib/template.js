module.exports = {
    HTML:function(title, control, body, list){
      return `
      <!doctype html>
      <html>
      <head>
        <title>${title}</title>
        <meta charset="utf-8">
      </head>
      <body>
        ${control}
        ${body}
        ${list}
      </body>
      </html>
      `;
    },list:function(filelist){
      var list = '<ul>';
      var i = 0;
      while(i < filelist.length){
        list = list + `<li>${filelist[i].title} ${filelist[i].userId} ${filelist[i].contents}</li>`;
        i = i + 1;
      }
      list = list+'</ul>';
      return list;
    }
  }
  