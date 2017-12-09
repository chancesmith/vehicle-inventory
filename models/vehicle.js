const mongoose = require('mongoose')
const Schema = mongoose.Schema

// create geolocation Schema
const GeoSchema = new Schema({
  type: {
    type: String,
    default: "Point"
  },
  coordinates: {
    type: [Number],
    index: '2dsphere'
  }
})

// create vehicles Schema & model
const VehiclesSchema = new Schema ({
	make:{
    type: String,
    required: [true, 'Make field is required']
  },
  model:{
    type: String,
    required: [true, 'Model field is required']
  },
  vin:{
    type: String,
    required: [true, 'VIN field is required']
  },
  dealer:{
    type: String,
    required: [true, 'Dealer field is required']
  },
  geometry: GeoSchema
})

const Vehicle = mongoose.model('vehicles', VehiclesSchema)

module.exports = Vehicle