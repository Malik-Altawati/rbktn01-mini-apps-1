const express = require("express");
const bodyParser = require('body-parser')
const PORT = 1234;
const app = express();

app.use(express.static('public'))

app.use(bodyParser.json())
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.post('/checkout', urlencodedParser, function (req, res) {
    console.log(data)
    data = JSON.parse(req.body)
    console.log(data)
    // res.end(data)
})


app.listen(1234, () => {
    console.log(`server is listening on port: ${PORT}`)
})