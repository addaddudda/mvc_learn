const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const router = require('./routes/routes');

app.use(express.json());
app.use(bodyparser.urlencoded({extended: true}));
app.set('view engine', 'pug');


app.listen(80, () => {
    console.log('http://localhost:80/');
})
app.use('/api/index', router);
app.use('/api/signup', router);