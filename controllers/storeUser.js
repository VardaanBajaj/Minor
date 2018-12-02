var path=require('path');
const User=require('./../database/models/user');

module.exports=(req,res)=>{
    const {
      image
    }=req.files
    image.mv(path.resolve(__dirname,'..','public/users',image.name), (error)=>{
      User.create({
        ...req.body,
        image: `/users/${image.name}`
      });
      res.redirect('/');
    });
};
