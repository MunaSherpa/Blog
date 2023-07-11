const { users } = require("../model")

exports.blogForm = async(req, res) =>{

   const { name, subname, description} = req.body
   await users.create({
    name: name,
    subtitle: subname,
    description: description,
   })
   console.log(name, subname, description)
   res.redirect('/blog')
}
