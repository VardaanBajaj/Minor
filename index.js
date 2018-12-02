const express=require('express');
const hbs=require('hbs');
const path=require('path');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const async=require('async');
const fileupload=require('express-fileupload');
const expressSession=require('express-session');
const connectMongo=require('connect-mongo');
const connectFlash=require('connect-flash');
const edge=require('edge.js');

const createPostController=require('./controllers/createPost');
const homePageController=require('./controllers/homePage');
const storePostController=require('./controllers/storePost');
const getPostController=require('./controllers/getPost');
const getUserController=require('./controllers/getUser');
const createUserController=require('./controllers/createUser');
const storeUserController=require('./controllers/storeUser');
const storeLikesController=require('./controllers/storeLikes');
const loginController=require('./controllers/login');
const loginUserController=require('./controllers/loginUser');
const logoutController = require("./controllers/logout");


const app=express();

const mongoStore=connectMongo(expressSession);

app.use(connectFlash());
app.use(expressSession({
  secret: 'secret',
  store: new mongoStore({
    mongooseConnection: mongoose.connection
  })
}));

app.use(fileupload());
app.use(express.static('public'));
app.set('view engine', 'hbs');

mongoose.connect('mongodb://localhost:27017/CloudHead', {useNewUrlParser: true})
  .then(()=>'You are connected to mongo')
  .catch((err)=>console.log('Could not connect, please try later' +err));


hbs.registerPartials(__dirname+'/views/partials');
hbs.registerHelper('dateFormat', require('handlebars-dateformat'));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}));

const auth=require('./middleware/auth');
const storePost=require('./middleware/storePost');
const redirectIfAuthenticated=require('./middleware/redirectIfAuthenticated');

app.use('/posts/store',storePost);

app.get("/", homePageController);
app.get("/post_:id", getPostController);
app.get("/user_:id", getUserController);
app.get("/create_post", auth, createPostController);
app.post("/posts/store", redirectIfAuthenticated, storePostController);
app.get("like_:id", redirectIfAuthenticated, storeLikesController);
app.get("/auth_register", redirectIfAuthenticated, createUserController);
app.get("/auth_login", redirectIfAuthenticated, loginController);
app.post("/users/register", redirectIfAuthenticated, storeUserController);
app.post("/users/login", redirectIfAuthenticated,loginUserController);
app.get("/auth_logout", logoutController);

app.listen(3000, ()=>{
  console.log('Server running on port 3000');
});
