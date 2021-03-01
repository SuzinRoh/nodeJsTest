
var http = require('http');
var fs = require('fs');
var url = require('url');//url 모듈 사용

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url,true).query;
    console.log('queryDate:'+queryData.id);
    if(_url == '/'){
      _url = '/index.html';
    }
    if(_url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    response.end(queryData.id);
 
});
app.listen(3000);
// if port number => 80 생략가능 기본값 
//                
// http://tmp:3000/main?html&page=12
//  
// protocol , host(domain) , port ,path ,query srting
// query string strat : ?   var & var = value 
// path 컴퓨터 안에있는 어떤디렉토리의 어떤파일인지 가르킴
//
//