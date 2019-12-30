const express = require("express");
const bodyParser = require('body-parser')
const PORT = 1234;
const app = express();

app.use(express.static('public'))

app.use(bodyParser.json())
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.post('/user', urlencodedParser, function (req, res) {
    user.create(req.body, (err, data) => {
        res.send(data);
    });
})

app.listen(1234, () => {
    console.log(`server is listening on port: ${PORT}`)
})


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/checkout', { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log("Connection Successful!");
});
var User = mongoose.Schema({
    username: String,
    email: String,
    password: Number,
    line1: String,
    line2: String,
    city: String,
    state: String,
    zipcode: String,
    creditcard: Number,
    expirydate: Date,
    cvv: Number,
    billingaddress: Number
});

var user = mongoose.model('User', User, 'checkout');