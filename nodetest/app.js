const http = require('http'); //import http
const fs = require('fs'); //import fs for file 읽기위함

http.createServer((request, response)=>{ //hhtp server객체 생성
    let url = request.url;
    console.log(url);
    
     if(url === '/'){
        url = '/index.html';
     }

     //html 다른 파일 불러올경우 브라우져에서 자동으로 favicon.icon 호출
     //아래 예외처리 안할경우 서버 시작 시 해당 파일과 경로가없다고 오류 발생
     //해당 도메인의 url 왼쪽 icon을 가져오기 위함
      if(url === '/favicon.ico'){
          return response.writeHead(404);
      }

    //응답 data 구성
    response.statusCode = 200; //성공
    response.setHeader('content-Type', 'text/html');
    //readFileSync 동기 처리 파일읽 읽고와서 하위 코드 진행하기 위함 (readFile 비동기 함수도 존재)
    //output index.html
    response.end(fs.readFileSync(__dirname+url));
    //response.setHeader('content-Type', 'text/plain');
    //response.end('hello world');
}).listen(3000) //port 3000

console.log('server running at http://127.0.0.1:3000/');