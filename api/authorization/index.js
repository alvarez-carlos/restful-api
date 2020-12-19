//Token, Role
const jwt = require('jsonwebtoken')
const roles = ['student','professor', 'admin']
const Users = require('../models/users')


//Token isAuthenticates ?
const isAuthenticated = (req, res, next) => {
  const token = req.headers.authorization
  if (!token){
    return res.sendStatus(403) //forbidden: must SignIn 
  }
  jwt.verify(token, 'my-secret', (err, tokenDecoded) => {
    const { _id } = tokenDecoded
    Users.findOne({ _id })
    .exec()
    .then(user => {
      req.user =  user
      next()
    })
  })
}

//hasRole ?
const hasRoles = (req, res, next) => {
   if (roles.indexOf(req.user.role) > -1) {
     return next()
   }
  res.sendStatus(403)
}


module.exports = {
  isAuthenticated,
  hasRoles,
}
