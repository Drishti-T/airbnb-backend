const { port } = require('./config')
const express = require('express')
const app = express()

//middleware
app.use(express.json())

//importing v1 route
const v1 = require('./v1/index')


//routes
app.use('/api/v1', v1)
app.get('/' , () => {
    console.log("hello world")
})


//port
const PORT = port || 3001
app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})