const router = require('express').Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const Customers = require('../components/customers/customers-model')

router.post('/register', (req, res) => {
    const info = req.body
    const hash = bcrypt.hashSync(info.password, 8)
    info.password = hash

    Customers.add(info)
        .then(customer => {
            if(customer.username){
                const token = generateToken(customer)
                res.status(201).json({message: `${customer.username} successfully registered`, token, user: customer})
            }else {
                res.status(400).json({message: "There was an error registering", error: customer})
            }
        })
        .catch(err => {
            res.status(500).json({message: 'There was an error registering', error: err})
        })
})

router.post('/login', (req, res) => {
    const { username, password } = req.body

    Customers.findBy({ username }).first()
        .then(user => {
            if(user && bcrypt.compareSync(password, user.password)) {
                const token = generateToken(user)
                delete user.password
                res.status(200).json({message: `Welcome back ${user.username}`, token, user})
            }else {
                res.status(401).json({message: 'Invalid Credentials'})
            }
        })
        .catch(err => {
            res.status(500).json({message: 'There was an error logging in', error: err})
        })  
})


function generateToken(user) {
    //Header payload and verify signature
    const payload = {
        user_id: user.id,
        username: user.username,
        type: "customer"
    };

    //Token expiration
    const options = {
        expiresIn: "1d"
    }
    return jwt.sign(payload, process.env.JWT_SECRET, options);
}

module.exports = router;