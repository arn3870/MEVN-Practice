const express = require("express");

const app = express();

app.listen(3000);

//routing in express
app.get("/", (req, res) => {
  res.sendFile("D:/cloudtek/MEVN/node-server-setup/views/index.html");
});
app.get("/about", (req, res) => {
  res.sendFile("D:/cloudtek/MEVN/node-server-setup/views/about.html");
});

//redirecting to a route

app.get("/home", (req, res) => {
  res.redirect("/");
})

//404 page
//app.use gets fired on every request and if there's no route matched it shows up
app.use((req, res) => {
  res.status(404).sendFile("D:/cloudtek/MEVN/node-server-setup/views/404.html");
})