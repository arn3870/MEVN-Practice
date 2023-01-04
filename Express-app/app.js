const express = require("express");

const app = express();
app.set("view engine", "ejs");

app.listen(3000);

//routing in express
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/404", (req, res) => {
  res.render("404");
});

//redirecting to a route

// app.get("/home", (req, res) => {
//   res.redirect("/");
// })

//404 page
//app.use gets fired on every request. and if there's no route matched it shows up
app.use((req, res) => {
  res.status(404).sendFile("D:/cloudtek/MEVN/node-server-setup/views/404.html");
})