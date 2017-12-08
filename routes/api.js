const express = require('express')
const router = express.Router()
const Vehicle = require('../models/vehicle')

// get list of inventory from db
router.get('/vehicles', function (req, res) {
  res.send({ type: "GET" })
})

// add new vehicle into db
router.post('/vehicles', function (req, res) {
  Vehicle.create(req.body)
    .then(function (vehicle) {
      res.send(vehicle)
    }).catch()
})

// get list of inventory from db
router.put('/vehicles/:id', function (req, res) {
  res.send({ type: "PUT" })
})

// get list of inventory from db
router.delete('/vehicles/:id', function (req, res) {
  res.send({ type: "DELETE" })
})

module.exports = router