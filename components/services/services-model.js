const query = require('../models.js')

module.exports = {
    find,
    findById,
    add,
    update,
    remove,
    findBy
};

const select = [
    's.*',
    'b.business_name'
]

function find() {
    return query.find('services as s', select)
        .join('business_users as b', 's.business_id', 'b.id')
}

function findById(id) {
    return query.findById('services', id, select)
        .join('business_users as b', 's.business_id', 'b.id')
}

function findBy(filter) {
    return query.findBy('services', filter)
}

function add(user) {
    return query.add('services', user)
}

function update(changes, id) {
    return query.update('services', changes, id)
}

function remove(id) {
    return query.remove('services', id)
}
