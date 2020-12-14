//Auth EndPoints
const express = require('express')
const crypto = require('crypto')

const Users = require('../models/users')


const router = express.Router()

//Register
router.post('/register', (req, res) => {
  const { email, password } = req.body
  crypto.randomBytes(16, (err, saltBuffer) => {
    const saltString = saltBuffer.toString('base64')
    crypto.pbkdf2(password, saltString, 15000, 64, 'sha1', (err, pwEncryptedBuffer) => {
      const pwEncryptedString = pwEncryptedBuffer.toString('base64')
      //user exists?
      Users.findOne({ email })
        .exec()
        .then(user => {
	  if(user){
	    return res.send('User already exists')	
	  }
	  Users.create({
	    email,
	    password: pwEncryptedString,
	    salt: saltString,
	  }).then(() => res.send('User created successfully'))
	})
    }) 
  })
})

//Login
router.post('/login', (req, res) => {
  const { email, password } = req.body
  Users.findOne({ email })
    .exec()
    .then( user => {
      if (!user) {
	return res.send('User or Password Incorrect')	 
      }
      crypto.pbkdf2(password, user.salt, 15000, 64, 'sha1', (err, pwEncryptedBuffer) => {
        const pwEncryptedString = pwEncryptedBuffer.toString('base64')
	if (user.password === pwEncryptedString){
	  //const token = signToken(user._id)
	  //return res.send({ token })
	  return res.send('Here is your Token')
	}
	res.send('User or Password Incorrect')
      })
    })
})

//me endpint
router.get('/me', (req, res) => {
  res.send('Hello from me endpoint!')
})

module.exports = router
