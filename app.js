// Dependencies
const express = require('express')
const cors = require('cors')
const transactionsController = require('./controllers/transactionController')

const app = express()

app.use(cors({
   origin: '*',
   credentials: true
}
))

app.get('/', (req, res) => {
    res.send('Welcome to Budgeting')
})

// Middleware
app.use(express.json())
app.use('/transactions' , transactionsController)

app.get('*', (req, res) => {
    res.status(404).json({error: 'Transaction not found'})
})


module.exports = app;