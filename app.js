const express = require('express')
const app = express();
const ejs = require('ejs')


const {sequelized, blogs } = require ('./model/index')

const {blogForm} = require('./controller/authController')

app.use(express.json())
app.use(express.urlencoded({extended:true})) 

app.set('view engine', 'ejs')

app.get('/blog', (req, res) =>{

    res.render('Blog') // file ko name dako
})


app.post('/blog', blogForm);




app.listen(3000, () => {
    console.log(" Server started at 3000")
})