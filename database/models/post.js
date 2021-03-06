const moment=require('moment');
const mongoose=require('mongoose');

const PostSchema=new mongoose.Schema({
  tag: String,
  title: String,
  description: String,
  content: String,
  username: String,
  userid: String,
  image: String,
  likes: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: new Date()
  }
});
const Post=mongoose.model('post', PostSchema);

module.exports=Post;
