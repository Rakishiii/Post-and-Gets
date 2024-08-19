var express = require('express');
var app = express();

app.use(express.static('public'));
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false})
//Create application//

app.get('/', (req,res) =>{
    res.sendFile(process.cwd() + '/' + '/index.html');
})
app.get('/about', (req,res) =>{
    res.sendFile(process.cwd() + '/about.html');
})
app.get('/blog', (req,res) =>{
    res.sendFile(process.cwd()  + '/blog.html');
})
app.get('/contact', (req,res)=>{
    res.sendFile(process.cwd()  + '/contact.html');
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

app.listen(4000,() =>{
    console.log('Server is running on http://localhost:3000');
});