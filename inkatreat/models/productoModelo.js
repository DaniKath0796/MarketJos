import mongoose from "mongoose";

const productoSchema = new mongoose.Schema(
  {
    idTienda: {
      type: mongoose.Types.ObjectId,
      ref: "tienda",
    },
    nombre: {
      type: String,
      required: true,
      trim: true,
    },
    descripcion: {
      type: String,
      required: true,
    },
    precio: {
      type: Number,
      required: true,
      trim: true,
    },
    imagenes: {
      type: Array,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

let Dataset =
  mongoose.models.producto || mongoose.model("producto", productoSchema);
export default Dataset;
