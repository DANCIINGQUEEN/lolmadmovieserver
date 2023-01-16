var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors=require('cors')
require('./models/db')
require('./models/videoList')
require('./models/user')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var lolRouter = require('./routes/lol')
var playListRouter=require('./routes/playListRoutes');
var userRouter=require('./routes/users')

var app = express();
var mongoose = require('mongoose')
// var bodyParser = require('body-parser');

//body-parser setup
// app.use(bodyParser.urlencoded({extended:true}))
// app.use(bodyParser.json())

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

// app.use('/lol', (req,res)=>{
//     res.header('Access-Control-Allow-Origin', '*');
//
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
//
// })

//mongoose setup
mongoose.Promise = global.Promise
dbUrl = 'mongodb+srv://my_atlas_user:fpemffj159357@cluster0.riaea.mongodb.net/LolMadMovie'
mongoose.connect(dbUrl, {useNewUrlParser: true})
mongoose.set('strictQuery', false)
var db = mongoose.connection

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

app.use('/users', usersRouter);
app.use('/', indexRouter)
app.use('/lol', lolRouter)
app.use('/playlist', playListRouter)
app.use('/user', userRouter)

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
