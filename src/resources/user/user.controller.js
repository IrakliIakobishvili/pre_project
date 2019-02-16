import {User} from './user.model';
export const index = async (req, res) => {
    try {
        // userDetails => { email : "janoboka@gmail.com", password: "12343434"}
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
        // userDetails => { email : "janoboka@gmail.com", password: "12343434"}
        // console.log(req.body.userDetails);
        let user = await User.create(req.body.userDetails)
        console.log(user);
        // return res.json(req.body.userDetails)
        return res.status(201).json(user);
    }
    catch(error) {
        console.error(error)
        return res.status(400).json({message: "Invalid Information"});
    }
}