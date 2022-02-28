const express = require('express')
const app = express()
const port = 8080
const cors = require('cors')
const bodyParser = require('body-parser')
app.use(cors())
app.use(bodyParser.json())
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/server',async (req, res)=> {
    let a = req.body.a

    res.send({result : a})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})