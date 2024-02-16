const Hotel = require('../models/Hotel')

//Create hotel
const createHotel = async(req,res)=>{
    const newHotel = new Hotel(req.body)

    try{
        const savedHotel = await newHotel.save()
        res.json(savedHotel).status(200)

    }catch(err){
        res.josn(err).status(500)
    }
}

//Get all
const getAll = async(req,res)=>{
    
    try{
        const hotels = await Hotel.find()
        res.json(hotels).status(200)
    }
    catch(err){
        res.json(err).status(500)
    }
    
}

//Update
const updateHotel = async(req,res)=>{
    try{
           
    const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.json(updatedHotel).status(200)

    }
    catch(err){
        res.json(err).status(500)
    }
}

//Delete
const deleteHotel = async(req,res)=>{
    try{
        await Hotel.findByIdAndDelete(req.params.id)
        res.json('Hotel deleted!').status(200)
    }
    catch(err){
        res.json(err).status(500)
    }
}

//Get One
const getOne = async(req,res)=>{
    try{
        const hotel = await Hotel.findById(req.params.id)
        res.json(hotel).status(200)
    }
    catch(err){
        res.json(err).status(400)
    }
}

module.exports = {createHotel, getAll, updateHotel, deleteHotel, getOne}