const query = require('../models.js')
const db = require('../../data/db-config')

module.exports = {
    find,
    findById,
    add,
    update,
    remove,
    findBy,
    addFavBusiness,
    getFavBusinesses
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

function addFavBusiness(info) {
    return db('customer_favs')
        .insert(info)
}

function getFavBusinesses(customer_id) {
    const select = ['b.business_name']
    return query.findBy('customer_favs as cf', { customer_id }, select)
        .join('business_users as b', 'b.id', 'cf.business_id')
}

function update(changes, id) {
    return query.update('customers', changes, id)
}

function remove(id) {
    return query.remove('customers', id)
}
