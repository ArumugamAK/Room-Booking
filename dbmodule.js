var databaseUrl = "mongodb://127.0.0.1:27017/roombooking";
var mongojs = require("./node_modules/mongojs");
var db = mongojs(databaseUrl);
var fs = require("fs");
console.log("Connected");
var email_update = "";
exports.authenticateUser = function (email,pass,response) {
  console.log(email);
  db.student.find({ email: email, password: pass }, function (err, op) {
    if (err || !op) {
      response.write("..Not authorized user" || err);
      response.end();
    } else if (op.length == 0) {
      response.write("Not authorized user");
      response.end();
    } else {
      response.end("inserted");
    }
  });
};
exports.saveUser = function (username, email,pass, response) {
  console.log("Saving user to mongo");
  db.student.insert(
    { username: username, email: email, password: pass},
    function (err, saved) {
      if (err || !saved) console.log(err);
      else {
        fs.readFile("./login.html", (errr, data) => {
          if (errr) {
            throw errr;
          }
        response.writeHead(200, { "Content-Type": "text/html" });
          const css = fs.readFileSync("./login 13.11.css", "utf8");
          data = data.toString().replace("</head>", `<style>${css}</style></head>`);
          response.write(data);
          response.end();
        });
      };
    });
}

exports.deleteUser = function (username, email, response) {
  db.student.remove({ username: username, email: email }, function (err, del) {
    console.log(del);
    if (del.deletedCount == 0) {
      response.end("error in delete of the user");
    } else {
      response.end("user successfully deleted");
    }
  });
};

exports.updateUser = function (username, res) {
  console.log(email_update);
  db.student.update(
    { email: email_update },
    { $set: { username: username } },
    function (err, data) {
      console.log(data);
      if (data.nModified > 0) res.end("Your Username has been changed");
      else res.end("Your Username has not been changed");
    }
  );
};
