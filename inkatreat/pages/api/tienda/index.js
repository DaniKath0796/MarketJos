import connectDB from "../../../utils/connectDB";
import Tienda from "../../../models/tiendaModelo";
import Rubro from "../../../models/rubroModelo";

connectDB();

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      await getTiendas(req, res);
      break;
  }
};

const getTiendas = async (req, res) => {
  try {
    const tiendas = await Tienda.find(
      {},
      "nombreTienda direccion logo"
    ).populate("rubroId");

    res.json({
      status: "success",
      result: tiendas.length,
      tiendas,
    });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};
