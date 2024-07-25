const User = require('../models/User')
const bcrypt = require ('bcrypt.js')
const jwt = require('jsonwebtoken')

exports.register = async (req,res) => {
    const{username,email,password} = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password,10);
        const user = new User({username,email,password: hashedPassword});
        await user.save();
        res.status(201).json({
            message: "User Registered"
        })
    }catch (error) {
        res.status(500).json({error : "Server Error"});
    }

};

exports.login = async (req,res) => {
    const {email,password} = req.body;
    try {
        const user = await
        User.findOne({email});
        if (!user || !(await bcrypt.compare(password,user.password)))
        {
            return res.status(400).json({
                error: "invalid credentials"
            });
        }
        const token = jwt.sign({id:user._id},process.env.JWT_SECRET,{
            expiresIn: '1h'
        })
        res.json({token});
    } catch (error){
        res.status(500).json({error: 'Server Error'});
    }
}

exports.getMe = async (req,res) => {
    try {
        const user = await 
        User.findById(req.user.id);
        res.json(user);
    }catch (error) {
        res.status(500).json({error: "Server error"})
    }
};