const express = require('express')
const app = express()

app.set('port',3000)

app.get('/', (req, res) => {
  res.sendFile(__dirname+'/index.html')
})

app.use(express.static(__dirname))

app.listen(app.get('port'))
