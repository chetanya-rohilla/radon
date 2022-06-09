const PublisherModel = require('../models/publisherModel')

const createPublisher = async function(req,res){
    const createdPublisher = await PublisherModel.create(req.body)
    res.send(createdPublisher)
}

module.exports.createPublisher = createPublisher