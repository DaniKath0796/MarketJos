import mongoose from 'mongoose'

const clienteSchema = new mongoose.Schema({
    nombreUsuario: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'cliente'
    }
},{
    timestamps: true
})

let Dataset = mongoose.models.cliente || mongoose.model('cliente', clienteSchema)
export default Dataset