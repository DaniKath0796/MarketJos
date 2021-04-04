import connectDB from '../../../utils/connectDB'
import Cliente from '../../../models/clienteModelo'
import valid from '../../../utils/validCliente'
import bcrypt from 'bcrypt'

connectDB()

export default async (req,res) => {
    switch(req.method){
        case "POST":
            await registro(req,res)
            break;
    }
}

const registro = async (req,res) => {
    try{
        const { nombreUsuario, email, password, cf_password } = req.body
        
        const errMsg = valid(nombreUsuario, email, password, cf_password)
        if(errMsg) return res.status(400).json({err:errMsg})

        const user = await Cliente.findOne({email})
        if(user) return res.status(400).json({err: 'El email ya existe.'})

        const paqsswordHash = await bcrypt.hash(password,12)

        const newUser = new Cliente({ 
            nombreUsuario, email, password: paqsswordHash, cf_password
        })

        await newUser.save()
        res.json({msg: "Registro Exitoso"})

    }catch(err){
        return res.status(500).json({err: err.message})
    }
}