module.exports=(req,res)=>{
  if(req.session.userId) {
    req.session.destroy();
    res.redirect('/auth_login');
  }
  else {
    res.redirect('/#');
  }
}
