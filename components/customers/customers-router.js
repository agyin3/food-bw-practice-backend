const router = require('express').Router()
const bcrypt = require('bcryptjs')
const Customers = require('./customers-model')

router.get('/', (req, res) => {
    Customers.find()
        .then(users => {
            users.map(user => delete user.password)
            res.status(200).json({businesses: users})
        })
        .catch(err => {
            res.status(500).json({message: 'There was an error with your request', error: err})
        })
})

router.post('/businesses/favs', (req, res) => {
    const { business_id } = req.body
    const info = { business_id, customer_id: +req.decodedToken.user_id }
    console.log(info)
    Customers.addFavBusiness(info)
        .then(result => {
            res.status(201).json({message: "Success"})
        })
        .catch(err => {
            res.status(500).json({message: 'There was an error with your request', error: err})
        })
})
router.get('/businesses/favs', (req, res) => {
    const { user_id } = req.decodedToken

    Customers.getFavBusinesses(user_id)
        .then(favs => {
            if(favs.length){
                res.status(200).json({favorites: favs})
            }else{
                res.status(400).json({message: 'No favorite businesses'})
            }
        })
        .catch(err => {
            res.status(500).json({message: 'There was an error with your request', error: err})
        })
})

router.get('/:id', verifyById, (req, res) => {

    res.status(200).json({ user: req.business_user })
})

router.put('/', verifyById, (req, res) => {
    const changes = req.body
    const id  = +req.decodedToken.user_id

    if(changes.password){
        const hash = bcrypt.hashSync(changes.password, 8)
        changes.password = hash
    }

    Customers.update(changes, id)
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

    Customers.remove(id)
        .then(deleted => {
            res.status(200).json({message: `${req.business_user.username} successfully deleted`, user: req.business_user})
        })
})

function verifyById(req, res, next) {
    const type = req.decodedToken.type
    const id = req.params.id || req.decodedToken.user_id
    if(type !== 'customer'){
        res.status(404).json({message: 'Invalid permissions'})
    }else {
    Customers.findById(id)
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