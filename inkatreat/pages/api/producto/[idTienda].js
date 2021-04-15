import connectDB from "../../../utils/connectDB";
import Producto from "../../../models/productoModelo";
import Tienda from "../../../models/tiendaModelo";

connectDB();

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      await getProductsIdTienda(req, res);
      break;
  }
};

const getProductsIdTienda = async (req, res) => {
  try {
    const { idTienda } = req.query;
    const productos = await Producto.find({ idTienda: idTienda });

    res.json({
      status: "success",
      result: productos.length,
      productos,
    });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};
