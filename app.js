var express = require('express');
var app = express();

app.use(express.static('public'));
app.use(express.json());

app.post('/prove', function (req, res) {
    // res.send('generate response');
    res.json({ prove: true });
});

app.post('/verify', function (req, res) {
    res.json({ verify: Math.random() > 0.5});
});

app.listen(8080 , function () {
    console.log('Example app listening on port 8080!');
});