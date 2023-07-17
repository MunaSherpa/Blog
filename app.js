const express = require('express')
const app = express();
const ejs = require('ejs')


const {sequelized, blogs } = require ('./model/index')

const {blogForm} = require('./controller/authController');
const { where } = require('sequelize');

// const blogs = require ('./model/index')

app.use(express.json())
app.use(express.urlencoded({extended:true})) 

app.set('view engine', 'ejs')

app.get('/blog', (req, res) =>{

    res.render('Blog') // file ko name dako
})


app.post('/blog', blogForm);


app.get('/home', async(req, res) =>{
    const blogss = await blogs.findAll()
    console.log(blogss)

    res.render('Home',{blogss}) // file ko name dako
})


app.get('/blog/:id', (req, res) =>{
    // const blogsss = await blogs.findAll()
    // where.id
    res.render('test')
    
    console.log(req.params.id)
})







app.listen(4000, () => {
    console.log(" Server started at 3000")
})