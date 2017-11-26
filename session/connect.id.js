const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const cookie = require('cookie');
const cookieSignature = require('cookie-signature');

const app = express();
const PORT = process.PORT || 3000;

const sessionSecret = 'my secret';
app.use(session({
  secret: sessionSecret,
  cookie:{
    maxAge:60000, //一分钟
  }
}));
app.use(cookieParser());

app.get('/', (req, res, next) => {
  // console.log(session);

  if (req.session) {
    req.session.views = ++req.session.views || 1;
  }

  let content = 'express session!';
  content += '<br > req.session.views:' + req.session.views;
  content += '<br > req.sessionID:' + req.sessionID;
  content += '<br > req.session.cookie: ' + JSON.stringify(req.session.cookie);

  content += '<br ><br >使用cookie-parser, req.cookies'
  content +='<br >req.cookies: ' + JSON.stringify(req.cookies);
  let connect_sid = req.cookies['connect.sid'] || '';
  content += '<br > req.cookies["connect.sid"]: ' + connect_sid;

  content += '<br ><br >不使用cookie-parser, req.headers.cookie'
  content += '<br > req.headers.cookie: ' + req.headers.cookie;
  content += '<br > cookie.parse(req.headers.cookie): ' + JSON.stringify(cookie.parse(req.headers.cookie));


  content += '<br ><br > cookie-signature';
  let signed = 's:' + cookieSignature.sign(req.sessionID, sessionSecret);
  content += '<br > cookieSignature.sign(): ' + signed; 
  content += '<br > encodeURIComponent(signed): ' + encodeURIComponent(signed);
  content +='<br > cookieSignature.unsign(): ' + cookieSignature.unsign(connect_sid.slice(2), sessionSecret);
  // content += '<br >' + cookieSignature.unsign()

  res.send(content);
})

app.listen(PORT, () => {
  console.log('server start at :' + PORT);
})