const express = require('express')
const router = express.Router()
const Vehicle = require('../models/vehicle')

// get list of inventory from db
router.get('/vehicles', function (req, res, next) {
  // Vehicle.find({}).then(function (vehicles) {
  //   res.send(vehicles)
  // })
  Vehicle.geoNear(
    {type: 'Point', coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]},
    {maxDistance: 1000000, spherical: true}
  ).then(function (vehicles) {
    res.send(vehicles)
  })
})

// add new vehicle into db
router.post('/vehicles', function (req, res, next) {
  Vehicle.create(req.body)
    .then(function (vehicle) {
      res.send(vehicle)
    }).catch(next)
})

// update single vehicle
router.put('/vehicles/:id', function (req, res, next) {
  Vehicle.findByIdAndUpdate({_id: req.params.id}, req.body)
  .then( function () {
    Vehicle.findOne({_id: req.params.id}).then(function (vehicle) {
      res.send(vehicle)
    })
  }).catch(next)
})

// get list of inventory from db
router.delete('/vehicles/:id', function (req, res, next) {
  Vehicle.findByIdAndRemove({_id: req.params.id})
    .then( function (vehicle) {
      res.send(vehicle)
    }).catch(next)
})

module.exports = router