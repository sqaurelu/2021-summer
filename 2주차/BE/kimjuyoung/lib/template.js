module.exports= {
    HTML:function(cssForm, div, js=''){
      return `
      <!DOCTYPE html>
      <html lang="ko">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>HOME LBRARY</title>
          <link rel="stylesheet" href="style/${cssForm}.css">
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel= "stylesheet">
      </head>
      <body>
          <div class="container">
              <div class="header">
                  <h1><a href = "/">HOME LIBRARY</a></h1>
                  <div class="nav">
                      <ul>
                          <li><a href="/">HOME</a></li>
                          <li><a href="/">LIBRARY</a></li>   
                      </ul>
                      <li class="material-icons"><a href="?id=mypage"> perm_identity </a></li>    
                  </div>
              </div>
              ${div}
          </div>
          
          ${js}
      </body>
      </html>`
    }
  }