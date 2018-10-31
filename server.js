const express = require('express')
const app = express()

app.listen(3000, () => {
    console.log('Yup, its on 3000')
  })


//   app.get('/', function(req, res) {
//     res.send('Hello World')
//   })

//   app.get("/", (request, response) => {
//     response.send("Hello World")
//   })

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
  })

//   res.sendFile(__dirname + '/index.html')