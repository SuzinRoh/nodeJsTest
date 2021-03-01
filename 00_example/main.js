var http = require("http");
var fs = require("fs");
var url = require("url"); //url 모듈 사용

var app = http.createServer(function (request, response) {
  var _url = request.url;
  var queryData = url.parse(_url, true).query; // ? id = 의 값
  // console.log('queryDate:'+queryData.id); // ? id = 의 값
  var pathname = url.parse(_url, true).pathname;
 

  //console.log(url.parse(_url, true).pathname);
  //console.log(title);
  if(pathname === '/'){
      if(queryData.id === undefined){
          //var description = data;
          var title ='Welcome';
          var description = 'Hello, node.js';
          var template = `
            <!doctype html>
            <html>
            <head>
              <title>WEB1 - ${title}</title>
              <meta charset="utf-8">
            </head>
            <body>
              <h1><a href="/">WEB</a></h1>
              <ol>
                <li><a href="/?id=HTML">HTML</a></li>
                <li><a href="/?id=CSS">CSS</a></li>
                <li><a href="/?id=JavaScript">JavaScript</a></li>
              </ol>
              <h2>${title}</h2>
              <p>${description}</p>
            </body>
            </html>`;
            response.writeHead(200);
            response.end(template);
      } else {
      fs.readFile( `data/${queryData.id}` , 'utf8' , function(err,description){
        //var description = data;
        var title = queryData.id;
        var template = `
          <!doctype html>
          <html>
          <head>
            <title>WEB1 - ${title}</title>
            <meta charset="utf-8">
          </head>
          <body>
            <h1><a href="/">WEB</a></h1>
            <ol>
              <li><a href="/?id=HTML">HTML</a></li>
              <li><a href="/?id=CSS">CSS</a></li>
              <li><a href="/?id=JavaScript">JavaScript</a></li>
            </ol>
            <h2>${title}</h2>
            <p>${description}</p>
          </body>
          </html>`;
          response.writeHead(200);
          response.end(template);
      });
    }
  }else{
    response.writeHead(404);
    response.end('Not found');
  }
  

});
app.listen(3000);
// if port number => 80 생략가능 기본값
//
//
//
// http://tmp:3000/main?html&page=12
//
// protocol , host(domain) , port ,path ,query srting
// query string strat : ?   var & var = value
// path 컴퓨터 안에있는 어떤디렉토리의 어떤파일인지 가르킴
//
//
