
const express = require("express");
const bodyParser = require('body-parser')
const PORT = 1234;
const app = express();
app.use(express.static('client'))

app.use(bodyParser.json())
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.post('/upload_json', urlencodedParser, function (req, res) {
    data = req.body.JSON
    res.end("<h1>SCV FORMAT HERE </h1> \n\n\n" + data)


})

app.listen(1234, () => {
    console.log(`server is listening on port: ${PORT}`)
})


///////////////////////////////////////////////////////////////////////////
// function convertor(x) {
//     var obj = {}
//     ///////////////////// getting colums process
//     var length = Object.keys(x).length - 1
//     var count = 0
//     for (var key in x) {
//         if (count === length) {
//             break
//         }
//         count++
//         obj[key] = []
//     }

//     for (var key in x) {
//         for (var tey in obj) {
//             if (key === tey) {
//                 obj[tey].push(x[key])
//             }
//         }
//     }
//     return obj
// }
