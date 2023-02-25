const path = require('path');
const express = require('express')
const app = express()
const port = 7001;

app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Authorization,X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method')
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PATCH, PUT, DELETE')
  res.header('Allow', 'GET, POST, PATCH, OPTIONS, PUT, DELETE')
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/mip', (req, res) => {
  const json = require('./public/json/infinite.json');
  res.json(json);
})

app.get('/api/slider', (req, res) => {
  const json = require('./public/json/slider.json');
  res.json(json);
})

app.post('/user/login', (req, res) => {
  const json = require('./public/json/login.json');
  res.json(json);
})

app.get('/user/validate', (req, res) => {
  const json = require('./public/json/validate.json');
  res.json(json);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})