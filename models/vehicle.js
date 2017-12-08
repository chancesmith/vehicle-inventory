const mongoose = require('mongoose')
const Schema = mongoose.Schema

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
  }
})

const Vehicle = mongoose.model('vehicles', VehiclesSchema)

module.exports = Vehicle