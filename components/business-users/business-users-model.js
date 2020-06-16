const query = require('../models.js')

module.exports = {
    find,
    findById,
    add,
    update,
    remove,
    findBy
};

function find() {
    return query.find('business_business_users')
}

function findById(id) {
    return query.findById('business_users', id)
}

function findBy(filter) {
    return query.findBy('business_users', filter)
}

function add(user) {
    return query.add('business_users', user)
}

function update(changes, id) {
    return query.update('business_users', changes, id)
}

function remove(id) {
    return query.remove('business_users', id)
}
