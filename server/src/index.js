const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000

// app.use(cors())

app.options('/', cors()) 
const corsOptions ={
  origin: 'http://localhost:8271'
}
app.get('/', cors(corsOptions), (req, res) => {
  res.json({
    msg: 'kk'
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})