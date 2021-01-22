const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');

const port = 3000;
var path = require('path')
const app = express();

var login = 'example@example'
var password = '123456789'

app.use(session({secret:'49AN17DE39RS1ON'}));
app.use(bodyParser.urlencoded({extended:true}))

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, 'public/views'));

app.post('/', (req, res)=>{
  
  if (req.body.password == password && req.body.login == login) {
    req.session.login = login;
    res.render('module')
    } else {
    res.render('index');
}
});

app.get('/', (req, res)=>{
  if (req.session.login){
  res.render('module');
  } else {
  res.render('index');
}
});

app.get('/module', (req, res)=>{
  if (req.session.login){
  res.render('module');
  } else {
  res.render('index');
}
});

app.listen(port, ()=>{
  console.log('Your server is running... Look at https://localhost:',port)
})