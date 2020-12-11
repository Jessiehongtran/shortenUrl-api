const route = require('express').Router();
const urlModel = require('./urlModel');

//GET a specific url
route.get('/:urlID', async (req, res) => {
    const urlID = req.params.urlID;
    try {
        const url = await urlModel.getUrl(urlID)
        res.status(200).json(url)
    } catch (err){
        res.status(500).json(err.message)
    }
})

//POST url
route.post('/', async (req, res) => {
    const url = req.body;
    try {
        const response = await urlModel.addUrl(url)
        res.status(200).json(response)
    } catch (err){
        res.status(500).json(err.message)
    }
})

module.exports = route;