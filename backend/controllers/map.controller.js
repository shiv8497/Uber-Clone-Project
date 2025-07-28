const { validationResult } = require("express-validator");
const mapService = require("../services/maps.service");
const { default: axios } = require("axios");

module.exports.getCoordinates = async(req ,res ) =>{
    const error = validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({errors: error.array()});
    }
    const {address} = req.query;
    try{
        const coordinates = await mapService.getCoordinates(address); // <-- yahan fix kiya
        res.status(200).json(coordinates);
    }catch(err){
        res.status(404).json({ message: "Coordinates not found" });
    }
}


module.exports.getDistanceTime = async(req ,res) => {
    try {

        const error = validationResult(req);
        if (!error.isEmpty()){

            return res.status(400).json({errors: error.array()})
        }
        const {origin , destination} = req.query;
        const distanceTime = await mapService.getDistanceTime(origin, destination);
        res.status(200).json(distanceTime); 
    } catch (error) {
        console.error(error);
         res.status(500).json({ message: "Internal server error" });
    }
}

module.exports.getAutoCompleteSuggestions = async(req ,res) =>{
       try {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
            
        }

        const {input} = req.query;
        const suggestions = await mapService.getAutoCompleteSuggestions(input);
        res.status(200).json(suggestions);
       }
        
        catch (error) {
           console.error(error);
           res.status(500).json({ message: "Internal server error" });
       }
}