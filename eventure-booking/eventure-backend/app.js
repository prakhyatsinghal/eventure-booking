const express = require ('express');
const app = express();

const path = require ('path');
const bodyParser = require('body-parser');
const dotenv = require ('dotenv');
const mongoose = require ('mongoose');
const flash = require ('connect-flash');
const session = require('express-session');

dotenv.config({path : './config.env'});

mongoose.connect(process.env.DATABASE_LOCAL, {
    useNewUrlParser : true,
    useUnifiedTopology : true,
    useCreateIndex : true
});

// middleware for session
app.use(session({
    secret: 'Just a simple login/signup application.',
    resave : true,
    saveUninitialized: true
}));

// middleeware flash messages
app.use(flash());

// setting middleware globally
app.use((req,res,next)=>{
    res.locals.success_msg=req.flash(('success_msg'));
    res.locals.error_msg=req.flash(('error_msg'));
    next();
});

app.use(bodyParser/bodyParser.urlencoded({extended:true}));
app.set('view',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.listen(process.eventNames.prototype,()=>{
    console.log('Server is started');
});


