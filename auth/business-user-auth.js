const router = require('express').Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const BusinessUser = require('../components/business-users/business-users-model')

router.post('/register', (req, res) => {
    const user = req.body
    const hash = bcrypt.hashSync(user.password, 8)
    user.password = hash
    BusinessUser.add(user)
        .then(saved => {
            const token = generateToken(saved)

            res.status(201).json({message: `${saved.username} successfully registered`, token, user: saved})
        })
        .catch(err => {
            res.status(500).json({message: 'There was an error registering', error: err})
        })
})

router.post('/login', (req, res) => {
    const { username, password } = req.body

    BusinessUser.findBy({ username }).first()
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
    };

    //Token expiration
    const options = {
        expiresIn: "1d"
    }
    return jwt.sign(payload, process.env.JWT_SECRET, options);
}

module.exports = router;