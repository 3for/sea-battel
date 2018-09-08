var express = require('express');
var app = express();

app.use(express.static('public'));
app.use(express.json());


app.post('/generate1', function(request, response){
    console.log(request.body);      // your JSON
    response.send(request.body);    // echo the result back
});

app.get('/generate2', function (req, res) {
    res.send('generate response');
});

app.get('/verify', function (req, res) {
    res.send('generate response');
});

app.listen(8080, function () {
    console.log('Example app listening on port 8080!');
});