const { blogs } = require("../model")


exports.blogForm = async(req, res) =>{

   const { name, subname, description} = req.body
   console.log(req.body)
   await blogs.create({  // index ko blogs ko name blogs dako
    title: name,
    subTitle: subname,
    description: description,
   })
   console.log(name, subname, description)
   res.redirect('/blog')
}
