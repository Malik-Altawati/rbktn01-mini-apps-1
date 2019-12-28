
const express = require("express");
const bodyParser = require('body-parser')
const PORT = 1234;
const app = express();
app.use(express.static('client'))

app.use(bodyParser.json())
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.post('/', urlencodedParser, function (req, res) {
    data = req.body.JSON
    var x = jsonToCsv(JSON.parse(data))
    res.end("<h1>SCV FORMAT HERE </h1>\n" + x)
})

app.listen(1234, () => {
    console.log(`server is listening on port: ${PORT}`)
})

var jsonToCsv = (obj) => {
    const header = 'firstName,lastName,county,city,role,sales';
    const headerArray = header.split(',');
    return headerArray
};

