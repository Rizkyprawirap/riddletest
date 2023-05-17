const UserService = require('../services/user.services');
const bcrypt = require('bcrypt');

exports.register = async(req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;

        // Generate a salt
        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        // Hash the password
        const hashedPassword = bcrypt.hashSync(password, salt);

        const user = await UserService.registerUser(firstName, lastName, email, hashedPassword);
        var tokenData = {_id: user._id, email: user.email, firstName: user.firstName, lastName: user.lastName};
        const token = await UserService.generateToken(tokenData, "secretkey", '1h');

        res.status(200).json({ message: "User successfuly registered!", token: token});

    } catch (error) {
        res.status(500).json({message: "Error while register!"});
    }
}

exports.login = async(req, res) => {
    try {
        const { email, password } = req.body;

        const user = await UserService.checkEmail(email);

        if (!user) {
            res.status(500).json({message: "User not exist!"});
        }

        const isMatch = bcrypt.compareSync(password, user.password);
    
        if(!isMatch) {
            res.status(500).json({message: "Password does not match"});
        }

        var tokenData = {_id: user._id, email: user.email, firstName: user.firstName, lastName: user.lastName};
        const token = await UserService.generateToken(tokenData, "secretkey", '1h');

        res.status(200).json({message:"Logged in", token: token});

    } catch (error) {
        res.status(500).json({message: "Error while login!"});
    }
}