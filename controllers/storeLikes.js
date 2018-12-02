const path=require('path');
const post=require('./../database/models/post');
const User=require('./../database/models/user');

module.exports=(req,res)=>{
  const {
    image
  }=req.files
  var id=req.session.userId;
  var user=User.findOne({_id:id},(err,doc)=>{

    if(document.getElementbyId('likebtn').clicked==true)
      post.create({
        likes: req.body.likes
      }, (error, post)=>{
        res.redirect('/');
      });
  });

};
//
// cnt=parseInt(cnt)+parseInt(1);
//      var divData=document.getElementById("showCount");
//      divData.innerHTML="Number of Downloads: ("+cnt +")";
