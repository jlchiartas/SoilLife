var express = require('express');
var app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('pages/index');
})

app.listen(3000);

console.log('listening on port 3000...')