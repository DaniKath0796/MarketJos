import connectDB from '../../../utils/connectDB'
import Cliente from '../../../models/clienteModelo'
import bcrypt from 'bcrypt'
import { CreateAccessToken, CreateRefreshToken } from '../../../utils/generateToken'

connectDB()

export default async (req,res) => {
    switch(req.method){
        case "POST":
            await login(req,res)
            break;
    }
}

const login = async (req,res) => {
    try{
        const { email, password } = req.body

        const user = await Cliente.findOne({email})
        if(!user) return res.status(400).json({err: 'El usuario no existe.'})

        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch) return res.status(400).json({err: 'Constraseña incorrecta.'})

        const access_token = CreateAccessToken({id: user._id})
        const refresh_token = CreateRefreshToken({id: user._id})

        res.json({
            msg: "Login Exitoso",
            refresh_token,
            access_token,
            user: {
                name: user.nombreUsuario,
                email: user.email,
                role: user.role
            }
        })

    }catch(err){
        return res.status(500).json({err: err.message})
    }
}