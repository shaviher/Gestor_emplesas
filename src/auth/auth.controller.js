import argon2 from 'argon2'
import { verify } from "argon2"
import { generateJWT } from "../helpers/generate-jwt.js"
import User from "../user/user.model.js"


export const register = async (req, res) => {
    try{
        const data = req.body;

        const encryptedPassword = await argon2.hash(data.contra);

        data.contra = encryptedPassword;

        const user = await Usuario.create(data);

        return res.status(201).json({
            message: "The user has been registered",
            nombre: user.nombre,
            correo: user.correo
        });

    }catch(err){
        return res.status(500).json({
            success: false,
            message: "User registration failed",        
            error: err.message
        })
    }
 }


 export const login = async (req, res) => {
    const { email, username, password } = req.body
    try{
        const user = await User.findOne({
            $or:[{email: email}, {username: username}]
        })

        if(!user){
            return res.status(400).json({
                message: "Invalid credentials",
                error: "The username or email entered does not exist"
            })
        }

        const validPassword = await verify(user.password, password)

        if(!validPassword){
            return res.status(400).json({
                message: "Invalid credentials",
                error: "Incorrect password"
            })
        }

        const token = await generateJWT(user.id)

        return res.status(200).json({
            message: "Login successful",
            userDetails: {
                token: token
            }
        })

    }catch(err){
        return res.status(500).json({
            message: "login failed, server error",
            error: err.message
        })
    }
 }