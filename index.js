const express = require('express')
const bodyParser = require('body-parser')
const port = process.env.PORT || 5000  
const main_routes = require('./directory/route.controller')
const e = require('express')

/// middleswares 
app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//route
app.use('/api/', main_routes)

app.listen(port, ()=>{
    console.log(`server at port http://localhost:${port}`)
})