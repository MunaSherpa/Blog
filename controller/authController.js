const { BelongsTo } = require("sequelize")
const { blogs } = require("../model")


exports.blogForm = async(req, res) =>{

   const { name, subname, description} = req.body
   console.log(req.body)
   await blogs.create({  // index ko blogs ko name blogs.create dako
    title: name,
    subTitle: subname,
    description: description,
   })
   console.log(name, subname, description)
   res.redirect('home')
}

exports.getBlogByID = async(req, res) =>{
 

   const blogId = await blogs.findAll({
       where:{
           id:req.params.id
       }
   });
   console.log(blogId);
   res.render('blogs', {blogId});
   
}







