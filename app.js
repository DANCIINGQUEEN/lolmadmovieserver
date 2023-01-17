const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors=require('cors')
require('./models/memo')
require('./models/videoList')
require('./models/user')
require('./models/chat')

const indexRouter = require('./routes/index');
const lolRouter = require('./routes/memoRouters')
const playListRouter=require('./routes/playListRouters');
const userRouter=require('./routes/users')
const chatRouter=require('./routes/chatRouters')

const app = express();
const mongoose = require('mongoose')


let corsOptions={
    origin:[
        'https://lolmadmovie.vercel.app/upload',
        'https://lolmadmovie.vercel.app',
        'http://localhost:3000',
        'https://lolmadmovie.vercel.app/videolink2'
    ],
    credentials:true
}
app.use(cors(corsOptions))
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//mongoose setup
mongoose.Promise = global.Promise
dbUrl = 'mongodb+srv://my_atlas_user:fpemffj159357@cluster0.riaea.mongodb.net/LolMadMovie'
mongoose.connect(dbUrl, {useNewUrlParser: true})
mongoose.set('strictQuery', false)
const db = mongoose.connection

db.on('connected', function () {
    console.log('server connected')
})
db.on('error', console.error)
db.on('open', function () {
    console.log('connected to mongo server ' + dbUrl)
})
db.on('disconnect', function () {
    console.log('disconnected from mongo server' + dbUrl)
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter)
app.use('/memo', lolRouter)
app.use('/playlist', playListRouter)
app.use('/user', userRouter)
app.use('/chat', chatRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
