const Service = require('../models/service-model');
const services = async(req, res) => {
    try{
        const responce = await Service.find();
        if(!responce ){
             res.status(404).json({msg:"No services found"});
            return;
        }

        res.status(200).json({msg:responce});
        

    }catch(error){
    console.log(`error in fetching services: ${error}`);}
    };
    
module.exports = services;