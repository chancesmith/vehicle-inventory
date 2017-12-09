const express = require('express')
const router = express.Router()
const Vehicle = require('../models/vehicle')

// get list of inventory from db
router.get('/vehicles', function (req, res, next) {
  res.send({ type: "GET" })
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