const router = require('express').Router()
const bcrypt = require('bcryptjs')
const BusinessUsers = require('./business-users-model')
const Services = require('../services/services-model')

router.get('/', (req, res) => {
    BusinessUsers.find()
        .then(users => {
            users.map(user => delete user.password)
            res.status(200).json({businesses: users})
        })
        .catch(err => {
            res.status(500).json({message: 'There was an error with your request', error: err})
        })
})

router.get('/:id', verifyById, (req, res) => {
    const business_id = req.decodedToken.user_id

    Services.findBy({ business_id })
        .then(services => {
            res.status(200).json({ business: req.business_user, services })
        })
        .catch(err => {
            res.status(500).json({message: 'There was an error with your request', error: err})
        })
})

router.put('/', verifyById, (req, res) => {
    const changes = req.body
    const id  = +req.decodedToken.user_id

    if(changes.password){
        const hash = bcrypt.hashSync(changes.password, 8)
        changes.password = hash
    }

    BusinessUsers.update(changes, id)
        .then(updated => {
            delete updated.password
            res.status(200).json({message: `${updated.username} successfully updated`, user: updated})
        })
        .catch(err => {
            res.status(500).json({message: 'There was an error with your request', error: err})
        })
})

router.delete('/', verifyById, (req, res) => {
    const id = +req.decodedToken.user_id

    BusinessUsers.remove(id)
        .then(deleted => {
            res.status(200).json({message: `${req.business_user.username} successfully deleted`, user: req.business_user})
        })
})

function verifyById(req, res, next) {
    const type = req.decodedToken.type
    const id = req.params.id || req.decodedToken.user_id
    if(type !== 'business'){
        res.status(404).json({message: 'Invalid permissions'})
    }else {
    BusinessUsers.findById(id)
        .then(user => {
            if(user) {
                delete user.password
                req.business_user = user
                next()
            }else {
                res.status(400).json({message: `No user with the ID: ${id} has been found`})
            }
        })
        .catch(err => {
            res.status(500).json({message: 'There was an error with your request', error: err})
        })
    }
}

module.exports = router