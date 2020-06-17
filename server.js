require('dotenv').config()
const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const BussinessUserAuth = require('./auth/business-user-auth')
const CustomerAuth = require('./auth/customer-auth')

const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())

server.use('/api/auth/bussiness-owner', BussinessUserAuth)
server.use('/api/auth/customers', CustomerAuth)
server.get('/', (req, res) => {
    res.send("IT IS ALIVE!!!!!")
})

module.exports = server