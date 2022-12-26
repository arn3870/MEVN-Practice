//making server
const http = require("http");
//we need a file system to return html files
const fs = require('fs')

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  //set header content type
  res.setHeader("Content-Type", "text/html");

//   res.write('<h1>hello, friends</h1>');
//   res.write('<p>hello again, friends</p>');

fs.readFile('./views/index.html', (err, data) => {
    if (err) {
console.log(err);
    }
    else{

    }
})


  res.end();
});

server.listen(3000, "localhost", () => {
  console.log("listening for requests on port 3000");
});
