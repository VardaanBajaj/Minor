module.exports=(req,res)=>{
  if(req.session.userId) {
    return  res.render('indexcreate.hbs');
  }
  res.redirect('/auth_login');
}
