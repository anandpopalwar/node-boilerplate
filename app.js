const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const ejs = require('ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs')
app.use(express.static('public'))
const users=[]

app.get('/',((req,res)=>{
    res.render('home')
    console.log('home page is connected....')
}));
app.post('/user',((req,res)=>{
    let user={name:req.body.name}
    users.push(user)
    res.render('user',{student:users})
   console.log('user page is connected....')
   res.redirect('/')
}))   


app.listen(3000,(()=>{
    console.log('server is connected....')
}));