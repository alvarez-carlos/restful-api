//Enrolments EndPoints
const express = require('express')
const Enrolments = require('../models/enrolments')
const { isAuthenticated, hasRoles } = require('../authorization')
const router = express.Router()

//List
router.get('/', (req, res) => {Enrolments.find().exec().then(response => res.status(200).send(response))})

//Get
router.get('/:id', (req, res) => {Enrolments.findById(req.params.id).exec().then(response => res.status(200).send(response))})

//Create
router.post('/', (req, res) => {
  const { _id } = req.user
  Enrolments.create(req.body).then(response => res.status(201).send(response))
  // Enrolments.create({ ...req.body, user_id: _id }).then(response => res.status(201).send(response))
})

//Update
router.put('/:id', (req, res) => {Enrolments.findOneAndUpdate(req.params.id, req.body).then(() => res.sendStatus(204))})

//Delete
router.delete('/:id', (req, res) => {Enrolments.findOneAndDelete(req.params.id).exec().then(() => res.sendStatus(204))})

module.exports = router

