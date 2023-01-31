const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const ejs = require('ejs');
const { urlencoded } = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs')

app.get('',((req,res)=>{
    res.send("<h1>home page</h1>")
}));

app.listen(3000,(()=>{
    console.log('server is connected....')
}));