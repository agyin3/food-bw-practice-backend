require('dotenv').config()
const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const restricted = require('./auth/restricted-middleware')
const BussinessUserAuth = require('./auth/business-user-auth')
const CustomerAuth = require('./auth/customer-auth')
const BusinessRouter = require('./components/business-users/business-users-router')
const CustomerRouter = require('./components/customers/customers-router')
const ServicesRouter = require('./components/services/services-router')

const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())

server.use('/api/auth/business-owner', BussinessUserAuth)
server.use('/api/auth/customers', CustomerAuth)
server.use('/api/businesses', restricted, BusinessRouter)
server.use('/api/customers', restricted, CustomerRouter)
server.use('/api/services', restricted, ServicesRouter)
server.get('/', (req, res) => {
    res.send("IT IS ALIVE!!!!!")
})

module.exports = server