var express = require('express');
var app = express();

var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false})
//Create application//

app.get('/', function(req,res){
    res.sendFile(__dirname + '/' + 'index.html');
})

app.post('/process_post',urlencodedParser, function(req,res){
    response = {
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        email:req.body.email,
        stud_num:req.body.stud_num,
        cell_num:req.body.cell_num
        
    };
console.log(response);
res.end(JSON.stringify(response));

});

app.listen(3000,() =>{
    console.log('Server is running on http://localhost:3000');
});