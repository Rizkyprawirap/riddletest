const UserModel = require('../model/user.model');
const jwt =require('jsonwebtoken');

class UserService {
    static async registerUser(firstName, lastName, email, password){
        try {

            const createUser = new UserModel({firstName, lastName, email, password});

            return await createUser.save();
            
        } catch (error) {
            console.log(error)
        }
    }
    
    static async checkEmail(email){
        try {
            return await UserModel.findOne({email});
        } catch (error) {
            console.log(error)
        }
    }

    static async generateToken(tokenData, secretKey, jwt_expire){
        return jwt.sign(tokenData, secretKey, {expiresIn: jwt_expire});
    }
}

module.exports = UserService;