const express = require('express')

module.exports = function(server) {

    //base url
    const router = express.Router()
    server.use('/api', router)

    //routes
    const billingCycle = require('../api/billingCycle/billingCycleService')
    billingCycle.register(router, '/billingCycles')   
}




//1. mongod
//2. nodemon