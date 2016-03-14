var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/mean-auth-test');
var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data
var app = express();

// GET /style.css etc
app.use(express.static(__dirname + '/public'));

// require Passport and Local Strategy
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

//Initiallize Passport
app.use(passport.initialize());

var UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    firstName: String,
    lastName: String,
    roles: [String]
});

// THIS IS NOT SECURE - DO NOT USE IN PRODUCTION APPS!
// THIS IS JUST FOR EXPERIMENTATION PURPOSES
UserSchema.methods.validPassword = function( pwd ) {
    return ( this.password === pwd );
};

var User = mongoose.model("User", UserSchema);

// Configure Passport Local Strategy
passport.use(new LocalStrategy(
    function(username, password, done) {
        User.findOne({ username: username }, function(err, user) {
            if (err) { return done(err); }
            if (!user) {
                return done(null, false, { message: 'Incorrect username.' });
            }
            if (!user.validPassword(password)) {
                return done(null, false, { message: 'Incorrect password.' });
            }
            console.log(user);
            return done(null, user);
        });
    }
));

//  In order to support login sessions, Passport will serialize and deserialize
// user instances to and from the session.
passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', function(req, res){
  res.send('hello world');
});

app.post('/login', passport.authenticate('local'), function(req, res){
  console.log('/login');
  console.log(req.body);
});

app.listen(3000);
console.log("Listening on PORT 3000");
