const User=require('./../database/models/user');

module.exports=async(req,res)=>{
  const user=await User.findById(req.params.id);
  res.render('user.hbs', {
    user
  });
}
