const router = require('express').Router()
const bcrypt = require('bcryptjs')
const Services = require('./services-model')

router.use('/:id', verifyById)

router.get('/', (req, res) => {
    Services.find()
        .then(services => {
            res.status(200).json({services})
        })
        .catch(err => {
            res.status(500).json({message: 'There was an error with your request', error: err})
        })
})

router.get('/:id', (req, res) => {
    res.status(200).json({ service: req.business_service })
})

router.post('/', (req, res) => {
    const service = req.body
   if(!service.title || !service.description || !service.price) {
       res.status(400).json({message: 'All of the following are required: title, description, price'})
   }else {
       Services.add({...service, business_id: req.decodedToken.user_id})
        .then(service => {
            res.status(201).json({message: 'Service successfully added', service})
        })
        .catch(err => {
            res.status(500).json({message: 'There was an error with your request', error: err})
        })
   }
})

router.put('/:id', (req, res) => {
    const changes = req.body
    const { id }  = +req.params

    if(changes.password){
        const hash = bcrypt.hashSync(changes.password, 8)
        changes.password = hash
    }

    Services.update(changes, id)
        .then(updated => {
            delete updated.password
            res.status(200).json({message: `${updated.servicename} successfully updated`, service: updated})
        })
        .catch(err => {
            res.status(500).json({message: 'There was an error with your request', error: err})
        })
})

router.delete('/:id', (req, res) => {
    const { id } = +req.params

    Services.remove(id)
        .then(deleted => {
            res.status(200).json({message: `${req.business_service.servicename} successfully deleted`, service: req.business_service})
        })
})

function verifyById(req, res, next) {
    const id = req.params.id

    Services.findById(id)
        .then(service => {
            if(service) {
                delete service.password
                req.business_service = service
                next()
            }else {
                res.status(400).json({message: `No service with the ID: ${id} has been found`})
            }
        })
        .catch(err => {
            res.status(500).json({message: 'There was an error with your request', error: err})
        })
}

module.exports = router