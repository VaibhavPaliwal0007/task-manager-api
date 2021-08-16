const jwt = require('jsonwebtoken')
const User = require('../models/user')

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')  //token nikala header se 
        const decoded = jwt.verify(token, process.env.JWT_SECRET) //verify kia 
        const user = await User.findOne({ _id: decoded._id, 'tokens.token': token }) //usse user find kia 

        if (!user) {
            throw new Error()
        }
        
        req.token = token
        req.user = user
        next()
    } catch (e) {
        res.status(401).send({ error: 'Please authenticate.' })
    }
}

module.exports = auth