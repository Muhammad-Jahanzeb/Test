const express = require('express')
const test = require ('../controller/test')
const {createHotel,getAll, updateHotel, deleteHotel, getOne} = require('../controller/hotels')

const router = express.Router()

router.get('/test',test)

router.get('/hotel',getAll).post('/hotel',createHotel)

router.put('/hotel/:id',updateHotel).delete('/hotel/:id',deleteHotel).get('/hotel/:id',getOne)


module.exports = router
