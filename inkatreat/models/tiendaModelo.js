import mongoose from 'mongoose'

const tiendaSchema = new mongoose.Schema({
    ruc: {
        type: String
    },
    coordenadaLocal: {
        type: String
    },
    direccion: {
        type: String,
        required: true
    },
    nombreTienda: {
        type: String,
        required: true
    },
    nombreEncargado: {
        type: String,
        required: true
    },
    celularContacto: {
        type: String,
        required: true
    },
    tipoTienda: {
        type: String,
        required: true
    },
    calificacion: {
        type: String
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
        default: 'tienda'
    }
},{
    timestamps: true
})

let Dataset = mongoose.models.tienda || mongoose.model('tienda', tiendaSchema)
export default Dataset