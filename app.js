const express = require('express');
const cors = require('cors');
const ejs = require("ejs");
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');

const AppError = require('./utils/appError');
const feedbackRouter = require('./router/feedback_router');
const globalErrorHandler = require('./conttroller/errorcontroller');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static("public"));

app.enable('trust proxy');
app.use(cors());
app.options('*', cors());


app.use(helmet());
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, please try again in an hour!'
});

app.use('/', limiter);


app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(mongoSanitize());

app.get('/',function(req,res){
  res.render("index");
})
app.use('/feedback/',feedbackRouter);

app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
  });


app.use(globalErrorHandler);

module.exports = app;