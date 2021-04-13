import connectDB from "../../../utils/connectDB";
import Producto from "../../../models/productoModelo";

connectDB();

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      await getProducts(req, res);
      break;
  }
};

const getProducts = async (req, res) => {
  try {
    const productos = await Producto.find();

    res.json({
      status: "success",
      result: productos.length,
      productos,
    });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};
