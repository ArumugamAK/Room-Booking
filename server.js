var module = require("./dbmodule");
var url = require("url");
var querystring = require("querystring");
var http = require("http");
http.createServer(function (request, response) {
    var data1 = "";
    console.log("thank you");
    request.on("data", function (chunk) {
      data1 += chunk;
    });
    request.on("end", function () {
      var name = querystring.parse(data1)["username"];
      var email = querystring.parse(data1)["email"];
      var password = querystring.parse(data1)["password"];

      if (request.url === "/login") {
        module.authenticateUser(email,password, response);
      } else if (request.url === "/save") {
        module.saveUser(name, email,password, response);
      } else if (request.url == "/delete") {
        module.deleteUser(name, email, response);
      } else if (request.url == "/change") {
        module.updateUser(name, response);
      }
    });
  }).listen(4000);
console.log("Server started");
