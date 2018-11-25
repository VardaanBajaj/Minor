const path=require('path');
const post=require('./../database/models/post');
const User=require('./../database/models/user');

module.exports=(req,res)=>{
  const {
    image
  }=req.files
  var i;
  var id=req.session.userId;
  var user=User.findOne({_id:id},(err,doc)=>{
    i=doc.username;
    image.mv(path.resolve(__dirname,'..','public/posts',image.name), (error)=>{
      post.create({
        username: doc.username,
        ...req.body,
        image: `/posts/${image.name}`
      }, (error, post)=>{
        res.redirect('/');
      });
    });
  });

};
