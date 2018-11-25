module.exports=(req,res,next)=>{
  if(!req.body.title||!req.body.description||!req.body.tag||!req.body.content) {
    return res.redirect('/create_post');
  }
  next();
}
