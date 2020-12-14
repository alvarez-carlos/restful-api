//Subjects EndPoints
const express = require('express')
const Subjects = require('../models/subjects')
const router = express.Router()

//Listar
router.get('/', (req, res) => {Subjects.find().exec().then(response => res.status(200).send(response))})

//Get
router.get('/:id', (req, res) => {Subjects.findById(req.params.id).exec().then(response => res.status(200).send(response))})

//Create
router.post('/', (req, res) => {Subjects.create(req.body).then(response => res.status(201).send(response))})

//Update
router.put('/:id', (req, res) => {Subjects.findOneAndUpdate(req.params.id, req.body).then(() => res.sendStatus(204))})

//Delete
router.delete('/:id', (req, res) => {Subjects.findOneAndDelete(req.params.id).exec().then(() => res.sendStatus(204))})

module.exports = router
