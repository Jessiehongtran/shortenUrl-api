const db = require('../database/dbConfig');

const addUrl = (url) => {
    return db('urls')
            .returning('id')
            .insert(url)
            .then(ids => ({id: ids[0]}))
}

const getUrl = (urlID) => {
    return db('urls')
            .where({id: urlID})
            .first()
}

module.exports = {
    addUrl,
    getUrl
}