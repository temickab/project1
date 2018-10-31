const express = require('express')
const app = express()

app.use(bodyParser.urlencoded({extended: true})) //body-parser

app.listen(3000, () => {
    console.log('Yup, its on 3000')
  })


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
  })

  app.post('/quotes', (req, res) => {
    console.log('Hellooooooooooooooooo!')
  })