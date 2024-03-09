const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const cors = require('cors')
const mongoose = require('mongoose');
require('dotenv').config()

//middleware
app.use(cors())
app.use(express.json())

//connect mongoose
mongoose.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.api5kkz.mongodb.net/firstdatabase?retryWrites=true&w=majority&appName=Cluster0`)
.then(
    console.log("MongoDB Connected")
)
.catch((error)=>console.log("Error connecting to Mongodb", error))


//import routes here
const menuRoutes = require('./api/routes/MenuRoutes')
app.use('/menu', menuRoutes)

const cartRoutes = require('./api/routes/CartRouter')
app.use('/carts', cartRoutes)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})