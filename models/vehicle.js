const mongoose = require('mongoose')
const Schema = mongoose.Schema

// create vehicles Schema & model
const VehiclesSchema = new Schema ({
	make:{
    type: String,
    require: [true, 'Make field is required']
  },
  model:{
    type: String,
    require: [true, 'Model field is required']
  },
  vin:{
    type: String,
    require: [true, 'VIN field is required']
  },
  dealer:{
    type: String,
    require: [true, 'Dealer field is required']
  }
})

const Vehicle = mongoose.model('vehicles', VehiclesSchema)

module.exports = Vehicle