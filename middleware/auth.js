const User=require('./../database/models/user');

module.exports=(req,res,next)=>{
  User.findById(req.session.userId,(error,user)=>{
    if(error||!user)
      return res.redirect('/auth_register');
    next();
  })
}
