const Joi = require('joi');
const jwt =require('jsonwebtoken');
const UserModel = require('../model/user.model');

// helper functions
function validateRequest(req, next, schema) {
    const options = {
        abortEarly: false, // include all errors
        allowUnknown: true, // ignore unknown props
        stripUnknown: true // remove unknown props
    };
    const { error, value } = schema.validate(req.body, options);
    if (error) {
        next(`Validation error: ${error.details.map(x => x.message).join(', ')}`);
    } else {
        req.body = value;
        next();
    }
}

function validateUserLogin(req, _, next) {
    const userSchema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required()
    })

    validateRequest(req, next, userSchema)    
}

async function verifyUserToken(req, _, next){
    const token =  req.body.token
    jwt.verify(token, "xxxyyyzzzAYO")
    next()
}


module.exports = {validateUserLogin, verifyUserToken}