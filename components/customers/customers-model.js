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
    return query.find('customers')
}

function findById(id) {
    return query.findById('customers', id)
}

function findBy(filter) {
    return query.findBy('customers', filter)
}

function add(user) {
    return query.add('customers', user)
}

function update(changes, id) {
    return query.update('customers', changes, id)
}

function remove(id) {
    return query.remove('customers', id)
}
