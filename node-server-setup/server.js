//making server
const http = require("http");
//we need a file system to return html files
const fs = require('fs')
const _ = require('lodash') //just for practice purpose. you can install any package of your choice

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  //set header content type
  res.setHeader("Content-Type", "text/html");

//   res.write('<h1>hello, friends</h1>');
//   res.write('<p>hello again, friends</p>');

// fs.readFile('./views/index.html', (err, data) => {
//     if (err) {
// console.log(err);
//     }
//     else{

//     }
// })


//   res.end();
// });

//routing

let path = './views/';
switch(req.url) {
  case '/':
    path += 'index.html';
    res.statusCode = 200;
    break;
  case '/about':
    path += 'about.html';
    res.statusCode = 200;
    break;
  case '/about-us':
    res.statusCode = 301;
    res.setHeader('Location', '/about');
    res.end();
    break;
  default:
    path += '404.html';
    res.statusCode = 404;
}
// send html
fs.readFile(path, (err, data) => {
  if (err) {
    console.log(err);
    res.end();
  }
  //res.write(data);
  res.end(data);
});


});

server.listen(3000, "localhost", () => {
  console.log("listening for requests on port 3000");
});
