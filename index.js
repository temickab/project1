const express = require('express')
const app = express()


app.get("/:name", (req, res) => {
  res.send(`hello ${req.params.name}`)
})


app.listen(4000, () => {//listening on port 4000
    console.log("port 4000 BABY! YEA!")
  })
