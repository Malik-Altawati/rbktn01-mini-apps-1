
const express = require("express");
const bodyParser = require('body-parser')
const fs = require('fs')
const PORT = 1234;
const app = express();
app.use(express.static('client'))

app.use(bodyParser.json())
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.post('/', urlencodedParser, function (req, res) {
    data = JSON.parse(req.body.JSON)
    var ready = convertor(data)
    // console.log(ready)
    fs.writeFile('test.csv', ready, (err, data) => {
        if (err) {
            console.log(err)
        } else {
            console.log('created')
        }
    })
    res.end(temp(ready))
})

app.listen(1234, () => {
    console.log(`server is listening on port: ${PORT}`)
})

var convertor = function (data) {
    arr = []
    var vars = function (Dayta) {
        var elem = {}
        for (var key in Dayta) {
            if (key != "children") {
                elem[key] = Dayta[key]
            }
        }
        arr.push(elem)
        for (var i = 0; i < Dayta["children"].length; i++) {
            vars(Dayta["children"][i])
        }
    }
    vars(data)
    var vals = [];
    var keys = Object.keys(arr[0])
    for (var i = 0; i < arr.length; i++) {
        vals.push(Object.values(arr[i]))
    }
    var result = keys.join(",") + "\n"
    for (var i = 0; i < vals.length; i++) {
        result += vals[i].join(",") + "\n"
    }
    return result
}

var temp = function (val) {
    return `<h1>SCV FORMAT HERE </h1><div>${val}</div>`
}
