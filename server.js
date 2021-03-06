if (process.env.NODE_ENV !== 'production') {

    require('dotenv').config();

}

const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

const indexRouter = require('./routes/index')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/', {
    useNewUrlParser: true
})

const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log(newFunction()));

app.use('/', indexRouter)
app.listen(process.env.PORT || 3000)

function newFunction() {
    return 'Connected to Mongoose'
}