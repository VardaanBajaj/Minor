const bcrypt=require('bcryptjs');
const mongoose=require('mongoose');

const UserSchema=new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: new Date()
  }
})

UserSchema.pre('save', function(next) {
  const user=this;
  bcrypt.hash(user.password,10, (err, encrypted)=>{
    user.password=encrypted;
    next();
  })
})

module.exports=mongoose.model('User',UserSchema);
