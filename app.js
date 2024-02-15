var databaseUrl = "mongodb://127.0.0.1:27017/roombooking";
var mongojs = require("./node_modules/mongojs");
var db = mongojs(databaseUrl);
var fs = require("fs");
console.log("Connected");
const express = require("express");
const bodyParser = require("body-parser")
const ejs = require("hbs")
const path=require("path"); 
const { name } = require("ejs");
const app = express();
// app.use(express.static('C:\Users\ADMIN\Desktop\sample\css'));
app.set('view engine','hbs');
// app.set('views','C:\Users\ADMIN\Desktop\sample\node_modules');
app.use(bodyParser.urlencoded({
    extended:true
}));
// app.use(express)
const location=path.join(__dirname,"./public");
app.use(express.static(location));
app.get('/',function(req,res){
    res.render('frontpage')
})
app.get('/login',function(req,res){
    res.render('login')
})
app.get('/room1',function(req,res){
    res.render('room1');
})
app.get('/popularplaces',function(req,res){
    res.render('popularplaces')
})
app.get('/room',function(req,res){
    res.render('room')
})
app.get('/register',function(req,res){
    res.render('register')
})
app.get('/booking',function(req,res){
    res.render('booking')
})
app.post('/register',(req,res)=>{
    var email=req.body.email;
    var pass=req.body.password;
    var pass1=req.body.password2;
    console.log(email)
    db.student.find({ email: email}, function (err, op) {
      if(err){
        console.log(err);
        return;
       }
       console.log(op.email);
       if(op.length == 0 || !op){
        db.student.insert(
          {  email: email, password: pass},
          function (err, saved) {
            if (err || !saved) console.log(err);
            else {
              console.log('success')
                  // res.render("login")
                  return res.render("register",{msg: "Registration Successfully",msg_type:"good" })
            };
          });
      }
      else if(pass !== pass1){
        console.log(pass,pass1);
        return res.render("register",{msg: "Password do not match",msg_type:"error" });
      }
      else{
        return res.render("register",{msg: "Email id already taken",msg_type:"error" });
       

      }
    });
     
})
app.post('/room1',(req,res)=>{
    var email=req.body.email;
    var pass=req.body.password;
    db.student.find({ email: email, password: pass }, function (err, op) {
        if (err || !op) {
          res.write("..Not authorized user" || err);
          res.end();
        } else if (op.length == 0) {
          res.write("Not authorized user");
          res.end();
        } else {
          db.student.findOne({ Roomname: 'The Oasis Suite'}, function (err, op) {
            if(err){
                console.log(err);
                return;
            }
            if(op){
              console.log('Total 10',op.Total);
              const data1=op.Total;
              db.student.findOne({ Roomname: 'Presidential Suites'}, function (err, AS) {
   
                if(err){
                    console.log(err);
                    return;
                }
                if(AS){
                  console.log('Total 1',AS.Total);
                  const data2=AS.Total;
                  db.student.findOne({ Roomname: 'Bridal suites'}, function (err, AK) {
   
                    if(err){
                        console.log(err);
                        return;
                    }
                    if(AK){
                      console.log('Total 2',AK.Total);
                      const data3=AK.Total;
                      db.student.findOne({ Roomname: 'Terrace Suite'}, function (err, A1) {
   
                        if(err){
                            console.log(err);
                            return;
                        }
                        if(A1){
                          console.log('Total 3',A1.Total);
                          const data4=A1.Total;
                          db.student.findOne({ Roomname: 'Junior suites'}, function (err, A2) {
   
                            if(err){
                                console.log(err);
                                return;
                            }
                            if(A2){
                              console.log('Total 4',A2.Total);
                              const data5=A2.Total;
                              db.student.findOne({ Roomname: 'Honeymoon suites'}, function (err, A3) {
   
                                if(err){
                                    console.log(err);
                                    return;
                                }
                                if(A3){
                                  console.log('Total 5',A3.Total);
                                  const data6=A3.Total;
                                  db.student.findOne({ Roomname: 'Deluxe Suite'}, function (err, A4) {
   
                                    if(err){
                                        console.log(err);
                                        return;
                                    }
                                    if(A4){
                                      console.log('Total 6',A4.Total);
                                      const data7=A4.Total;
                                      db.student.findOne({ Roomname: 'Penthouse suites'}, function (err, A5) {
   
                                        if(err){
                                            console.log(err);
                                            return;
                                        }
                                        if(A5){
                                          console.log('Total 7',A5.Total);
                                          const data8=A5.Total;
                                          db.student.findOne({ Roomname:'Overwater Bungalow'}, function (err, A6) {
   
                                            if(err){
                                                console.log(err);
                                                return;
                                            }
                                            if(A6){
                                              console.log('Total 8',A6.Total);
                                              const data9=A6.Total;
                                              db.student.findOne({ Roomname:'Royal Suite'}, function (err, A7) {
   
                                                if(err){
                                                    console.log(err);
                                                    return;
                                                }
                                                if(A7){
                                                  console.log('Total 9',A7.Total);
                                                  const data10=A7.Total;
                                                  res.render("room1",{data1,data2,data3,data4,data5,data6,data7,data8,data9,data10})
                                                }
                                                else{
                                                    console.log("error");
                                                }
                                              });
                                              
                                            }
                                            else{
                                                console.log("error");
                                            }
                                          });
                                          
                                          
                                        }
                                        else{
                                            console.log("error");
                                        }
                                      });
                                     
                                      
                                    }
                                    else{
                                        console.log("error");
                                    }
                                  });
                                  
                                  
                                }
                                else{
                                    console.log("error");
                                }
                              });
                             
                              
                            }
                            else{
                                console.log("error");
                            }
                          });
                  
                          
                        }
                        else{
                            console.log("error");
                        }
                      });
                
                      
                    }
                    else{
                        console.log("error");
                    }
                  });
                  
                  
                }
                else{
                    console.log("error");
                }
              });
             
              
            }
            else{
                console.log("error");
            }
          });
        }
      });
      

})
app.post('/booking',(req,res)=>{
      var no_room=req.body.noofroom;
      var name=req.body.roomname;
      console.log(name);
      db.student.updateOne({ Roomname:name }, { $inc: { Total: -no_room } }, function (err, op) {
        if(err){
          console.log(err);
        }
         else {
          console.log("successfully @@ inserted")
          // res.render('frontpage');
        return res.render("booking",{msg: "sucsessfully",msg_type:"good" });
        }
      });

})


app.listen(2000, function(){
    console.log("server is running on port 2000");
})