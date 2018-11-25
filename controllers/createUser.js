module.exports=(req,res)=>{
  res.render('indexregister.hbs', {
    errors: req.flash('registrationErrors')
  });
}
