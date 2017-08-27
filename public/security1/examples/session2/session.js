var express = require('express');
var router = express.Router();

var store = require("../../../../app").memoryStore;

var secrets = [];
var sessionCount = 0;
//ShowStart
router.get("/",function(req, res, next) {
  var sess = req.session
  var name= req.query.name;
  var secret= req.query.secret;
  if(typeof name !=="undefined"){
    sess.name =  name;
    sess.secret = req.query.secret;
    res.redirect("/session2")
    return;
  }
  var start ='<!DOCTYPE html><html lang="en"><head>'

  start += '</head><body><div style="padding:0.5em;font-family: sans-serif;border: solid 1px darkgray;';
  start += 'margin: 2em;max-width: 50em;box-shadow: 5px 5px 5px #888888;">';
  var end = "</div></body></html>"
  res.setHeader('Content-Type', 'text/html');
  if (sess.name) {
    res.write(start);
    res.write('<p><span style="font-size: larger">Hi: ' + sess.name+'</span>');
    res.write(', Your Secret is: <span>' + sess.secret + '</span>&nbsp;</p>');
    res.write('<p>Your SessionID: <span style="font-size: small">' + req.realSessionID + '</span></p>');
    res.write("<p style='font-size: small;font-style: italic'>Verify: that if I had not provided you with the value, you could  have obtained it by yourself </p>")
    res.write('<p>Online Users</p>');
    res.write('<ul>');
    try {
      store.all(function (err, sessions) {
        sessionCount = Object.keys(sessions).length;
        //console.log(sessionCount);
        var count = 0;
        if (!err) {
          for (var s in sessions) {
            store.get(s, function (e, thisSes) {
              if(thisSes.name != undefined) {
                res.write("<li>" + thisSes.name + "</li>");
              }
              count++;
              if (count === sessionCount) {
                res.write("</ul>");
                res.write('<p>expires in: ' + (sess.cookie.maxAge / 1000) + 's</p>');
                res.end(end);
              }
            })
          }
        }
      });
    }
    catch(err){
      res.end();
    }
  } else {
    sess.views = 1
    res.write(start);
    res.write('<form ><input placeholder="Enter Your Name:" name="name"> &nbsp;&nbsp;<input placeholder="Enter Your Secret:" name="secret" ><br/><br/><input type="submit"></form>');
    res.end(end);
  }
})
//ShowEnd
module.exports = router;