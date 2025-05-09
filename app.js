const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const userrouter = require('./routes/userroutes');

app.use(express.json());
app.use(bodyparser.urlencoded({extended: true}));
app.set('view engine', 'pug');


app.listen(80, () => {
    console.log('http://localhost:80/');
})

app.use('/', userrouter);