import {User} from './user.model';
import bcrypt from "bcrypt";

export const index = async (req, res) => {
    try {
        let users = await User.find({}).lean().exec();
        return res.status(201).json(users);
    }
    catch(error) {
        console.error(error)
        return res.status(400).json({message: "Invalid Information"});
    }
}

export const store = async (req, res) => {
    try {
        let user = await User.create(req.body.userDetails)
        console.log(req.body.userDetails);
        console.log(user);
        return res.status(201).json(user);
    }
    catch(error) {
        console.error(error)
        return res.status(400).json({message: "Invalid Information"});
    }
}

export const login = async (req, res) => {
    if(!req.body.email || !req.body.password) {
        return res.status(400).send({message: "fail"});
    }

    try {
        const user = await User.findOne({ email: req.body.email}).select('email password').exec();

        if(!user) {
            return res.status(400).send({message: "Wrong Email"});
        }else {           
            bcrypt.compare(req.body.password, user.password, function (err, result) {
                if (result == true) {
                    return res.status(200).send({token: user.password});
                } else {
                    return res.status(400).send({message:"Wrong Password"});
                }
            });
        }
    }
    catch(err) {
        return res.status(400).send(err);
    }
}